import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/products';
// import { productOptions } from '../data/productOptions';
import { Clock, Info, Banknote, User } from 'lucide-react';

export const Home: React.FC = () => {
    // Check if product requires customization options
    const getProductLink = (productId: string) => {
        // In original PHP: if hasOptions -> produto.php?id=... else -> carrinho.php?action=add_simple
        // In React: we will route everything to Product details for consistency, or we could direct-add.
        // For simplicity and better UX, routing everything to details is safer for now, 
        // or we can implement direct-add logic later.
        return `/product/${productId}`;
    };

    return (
        <div className="bg-[#f5f5f5] min-h-screen pb-20">
            {/* Header Image */}
            <header className="relative w-full h-[180px] bg-gray-300">
                <img
                    src="https://images.multipedidos.com.br/covers/0PHIJwC26ZxGoBDTdXOR5h4nukmEAJafiLTwh9EtVcq8p3jrHUSMOYs8F5tbeRBz.jpg"
                    alt="Cover"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col p-4">
                    <div className="absolute top-4 right-4 flex items-center gap-2 text-white font-medium text-sm">
                        <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
                            <User size={14} />
                        </div>
                        Entrar
                    </div>
                </div>
            </header>

            {/* Store Info */}
            <div className="bg-white p-5 text-center -mt-1 relative rounded-t-2xl shadow-sm z-10">
                <h1 className="text-xl font-bold mb-1 text-[#333]">TERRITORIO DA PIZZA E HAMBURGUERIA LTDA</h1>
                <p className="text-[#007bff] text-sm mb-5">A 5 kilometros de você</p>

                <div className="flex justify-around mb-5 border-b pb-4 border-gray-100">
                    <div><strong className="block text-sm font-medium">Entrega</strong><span className="text-xs text-gray-500">45min - 1h</span></div>
                    <div><strong className="block text-sm font-medium">Levantamento</strong><span className="text-xs text-gray-500">35min</span></div>
                </div>

                <div className="flex justify-around mb-5">
                    <div className="flex flex-col items-center gap-2 text-xs text-gray-500">
                        <div className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center">
                            <Banknote size={20} className="text-gray-400" />
                        </div>
                        Pagamentos
                    </div>
                    <div className="flex flex-col items-center gap-2 text-xs text-gray-500">
                        <div className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center">
                            <Clock size={20} className="text-gray-400" />
                        </div>
                        Horários
                    </div>
                    <div className="flex flex-col items-center gap-2 text-xs text-gray-500">
                        <div className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center">
                            <Info size={20} className="text-gray-400" />
                        </div>
                        Informações
                    </div>
                </div>

                <div className="text-gray-500 text-sm">
                    Funcionamento<br />
                    <span className="text-[#d92d2d] font-bold">ABERTO</span>
                </div>
            </div>

            {/* Banner */}
            <div className="my-4">
                <img src="https://images.multipedidos.com.br/highlightImages/27503ed69244083d45c8664a938f81f0f29c0688042905601f69e45e060ac890/lg_27503ed69244083d45c8664a938f81f0f29c0688042905601f69e45e060ac890.jpg" alt="Açaí Banner" className="w-full h-auto" />
            </div>

            {/* Categories */}
            <main className="space-y-3">
                {Object.entries(categories).map(([category, products]) => (
                    <section key={category} className="bg-white">
                        <h2 className="text-lg font-medium p-4 border-b border-gray-100 text-[#333]">{category}</h2>
                        <div className="px-4">
                            {products.map(product => (
                                <Link to={getProductLink(product.id)} key={product.id} className="block border-b border-gray-100 last:border-0 py-4">
                                    <div className="flex items-center">
                                        <img
                                            src={product.image_url}
                                            alt={product.name}
                                            className="w-20 h-20 object-cover rounded-lg mr-4 flex-shrink-0 bg-gray-100"
                                        />
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-[15px] font-medium text-[#333] mb-1 line-clamp-2">{product.name}</h3>
                                            <p className="text-[13px] text-gray-500 mb-2 line-clamp-2">{product.description}</p>

                                            <div className="flex items-center gap-2">
                                                {product.old_price && (
                                                    <span className="text-[13px] text-gray-400 line-through">R$ {product.old_price.replace('.', ',')}</span>
                                                )}
                                                <span className="text-[15px] font-medium text-[#333]">R$ {product.price.replace('.', ',')}</span>
                                            </div>

                                            {product.promo_text && (
                                                <span className="inline-block mt-2 bg-[#d92d2d] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                                                    {product.promo_text}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                ))}
            </main>
        </div>
    );
};
