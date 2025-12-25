import React, { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/products';
import { productOptions } from '../data/productOptions';

export const Home: React.FC = () => {
    return (
        <div className="pb-20">
            {/* Header */}
            <header className="header-container">
                <img src="https://images.multipedidos.com.br/covers/0PHIJwC26ZxGoBDTdXOR5h4nukmEAJafiLTwh9EtVcq8p3jrHUSMOYs8F5tbeRBz.jpg" alt="Background da pizzaria" className="header-background" />
                <div className="header-overlay">
                    <div className="header-login">
                        <div className="icon-user"></div>
                        Entrar
                    </div>
                </div>
            </header>

            <div className="store-info">
                <h1>TERRITORIO DA PIZZA E HAMBURGUERIA LTDA</h1>
                <p className="address">A 5 kilometros de você</p>
                <div className="delivery-info">
                    <div><strong>Entrega</strong><span>45min - 1h 0min</span></div>
                    <div><strong>Levantamento</strong><span>35min</span></div>
                </div>
                <div className="main-icons">
                    <div className="icon-group"><div className="icon-shape"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" /></svg></div>Pagamentos</div>
                    <div className="icon-group"><div className="icon-shape"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" /></svg></div>Horários</div>
                    <div className="icon-group"><div className="icon-shape"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v2h-2zm0 4h2v6h-2z" /></svg></div>Informações</div>
                </div>
                <div className="store-status">Funcionamento<br /><span>ABERTO</span></div>
            </div>

            <div className="banner">
                <img src="https://images.multipedidos.com.br/highlightImages/27503ed69244083d45c8664a938f81f0f29c0688042905601f69e45e060ac890/lg_27503ed69244083d45c8664a938f81f0f29c0688042905601f69e45e060ac890.jpg" alt="Açaí no Copo" />
            </div>

            <main className="main-content">
                {Object.entries(categories).map(([categoryName, products]) => (
                    <section key={categoryName} className="category-section">
                        <h2 className="category-title">{categoryName}</h2>
                        <div className="product-list">
                            {products.map(product => {
                                const hasOptions = !!productOptions[product.id];
                                // Direct cart add logic would be handled in Product page or immediate action, keeping simple link for now
                                return (
                                    <Link key={product.id} to={`/product/${product.id}`} className="product-card-link">
                                        <div className="product-card">
                                            <img src={product.image_url} alt={product.name} className="product-image" />
                                            <div className="details">
                                                <h3>{product.name}</h3>
                                                <p className="description">{product.description}</p>
                                                <div className="price-info">
                                                    {product.old_price && <span className="old-price">R$ {product.old_price}</span>}
                                                    <span className="price">R$ {product.price}</span>
                                                </div>
                                                {product.promo_text && <div className="promo-tag">{product.promo_text}</div>}
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </section>
                ))}
            </main>
        </div>
    );
};
