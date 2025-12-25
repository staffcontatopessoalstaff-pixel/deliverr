import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
// import { useNavigate } from 'react-router-dom';

export const Checkout: React.FC = () => {
    const { subtotal, items, clearCart } = useCart();
    // const navigate = useNavigate();
    const [step, setStep] = useState(1); // 1: Info/Address, 2: Payment

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        cpf: '',
        cep: '',
        address: '',
        number: '',
        neighborhood: '',
        reference: '',
        paymentMethod: ''
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
                        address: data.logradouro,
                        neighborhood: data.bairro,
                        // city: data.localidade...
                    }));
                }
            } catch (e) {
                console.error("CEP error", e);
            }
        }
    };

    const handlePayment = async (method: string) => {
        if (method === 'pix') {
            // Generate PIX via Netlify Function
            // For MVP demo, we'll just simulate success or redirect
            // In real app, call /api/create-pix
        }

        // WhatsApp Generation
        const message = `*NOVO PEDIDO*\nCliente: ${formData.name}\nEndereço: ${formData.address}, ${formData.number}\nTotal: R$ ${total.toFixed(2)}\nPagamento: ${method}`;
        const waLink = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;

        // Clear cart and redirect
        clearCart();
        window.location.href = waLink;
    };

    if (items.length === 0) return <div className="p-10 text-center">Carrinho vazio</div>;

    return (
        <div className="bg-[#f5f5f5] min-h-screen pb-20">
            <header className="bg-[#d92d2d] text-white p-4">
                <h1 className="font-medium">{step === 1 ? 'Dados de Entrega' : 'Pagamento'}</h1>
            </header>

            <main className="p-4">
                {step === 1 && (
                    <div className="bg-white p-5 rounded-lg shadow-sm space-y-4">
                        <h2 className="font-bold border-b pb-2">Seus Dados</h2>
                        <input name="name" placeholder="Nome Completo" className="w-full p-3 border rounded" onChange={handleInput} />
                        <input name="phone" placeholder="Telefone" className="w-full p-3 border rounded" onChange={handleInput} />
                        <input name="cpf" placeholder="CPF (Obrigatório para Pix)" className="w-full p-3 border rounded" onChange={handleInput} />

                        <h2 className="font-bold border-b pb-2 pt-4">Endereço</h2>
                        <input name="cep" placeholder="CEP" className="w-full p-3 border rounded" onChange={handleInput} onBlur={handleCepBlur} />
                        <input name="address" placeholder="Endereço" className="w-full p-3 border rounded" value={formData.address} onChange={handleInput} />
                        <div className="flex gap-2">
                            <input name="number" placeholder="Número" className="w-1/3 p-3 border rounded" onChange={handleInput} />
                            <input name="neighborhood" placeholder="Bairro" className="w-2/3 p-3 border rounded" value={formData.neighborhood} onChange={handleInput} />
                        </div>
                        <input name="reference" placeholder="Ponto de Referência" className="w-full p-3 border rounded" onChange={handleInput} />

                        <button onClick={() => setStep(2)} className="w-full bg-gray-800 text-white p-4 rounded font-bold mt-4">IR PARA PAGAMENTO</button>
                    </div>
                )}

                {step === 2 && (
                    <div className="space-y-4">
                        <div className="bg-white p-5 rounded-lg shadow-sm">
                            <h2 className="font-bold mb-4">Resumo</h2>
                            <div className="flex justify-between mb-2"><span>Subtotal</span><span>R$ {subtotal.toFixed(2)}</span></div>
                            <div className="flex justify-between mb-2"><span>Taxa de Entrega</span><span>R$ {deliveryFee.toFixed(2)}</span></div>
                            <div className="flex justify-between font-bold text-lg pt-2 border-t"><span>Total</span><span className="text-[#d92d2d]">R$ {total.toFixed(2)}</span></div>
                        </div>

                        <div className="bg-white p-5 rounded-lg shadow-sm">
                            <h2 className="font-bold mb-4 text-center text-gray-600">Escolha a forma de pagamento</h2>
                            <div className="flex gap-3">
                                <button onClick={() => handlePayment('delivery')} className="flex-1 p-6 border rounded hover:shadow-md text-center">
                                    <div className="font-bold mb-1">Na Entrega</div>
                                    <div className="text-xs text-gray-500">Dinheiro/Cartão</div>
                                </button>
                                <button onClick={() => handlePayment('pix')} className="flex-1 p-6 border rounded hover:shadow-md text-center">
                                    <div className="font-bold mb-1 text-[#00A39C]">PIX</div>
                                    <div className="text-xs text-gray-500">Online (Aprovação rápida)</div>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};
