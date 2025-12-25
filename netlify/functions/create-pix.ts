interface PIXPayload {
    paymentMethod: string;
    amount: number;
    customer: {
        name: string;
        cpf: string;
        phone: string;
        email: string;
    };
    external_id: string;
    postbackUrl: string;
}

export const handler = async (event: any) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const body = JSON.parse(event.body);

        // Use environment variables for API tokens
        const API_URL = process.env.UTMIFY_API_URL || 'https://api.utmify.com/v1/payments';
        const API_TOKEN = process.env.UTMIFY_API_TOKEN;

        // Mock response if no token provided (for demo purposes)
        if (!API_TOKEN) {
            console.warn("No API Token found, returning mock data");
            return {
                statusCode: 200,
                body: JSON.stringify({
                    qrCode: "00020126580014BR.GOV.BCB.PIX0136123e4567-e89b-12d3-a456-426614174000520400005303986540510.005802BR5913Cicero Pizza6008Brasilia62070503***6304E5F6",
                    paymentId: "mock_payment_123"
                })
            };
        }

        const payload: PIXPayload = {
            paymentMethod: 'pix',
            amount: body.amount, // API expects cents
            customer: {
                name: body.name,
                cpf: body.cpf,
                phone: body.phone,
                email: 'cliente@exemplo.com' // Should be collected in form
            },
            external_id: `ord_${Date.now()}`,
            postbackUrl: 'https://yoursite.netlify.app/.netlify/functions/webhook'
        };

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'token': API_TOKEN,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' })
        };
    }
};
