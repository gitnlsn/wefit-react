import React, { createContext, useState } from "react";
import { Movie } from "../models/movie";

type CartItem = {
  movie: Movie;
  quantity: number;
};

export type CartContextProps = {
  cartItems: CartItem[];
  addMovie: (movie: Movie) => void;
  removeMovie: (movie: Movie) => void;
};

export const CartContext = createContext({} as CartContextProps);

export const useCartItemList = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addMovie = (movie: Movie) => {
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

  const removeMovie = (movie: Movie) => {
    const existingItem = cartItems.find((item) => item.movie.id === movie.id);

    if (existingItem) {
      if (existingItem.quantity === 1) {
        const newItems = cartItems.filter(
          (cartItem) => cartItem.movie.id !== movie.id
        );
        setCartItems(newItems);
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

  return {
    cartItems,
    addMovie,
    removeMovie,
  };
};

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const { cartItems, addMovie, removeMovie } = useCartItemList();

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addMovie,
        removeMovie,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
