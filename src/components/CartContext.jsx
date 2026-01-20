import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addToCart = (product) => {
        // We add a unique cartId so we can delete specific instances of the same car
        setCartItems((prev) => [...prev, { ...product, cartId: Date.now() }]);
    };

    const removeFromCart = (cartId) => {
        setCartItems((prev) => prev.filter(item => item.cartId !== cartId));
    };

    const toggleCart = () => setIsCartOpen(!isCartOpen);

    return (
        <CartContext.Provider value={{ cartItems, isCartOpen, addToCart, removeFromCart, toggleCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);