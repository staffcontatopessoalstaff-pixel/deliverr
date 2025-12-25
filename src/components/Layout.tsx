import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Utensils, User } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { totalItems } = useCart();
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path ? 'text-white' : 'text-white/70';

    return (
        <div className="container relative bg-white">
            {/* Footer Navigation */}
            <nav className="fixed bottom-0 left-0 w-full h-[60px] bg-[#d92d2d] flex justify-around items-center border-t border-[#c12222] z-50 max-w-[600px] left-1/2 -translate-x-1/2">
                <Link to="/" className={`flex flex-col items-center no-underline text-xs ${isActive('/')}`}>
                    <Utensils size={24} className="mb-1" />
                    <span>Cardápio</span>
                </Link>
                <Link to="/cart" className={`flex flex-col items-center no-underline text-xs ${isActive('/cart')} relative`}>
                    <ShoppingBag size={24} className="mb-1" />
                    <span>Pedidos</span>
                    {totalItems > 0 && (
                        <span className="absolute -top-1 -right-1 bg-white text-[#d92d2d] text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                            {totalItems}
                        </span>
                    )}
                </Link>
                <div className="flex flex-col items-center no-underline text-xs text-white/70 opacity-50 cursor-not-allowed">
                    <User size={24} className="mb-1" />
                    <span>Perfil</span>
                </div>
            </nav>

            <div className="app-content min-h-screen">
                {children}
            </div>
        </div>
    );
};
