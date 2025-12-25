import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { categories, type Product as ProductType } from '../data/products';
import { productOptions } from '../data/productOptions';
import { useCart } from '../context/CartContext';

export const Product: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const [product, setProduct] = useState<ProductType | null>(null);
    const [selectedOptions, setSelectedOptions] = useState<{ [group: string]: string[] }>({});
    const [currentStep, setCurrentStep] = useState(1);
    const [pizzaCategory, setPizzaCategory] = useState<string>('tradicionais');

    // Load Product
    useEffect(() => {
        if (!id) return;
        for (const cat in categories) {
            const found = categories[cat].find(p => p.id === id);
            if (found) {
                setProduct(found);
                break;
            }
        }
    }, [id]);

    if (!product) return <div className="p-10">Carregando...</div>;

    const options = id && productOptions[id] ? productOptions[id] : [];
    // Strict check for "Pizza Flow" based on legacy logic (at least 2 options, usually Borda + Sabores)
    const isPizzaFlow = options.length >= 2 && options[0].title.includes('Borda') && options[1].title.includes('Sabores');

    // Helpers
    const getPrice = (itemPrice?: number) => itemPrice || 0;

    const calculateTotal = () => {
        let total = parseFloat(product.price);
        options.forEach(group => {
            const selectedStr = selectedOptions[group.title] || [];
            // Simplified logic: finding item by constructing the string matching legacy value format
            // In a pro refactor, we'd store Objects, but here we match the legacy "Value string" approach roughly
            // or re-find the item object
            selectedStr.forEach(str => {
                // We stored just the name or name+price. Let's find the item in the group
                // This part is tricky without strict IDs. We'll search by name match
                const cleanName = str.split(' (+ R$')[0];
                const item = group.items.find(i => i.name === cleanName);
                if (item && item.price) total += item.price;
            });
        });
        return total;
    };

    const handleOptionToggle = (groupTitle: string, item: any, type: string, max: number) => {
        const itemLabel = item.name; // Simpler storage for React state

        setSelectedOptions(prev => {
            const current = prev[groupTitle] || [];
            if (type === 'radio') {
                return { ...prev, [groupTitle]: [itemLabel] };
            } else {
                // Checkbox
                if (current.includes(itemLabel)) {
                    return { ...prev, [groupTitle]: current.filter(x => x !== itemLabel) };
                } else {
                    if (max > 0 && current.length >= max) {
                        alert(`Você pode selecionar no máximo ${max} opções.`);
                        return prev;
                    }
                    return { ...prev, [groupTitle]: [...current, itemLabel] };
                }
            }
        });
    };

    const validateStep = (stepIdx: number) => {
        const group = options[stepIdx];
        if (!group) return true;
        const selected = selectedOptions[group.title] || [];
        const min = group.min || 0;
        return selected.length >= min;
    };

    const handleNext = () => {
        if (isPizzaFlow && currentStep === 1) {
            if (!validateStep(0)) return alert('Selecione as opções obrigatórias.');
            setCurrentStep(2);
            window.scrollTo(0, 0);
        } else {
            // Finalize
            if (isPizzaFlow && !validateStep(1)) return alert('Selecione os sabores obrigatórios.');

            // Validate all if normal flow
            if (!isPizzaFlow) {
                // check all required groups
                for (let i = 0; i < options.length; i++) {
                    if (options[i].required && (!selectedOptions[options[i].title] || selectedOptions[options[i].title].length === 0)) {
                        return alert(`Selecione ${options[i].title}`);
                    }
                }
            }

            // Build cart item
            const cartOpts: any[] = [];
            Object.entries(selectedOptions).forEach(([grp, items]) => {
                items.forEach(itmName => {
                    // Re-find price
                    let price = 0;
                    // Weak search approach for MVP
                    options.forEach(g => {
                        if (g.title === grp) {
                            const found = g.items.find(i => i.name === itmName);
                            if (found && found.price) price = found.price;
                        }
                    });
                    cartOpts.push({ group: grp, name: itmName, price });
                });
            });

            addToCart({
                productId: product.id,
                name: product.name,
                price: calculateTotal(),
                quantity: 1,
                image_url: product.image_url,
                options: cartOpts
            });
            navigate('/cart');
        }
    };

    // --- RENDER HELPERS ---
    const renderOptionItem = (group: any, item: any) => {
        const isSelected = (selectedOptions[group.title] || []).includes(item.name);
        return (
            <label key={item.name} className="option-item" onClick={() => handleOptionToggle(group.title, item, group.type, group.max)}>
                <div className="info">
                    <h3>{item.name}</h3>
                    {item.description && <p>{item.description}</p>}
                    {item.price ? <p className="option-price">+ R$ {item.price.toFixed(2).replace('.', ',')}</p> : null}
                </div>
                <div className="control">
                    <input
                        type={group.type}
                        checked={isSelected}
                        readOnly
                        name={group.title}
                    />
                    <span className={`${group.type}-custom`}></span>
                </div>
            </label>
        );
    };

    return (
        <div className="bg-white min-h-screen pb-32">
            <header className="product-header">
                <a onClick={() => isPizzaFlow && currentStep > 1 ? setCurrentStep(1) : navigate('/')} className="back-link">&lt;</a>
                <h1>{product.name}</h1>
            </header>

            <main>
                {isPizzaFlow ? (
                    <>
                        {/* STEP 1: BORDAS */}
                        <div className={currentStep === 1 ? 'step active' : 'step'}>
                            <section className="options-section">
                                <div className="section-header">
                                    <h2>{options[0].title}</h2>
                                    <div className="rules"><span className="tag">Obrigatório</span></div>
                                </div>
                                <div className="options-list">
                                    {options[0].items.map(item => renderOptionItem(options[0], item))}
                                </div>
                            </section>
                        </div>

                        {/* STEP 2: SABORES */}
                        <div className={currentStep === 2 ? 'step active' : 'step'}>
                            <section className="options-section">
                                <div className="sub-header">1. Escolha a Categoria</div>
                                <div className="category-selector">
                                    {['tradicionais', 'especiais', 'doces'].map(cat => (
                                        <div key={cat}
                                            className={`btn-category ${pizzaCategory === cat ? 'selected' : ''}`}
                                            onClick={() => setPizzaCategory(cat)}>
                                            <h3>Sabores {cat.charAt(0).toUpperCase() + cat.slice(1)}</h3>
                                        </div>
                                    ))}
                                </div>

                                <div className="sub-header" style={{ marginTop: '20px' }}>2. {options[1].title}</div>
                                <div className="rules" style={{ marginBottom: '15px' }}>
                                    <span className="tag">Mín: {options[1].min} | Máx: {options[1].max}</span>
                                    <span className="tag">Obrigatório</span>
                                </div>

                                <div className="options-list">
                                    {/* Filter items by category logic - simulated here since our data might not have categories tagged explicitly in the generated productOptions.ts yet, assuming flattened list.
                                        If productOptions.ts was generated flat, we need to artificially filter or show all. 
                                        Critically: In legacy, flavors were in separate arrays variables. 
                                        For this restoration, we will attempt to filter if data allows, otherwise show all.
                                    */}
                                    {options[1].items.map(item => {
                                        // Mock category filtering if not present in data
                                        // For now show all to avoid missing items, since extraction might have been flat
                                        return renderOptionItem(options[1], item);
                                    })}
                                </div>
                            </section>
                        </div>
                    </>
                ) : (
                    // NORMAL FLOW
                    <>
                        {options.length === 0 ? (
                            <section className="options-section"><p>Este produto não possui opções de personalização.</p></section>
                        ) : (
                            options.map(group => (
                                <section key={group.title} className="options-section">
                                    <div className="section-header">
                                        <h2>{group.title}</h2>
                                        <div className="rules">
                                            {group.min !== undefined && <span className="tag">Mín: {group.min} | Máx: {group.max}</span>}
                                            {group.required && <span className="tag">Obrigatório</span>}
                                        </div>
                                    </div>
                                    <div className="options-list">
                                        {group.items.map(item => renderOptionItem(group, item))}
                                    </div>
                                </section>
                            ))
                        )}
                    </>
                )}
            </main>

            <footer className="product-footer">
                <div className="price-info">
                    <div className="price">R$ {calculateTotal().toFixed(2).replace('.', ',')}</div>
                </div>
                <button
                    onClick={handleNext}
                    className="action-button"
                // Disabled logic could be strictly mapped here, but handleNext does validation alerts as per legacy feel
                >
                    {isPizzaFlow && currentStep === 1 ? 'PRÓXIMO' : 'ADICIONAR'}
                </button>
            </footer>
        </div>
    );
};
