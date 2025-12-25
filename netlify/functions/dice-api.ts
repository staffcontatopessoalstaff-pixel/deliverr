import { Handler } from '@netlify/functions';

const DICE_API_URL = 'https://api.use-dice.com';

// Simple in-memory cache for the token (warm starts)
let cachedToken: string | null = null;
let tokenExpiry: number = 0;

const authenticate = async () => {
    // Check if valid cached token exists
    if (cachedToken && Date.now() < tokenExpiry) {
        return cachedToken;
    }

    const clientId = process.env.DICE_CLIENT_ID;
    const clientSecret = process.env.DICE_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
        throw new Error('Missing Dice API credentials');
    }

    const response = await fetch(`${DICE_API_URL}/api/v1/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            client_id: clientId,
            client_secret: clientSecret
        })
    });

    if (!response.ok) {
        const error = await response.text();
        console.error('Dice Auth Error:', error);
        throw new Error('Failed to authenticate with Dice API');
    }

    const data = await response.json();
    // Assuming response format: { access_token: "...", expires_in: 3600 }
    // Adjust based on actual API response if different. usually it's access_token.
    // User didn't specify auth response format, assuming standard JWT/OAuth.

    // Fallback if structure is different, log it (in prod we'd want better error handling)
    const token = data.access_token || data.token;

    cachedToken = token;
    // Set expiry to slightly less than actual to be safe (e.g., -5 minutes)
    // If 'expires_in' is not provided, default to 1 hour
    const expiresIn = data.expires_in || 3600;
    tokenExpiry = Date.now() + (expiresIn * 1000) - 300000;

    return token;
};

export const handler: Handler = async (event, context) => {
    // Only allow POST
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const body = JSON.parse(event.body || '{}');
        const { action, payload } = body;

        const token = await authenticate();

        if (action === 'create_payment') {
            const response = await fetch(`${DICE_API_URL}/api/v2/payments/deposit`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if (!response.ok) {
                return {
                    statusCode: response.status,
                    body: JSON.stringify({ error: data.message || 'Payment creation failed' })
                };
            }

            return {
                statusCode: 200,
                body: JSON.stringify(data)
            };
        }

        if (action === 'check_status') {
            const transactionId = payload.transaction_id;
            if (!transactionId) {
                return { statusCode: 400, body: JSON.stringify({ error: 'Missing transaction_id' }) };
            }

            const response = await fetch(`${DICE_API_URL}/api/v1/transactions/getStatusTransac/${transactionId}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            const data = await response.json();

            if (!response.ok) {
                return {
                    statusCode: response.status,
                    body: JSON.stringify({ error: data.message || 'Status check failed' })
                };
            }

            return {
                statusCode: 200,
                body: JSON.stringify(data)
            };
        }

        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Invalid action' })
        };

    } catch (error: any) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message || 'Internal Server Error' })
        };
    }
};
