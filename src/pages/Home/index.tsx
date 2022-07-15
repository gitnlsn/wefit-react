import React, { useContext } from "react";
import { Header } from "../../components/Header";
import { MovieCard } from "../../components/MovieCard";
import { CartContext } from "../../contexts/CartContext";
import { useMoviesLoader } from "../../hooks/useMoviesLoader";
import { Container, MovieListWrapper } from "./styles";

export const Home: React.FC = () => {
  const { loading, error, movies } = useMoviesLoader();
  const { addMovie } = useContext(CartContext);

  return (
    <Container>
      <Header />
      <MovieListWrapper>
        {movies.map((movie) => (
          <div key={movie.id}>
            <MovieCard movie={movie} onClickAdd={(movie) => addMovie(movie)} />
          </div>
        ))}
      </MovieListWrapper>
    </Container>
  );
};
