import React, { createContext, useState, useContext, useEffect, type ReactNode } from 'react';

export interface CartItemOption {
    group: string;
    name: string;
    price: number;
}

export interface CartItem {
    id: string; // Unique ID for the cart item instance
    productId: string;
    name: string;
    price: number;
    quantity: number;
    image_url: string;
    options: CartItemOption[];
}

interface CartContextType {
    items: CartItem[];
    addToCart: (item: Omit<CartItem, 'id'>) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    subtotal: number;
    totalItems: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [items, setItems] = useState<CartItem[]>(() => {
        const savedCart = localStorage.getItem('cart_v1');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart_v1', JSON.stringify(items));
    }, [items]);

    const addToCart = (newItem: Omit<CartItem, 'id'>) => {
        setItems(prev => {
            // Logic to check if exact item already exists (same options)
            // For simplicity, we'll just add as new item every time for customizable products
            // But for simple products, we could merge.
            return [...prev, { ...newItem, id: `cart_${Date.now()}_${Math.random().toString(36).substr(2, 9)}` }];
        });
    };

    const removeFromCart = (id: string) => {
        setItems(prev => prev.filter(item => item.id !== id));
    };

    const updateQuantity = (id: string, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(id);
            return;
        }
        setItems(prev => prev.map(item => item.id === id ? { ...item, quantity } : item));
    };

    const clearCart = () => {
        setItems([]);
    };

    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, subtotal, totalItems }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
