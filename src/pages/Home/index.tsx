import React, { useContext } from "react";
import { Header } from "../../components/Header";
import { MovieCard } from "../../components/MovieCard";
import { PageTemplate } from "../../components/PageTemplate.ts";
import { CartContext } from "../../contexts/CartContext";
import { useMoviesLoader } from "../../hooks/useMoviesLoader";
import { MovieListWrapper } from "./styles";

export const Home: React.FC = () => {
  const { movies } = useMoviesLoader();
  const { increaseItem: addMovie } = useContext(CartContext);

  return (
    <PageTemplate>
      <Header />
      <MovieListWrapper>
        {movies.map((movie) => (
          <div key={movie.id}>
            <MovieCard movie={movie} onClickAdd={(movie) => addMovie(movie)} />
          </div>
        ))}
      </MovieListWrapper>
    </PageTemplate>
  );
};
