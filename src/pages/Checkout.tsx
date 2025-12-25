import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate, Link } from 'react-router-dom';

export const Checkout: React.FC = () => {
    const { subtotal, items, clearCart } = useCart();
    const navigate = useNavigate();
    const [step, setStep] = useState(1); // 1: Address, 2: Payment

    // Using simple state instead of separate routes to keep SPA feel while mimicing pages
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        cpf: '',
        email: '',
        cep: '',
        address_street: '',
        address_number: '',
        complement: '',
        neighborhood: '',
        reference: '',
        city: '',
        state: ''
    });

    const deliveryFee = 6.00; // Fixed for MVP
    const total = subtotal + deliveryFee;

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCepBlur = async () => {
        if (formData.cep.length >= 8) {
            try {
                const res = await fetch(`https://viacep.com.br/ws/${formData.cep.replace(/\D/g, '')}/json/`);
                const data = await res.json();
                if (!data.erro) {
                    setFormData(prev => ({
                        ...prev,
                        address_street: data.logradouro,
                        neighborhood: data.bairro,
                        city: data.localidade,
                        state: data.uf
                    }));
                }
            } catch (e) {
                console.error("CEP error", e);
            }
        }
    };

    const handleAddressSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStep(2);
        window.scrollTo(0, 0);
    };

    const [paymentData, setPaymentData] = useState<{ qr_code?: string, qr_code_url?: string, qr_code_base64?: string, emv?: string, transaction_id: string } | null>(null);
    const [loading, setLoading] = useState(false);

    // Polling effect
    React.useEffect(() => {
        let interval: any;
        if (paymentData?.transaction_id) {
            interval = setInterval(async () => {
                try {
                    const res = await fetch('/.netlify/functions/dice-api', {
                        method: 'POST',
                        body: JSON.stringify({
                            action: 'check_status',
                            payload: { transaction_id: paymentData.transaction_id }
                        })
                    });
                    const data = await res.json();
                    if (data.status === 'COMPLETED' || data.status === 'PAID') {
                        clearInterval(interval);
                        clearCart();
                        // Redirect to success / WhatsApp with confirmation
                        const message = `*PEDIDO CONFIRMADO (PIX)*\nCliente: ${formData.name}\nTotal: R$ ${total.toFixed(2)}\nID Transação: ${paymentData.transaction_id}`;
                        window.location.href = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
                    }
                } catch (e) {
                    console.error("Polling error", e);
                }
            }, 5000);
        }
        return () => clearInterval(interval);
    }, [paymentData, total, formData, clearCart]);

    const handlePayment = async (method: string) => {
        if (method === 'delivery') {
            const message = `*NOVO PEDIDO*\nCliente: ${formData.name}\nEndereço: ${formData.address_street}, ${formData.address_number} - ${formData.neighborhood}\nTotal: R$ ${total.toFixed(2)}\nPagamento: Entrega (Dinheiro/Cartão)`;
            const waLink = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
            clearCart();
            window.location.href = waLink;
            return;
        }

        if (method === 'pix') {
            setLoading(true);
            try {
                // Call Dice API via Netlify Function
                const res = await fetch('/.netlify/functions/dice-api', {
                    method: 'POST',
                    body: JSON.stringify({
                        action: 'create_payment',
                        payload: {
                            product_name: `Pedido Delivery - ${formData.name}`,
                            amount: total, // Ensure min 2.00
                            payer: {
                                name: formData.name,
                                email: formData.email || 'cliente@email.com', // Fallback if optional
                                document: formData.cpf.replace(/\D/g, '') // Remove non-digits
                            }
                        }
                    })
                });

                if (!res.ok) {
                    const err = await res.json();
                    alert('Erro ao gerar Pix: ' + (err.error || 'Tente novamente'));
                    setLoading(false);
                    return;
                }

                const data = await res.json();
                // Assuming data structure based on user prompt context (standard Pix API usually returns qr_code base64 and copy_paste)
                // User prompt didn't strictly specify response body of /deposit, but usually it has qr_code_base64 or similar.
                // We will handle generic properties or log if undefined.
                // Adjusting to common Dice API response:
                // url: string (QR Image URL?), qr_code: string (Copy Paste?), transaction_id. 
                // Let's assume response has { qr_code, qr_code_url, transaction_id } or similar.

                // If the user's curl example returns a "transaction_id", we definitely need that.

                setPaymentData(data); // Save all data to state to render
                setStep(3); // Go to QR Code step

            } catch (e) {
                console.error(e);
                alert('Erro de conexão. Tente novamente.');
            } finally {
                setLoading(false);
            }
        }
    };

    if (items.length === 0) return <div className="empty-cart-message">Carrinho vazio</div>;

    return (
        <div className="checkout-page">
            {step === 3 && paymentData && (
                <>
                    <header className="header">
                        <h1>Pagamento Pix</h1>
                    </header>
                    <div className="cart-container" style={{ textAlign: 'center', padding: '40px 20px' }}>
                        <h2 style={{ fontSize: '20px', marginBottom: '20px' }}>Escaneie o QR Code</h2>

                        {/* Display QR Code - Adjust property based on actual API response */}
                        {paymentData.qr_code_url && <img src={paymentData.qr_code_url} alt="QR Code Pix" style={{ maxWidth: '250px', marginBottom: '20px' }} />}

                        {/* Also support raw base64 if provided instead of URL */}
                        {!paymentData.qr_code_url && paymentData.qr_code_base64 && (
                            <img src={`data:image/png;base64,${paymentData.qr_code_base64}`} alt="QR Code Pix" style={{ maxWidth: '250px', marginBottom: '20px' }} />
                        )}

                        <p style={{ color: '#666', marginBottom: '15px' }}>Ou copie e cole o código abaixo:</p>

                        <div style={{ background: '#f0f0f0', padding: '10px', wordBreak: 'break-all', borderRadius: '5px', fontSize: '12px', marginBottom: '20px' }}>
                            {paymentData.qr_code || paymentData.emv}
                        </div>

                        <button
                            onClick={() => navigator.clipboard.writeText(paymentData.qr_code || paymentData.emv || '')}
                            className="action-button"
                            style={{ width: 'auto', padding: '10px 20px', marginBottom: '30px' }}
                        >
                            Copiar Código Pix
                        </button>

                        <div className="loader" style={{ fontSize: '14px', color: '#666' }}>
                            <span style={{ display: 'inline-block', animation: 'pulse 1s infinite' }}>⏳</span> Aguardando pagamento...
                        </div>
                    </div>
                </>
            )}

            {step === 1 && (
                <>
                    <header className="header">
                        <Link to="/cart">&lt;</Link>
                        <h1>Endereço e Contato</h1>
                    </header>

                    <div className="form-container">
                        <form id="addressForm" onSubmit={handleAddressSubmit}>
                            <h2 className="section-title">Seus Dados</h2>
                            <div className="form-group">
                                <label htmlFor="name">Nome Completo</label>
                                <input type="text" id="name" name="name" required placeholder="Seu nome completo" onChange={handleInput} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Telefone / WhatsApp</label>
                                <input type="tel" id="phone" name="phone" required placeholder="(99) 99999-9999" onChange={handleInput} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cpf">CPF (Obrigatório para o PIX)</label>
                                <input type="text" id="cpf" name="cpf" required placeholder="000.000.000-00" onChange={handleInput} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email (Opcional)</label>
                                <input type="email" id="email" name="email" placeholder="seuemail@exemplo.com" onChange={handleInput} />
                            </div>

                            <h2 className="section-title">Endereço de Entrega</h2>

                            <div>
                                <div className="form-group">
                                    <label htmlFor="cep">CEP</label>
                                    <input type="tel" id="cep" name="cep" placeholder="00000-000" required onChange={handleInput} onBlur={handleCepBlur} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address_street">Endereço</label>
                                    <input type="text" id="address_street" name="address_street" placeholder="Rua, Avenida..." required value={formData.address_street} onChange={handleInput} />
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="address_number">Número</label>
                                        <input type="text" id="address_number" name="address_number" required onChange={handleInput} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="complement">Complemento</label>
                                        <input type="text" id="complement" name="complement" placeholder="Apto, Bloco..." onChange={handleInput} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="neighborhood">Bairro</label>
                                    <input type="text" id="neighborhood" name="neighborhood" required value={formData.neighborhood} onChange={handleInput} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="reference">Ponto de Referência (obrigatório)</label>
                                    <input type="text" id="reference" name="reference" required onChange={handleInput} />
                                </div>
                            </div>
                        </form>
                    </div>

                    <footer className="checkout-footer">
                        <button type="submit" form="addressForm" className="btn-confirm">✓ CONFIRMAR DADOS</button>
                    </footer>
                </>
            )}

            {step === 2 && (
                <>
                    <header className="header">
                        <button onClick={() => setStep(1)}>&lt;</button>
                        <h1>Terminar Pedido</h1>
                    </header>

                    <div className="cart-container">
                        <div className="summary">
                            <div className="summary-row">
                                <span>Pedido</span>
                                <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
                            </div>
                            <div className="summary-row">
                                <span>Taxa de entrega</span>
                                <span>R$ {deliveryFee.toFixed(2).replace('.', ',')}</span>
                            </div>
                            <div className="summary-row total">
                                <span>Total a pagar</span>
                                <span>R$ {total.toFixed(2).replace('.', ',')}</span>
                            </div>
                        </div>

                        <div className="payment-options">
                            <h2>Qual a forma de pagamento?</h2>
                            <div className="options-container">
                                <div onClick={() => handlePayment('delivery')} className="payment-option">
                                    {/* Icons would be clearer with FontAwesome or SVG maps, using text for now or simple SVG */}
                                    {/* Simple Wallet Icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" /></svg>
                                    <span>Pagar na Entrega</span>
                                </div>
                                <button onClick={() => handlePayment('pix')} className="payment-option" disabled={loading} style={{ opacity: loading ? 0.7 : 1, border: 'none', background: 'none' }}>
                                    {/* PIX Icon */}
                                    {loading ? (
                                        <div style={{ margin: '0 auto', width: '24px', height: '24px', border: '3px solid #ccc', borderTop: '3px solid var(--primary-red)', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
                                    ) : (
                                        <svg className="pix" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
                                    )}
                                    <span>{loading ? 'Gerando Pix...' : 'Pix'}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
