import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export const Cart: React.FC = () => {
    const { items, removeFromCart, updateQuantity, subtotal } = useCart();

    return (
        <div>
            <header className="cart-header">
                <Link to="/" className="back-link">&lt;</Link>
                <h1>Produtos Escolhidos</h1>
            </header>

            <main className="cart-container">
                {items.length === 0 ? (
                    <div className="empty-cart-message">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" /></svg>
                        <h2>Seu carrinho está vazio</h2>
                        <p>Adicione produtos do nosso cardápio para continuar.</p>
                        <Link to="/" className="btn-menu">Ver Cardápio</Link>
                    </div>
                ) : (
                    items.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image_url} alt={item.name} className="item-image" />
                            <div className="item-details">
                                <p className="item-name">{item.name}</p>
                                {item.options.length > 0 && (
                                    <ul className="item-options">
                                        {item.options.map((opt, i) => (
                                            <li key={i}><strong>{opt.group}:</strong> {opt.name}</li>
                                        ))}
                                    </ul>
                                )}
                                <div className="item-footer">
                                    <p className="item-price">R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</p>
                                    <div className="item-controls">
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="quantity-btn">-</button>
                                        <span className="quantity">{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="quantity-btn">+</button>
                                        <button onClick={() => removeFromCart(item.id)} className="remove-btn" title="Remover item">🗑️</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </main>

            {items.length > 0 && (
                <footer className="cart-summary">
                    <div className="total-price">
                        <span>TOTAL</span>
                        <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
                    </div>
                    <div className="summary-buttons">
                        <Link to="/" className="btn add-more">+ Adicionar Itens</Link>
                        <Link to="/checkout" className="btn checkout">✓ Finalizar Pedido</Link>
                    </div>
                </footer>
            )}
        </div>
    );
};
