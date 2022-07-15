import React, { createContext, useState } from "react";
import { Movie } from "../models/movie";

export type CartContextProps = {
  movies: Movie[];
  addMovie: (movie: Movie) => void;
  removeMovie: (movie: Movie) => void;
};

export const CartContext = createContext({} as CartContextProps);

export const useMovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const addMovie = (movie: Movie) => {
    setMovies([...movies, movie]);
  };

  const removeMovie = (movie: Movie) => {
    const filteredList = movies.filter(
      (existingMovie) => existingMovie.id === movie.id
    );
    setMovies(filteredList);
  };

  return {
    movies,
    addMovie,
    removeMovie,
  };
};

interface CartProviderProps {
  children: React.ReactNode
}

export const CartProvider: React.FC<CartProviderProps> = ({children}) => {
  const { movies, addMovie, removeMovie } = useMovieList();

  return (
    <CartContext.Provider
      value={{
        movies,
        addMovie,
        removeMovie,
      }}
    >{children}</CartContext.Provider>
  );
};
