import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((p) => p.id === item.id);
      if (existingItem) {
        return prevItems.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prevItems, item];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((p) => p.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((p) => (p.id === id ? { ...p, quantity } : p))
    );
  };

  const removeAllFromCart = () => {
    setCartItems([]);
  };

  const isEmpty = () => {
    return cartItems.length === 0;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isEmpty,
        addToCart,
        removeFromCart,
        updateQuantity,
        removeAllFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
