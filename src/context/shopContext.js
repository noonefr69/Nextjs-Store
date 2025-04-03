"use client";

import React, { createContext, useState, useEffect } from "react";

export const ShopContext = createContext(null); //store

export function ShopContextProvider(props) {
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);

      const initialCart = {};
      for (let i = 0; i < data.length; i++) {
        initialCart[data[i].id] = 0;
      }
      setCartItems(initialCart);
    }

    getProducts();
  }, []);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += cartItems[item] * itemInfo.price;
        }
      }
    }
    return totalAmount;
  };

  const getTotalQuantity = () => {
    let totalQuantity = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalQuantity += cartItems[item];
      }
    }
    return totalQuantity;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) - 1 }));
  };

  const deletFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    deletFromCart,
    getTotalCartAmount,
    getTotalQuantity,
    products,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}
