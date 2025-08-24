import { useState } from "react";

export function useCart() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.name === product.name);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (name, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(name);
    } else {
      setCartItems(cartItems.map(item =>
        item.name === name ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeFromCart = (name) => {
    setCartItems(cartItems.filter(item => item.name !== name));
  };

  const getCartItemsCount = () =>
    cartItems.reduce((total, item) => total + item.quantity, 0);

  return {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    getCartItemsCount
  };
}
