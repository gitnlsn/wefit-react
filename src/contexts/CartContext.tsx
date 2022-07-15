import React, { createContext, useCallback, useState } from "react";
import { Movie } from "../models/movie";

export type CartItem = {
  movie: Movie;
  quantity: number;
};

export type CartContextProps = {
  cartItems: CartItem[];
  increaseItem: (movie: Movie) => void;
  decreaseItem: (movie: Movie) => void;
  removeItem: (movie: Movie) => void;
  getTotal: () => void;
};

export const CartContext = createContext({} as CartContextProps);

export const useCartItemList = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const increaseItem = (movie: Movie) => {
    const existingItem = cartItems.find((item) => item.movie.id === movie.id);
    if (existingItem) {
      const newItems = cartItems.map((cartItem) => {
        const matchingMovie = cartItem.movie.id === movie.id;
        if (matchingMovie) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        } else {
          return { ...cartItem };
        }
      });
      setCartItems(newItems);
    } else {
      const newItem: CartItem = { movie, quantity: 1 };
      const newItems = [...cartItems, newItem];
      setCartItems(newItems);
    }
  };

  const decreaseItem = (movie: Movie) => {
    const existingItem = cartItems.find((item) => item.movie.id === movie.id);

    if (existingItem) {
      if (existingItem.quantity === 1) {
        removeItem(movie);
      } else {
        const newItems = cartItems.map((cartItem) => {
          if (cartItem.movie.id === movie.id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity - 1,
            };
          } else {
            return { ...cartItem };
          }
        });
        setCartItems(newItems);
      }
    }
  };

  const removeItem = (movie: Movie) => {
    const newItems = cartItems.filter(
      (cartItem) => cartItem.movie.id !== movie.id
    );
    setCartItems(newItems);
  };

  const getTotal = useCallback(
    () =>
      cartItems.reduce((sum, cartItem) => {
        return sum + cartItem.quantity * cartItem.movie.price;
      }, 0),
    [cartItems]
  );

  return {
    cartItems,
    increaseItem,
    decreaseItem,
    removeItem,
    getTotal,
  };
};

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const { cartItems, increaseItem, decreaseItem, removeItem, getTotal } =
    useCartItemList();

  return (
    <CartContext.Provider
      value={{
        cartItems,
        increaseItem,
        decreaseItem,
        removeItem,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
