import { useEffect, useState } from "react";
import { Movie } from "../models/movie";
import { getMovies } from "../services/movieService";

type useMoviesState = {
  loading: boolean;
  error: string | null;
  movies: Movie[];
};

export const useMoviesLoader = () => {
  const [state, setState] = useState<useMoviesState>({
    error: null,
    loading: false,
    movies: [],
  });

  useEffect(() => {
    const loadMovies = async () => {
      const { products } = await getMovies();
      return products;
    };

    setState({error: null, loading: true, movies: []});
    loadMovies()
      .then((products) => setState({error: null, loading: false, movies: products}))
      .catch((error) => setState({error: error, loading: false, movies: []}));
  }, []);

  return state;
};
