import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export default function CartProvider({ children }) {
  const loadCartFromLocalStorage = () => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  };

  const [cart, setCart] = useState(loadCartFromLocalStorage);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      localStorage.removeItem('cart');
    }
  }, [cart]);

  const addToCart = (newItem) => {
    const index = cart.findIndex(
      (item) => item.id === newItem.id && item.size === newItem.size
    );

    if (index !== -1) {
      const updatedCart = [...cart];
      updatedCart[index].quantity += newItem.quantity || 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...newItem, quantity: newItem.quantity || 1 }]);
    }
  };

 const [wishlist, setWishlist] = useState([]);

const addToWishlist = (item) => {
  setWishlist((prevWishlist) => {
    const alreadyExists = prevWishlist.some((w) => w.id === item.id);

    if (!alreadyExists) {
      const updated = [...prevWishlist, item];
      console.log("Agregado a wishlist:", item);
      console.log("Nueva wishlist:", updated);
      return updated;
    }

    console.log("Ya está en wishlist:", item);
    return prevWishlist;
  });
};



  const increaseQuantity = (itemId, size) => {
    setCart(prev =>
      prev.map(item =>
        item.id === itemId && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (itemId, size) => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === itemId && item.size === size
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const removeFromCart = (itemId, size) => {
    setCart(cart.filter((item) => !(item.id === itemId && item.size === size)));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, wishlist, addToWishlist, removeFromCart, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
}
