import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [restaurant, setRestaurant] = useState(null);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    if (!cart.length) {
      setSum(0);
    } else {
      const newSum = cart.reduce((acc, { price }) => {
        return (acc += price);
      }, 0);
      setSum(newSum);
    }
  }, [cart]);

  const add = (item, rst) => {
    if (!restaurant || restaurant.placeId !== rst.placeId) {
      setRestaurant(rst);
      setCart([item]);
    } else {
      setCart([...cart, item]);
    }
  };

  const remove = (itemToRemove) => {
    console.log(itemToRemove);
    const newCart = cart.filter(
      (cartItem) => cartItem.item !== itemToRemove.item
    );
    if (newCart.length === 0) {
      setRestaurant(null);
    }
    console.log(newCart);
    setCart(newCart);
  };

  const clear = () => {
    setCart([]);
    setRestaurant(null);
  };

  return (
    <CartContext.Provider
      value={{
        addToCart: add,
        removeFromCart: remove,
        clearCart: clear,
        restaurant,
        cart,
        sum,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
