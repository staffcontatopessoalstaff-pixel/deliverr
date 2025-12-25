import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag } from 'lucide-react';

export const Cart: React.FC = () => {
    const { items, removeFromCart, updateQuantity, subtotal } = useCart();
    // const navigate = useNavigate();

    if (items.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 text-center">
                <ShoppingBag size={64} className="text-gray-300 mb-4" />
                <h2 className="text-xl font-bold mb-2">Seu carrinho está vazio</h2>
                <p className="text-gray-500 mb-6">Adicione produtos do nosso cardápio para continuar.</p>
                <Link to="/" className="bg-[#d92d2d] text-white px-6 py-3 rounded-lg font-bold">
                    Ver Cardápio
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-[#f5f5f5] min-h-screen pb-40">
            <header className="bg-[#d92d2d] text-white p-4 sticky top-0 z-10">
                <div className="flex items-center">
                    <Link to="/" className="text-2xl mr-4">&lt;</Link>
                    <h1 className="font-medium">Produtos Escolhidos</h1>
                </div>
            </header>

            <main className="p-4 space-y-4">
                {items.map(item => (
                    <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm flex">
                        <img src={item.image_url} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
                        <div className="flex-1">
                            <h3 className="font-bold text-sm mb-1">{item.name}</h3>
                            {item.options.length > 0 && (
                                <ul className="text-xs text-gray-500 mb-2">
                                    {item.options.map((opt, i) => (
                                        <li key={i}>{opt.name}</li>
                                    ))}
                                </ul>
                            )}
                            <div className="flex justify-between items-end">
                                <span className="text-[#d92d2d] font-bold">
                                    R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                                </span>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center border rounded">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            className="px-2 py-1 text-gray-600 font-bold"
                                        >-</button>
                                        <span className="px-2 text-sm font-bold">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="px-2 py-1 text-[#d92d2d] font-bold"
                                        >+</button>
                                    </div>
                                    <button onClick={() => removeFromCart(item.id)} className="text-gray-400">
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </main>

            <footer className="fixed bottom-[60px] left-0 w-full bg-white border-t p-4 z-40 max-w-[600px] left-1/2 -translate-x-1/2 shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
                <div className="flex justify-between items-center mb-4 text-lg font-bold">
                    <span>TOTAL</span>
                    <span className="text-[#d92d2d]">R$ {subtotal.toFixed(2).replace('.', ',')}</span>
                </div>
                <div className="flex gap-3">
                    <Link to="/" className="flex-1 py-3 text-center border-2 border-[#d92d2d] text-[#d92d2d] rounded font-medium">
                        + Adicionar
                    </Link>
                    <Link to="/checkout" className="flex-1 py-3 text-center bg-[#28a745] text-white rounded font-medium border-2 border-[#28a745]">
                        Finalizar Pedido
                    </Link>
                </div>
            </footer>
        </div>
    );
};
