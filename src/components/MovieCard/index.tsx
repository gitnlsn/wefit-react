import { Movie } from "../../models/movie";
import { formatCurrency } from "../../utils/formatCurrency";
import { CartAddButton } from "../CartAddButton";
import { Container } from "./styles";

interface MovieCardProps {
  movie: Movie;
  onClickAdd: (movie: Movie) => void;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie, onClickAdd }) => {
  return (
    <Container>
      <img className="icon" src={movie.image} alt={movie.title} />
      <h1 className="title">{movie.title}</h1>
      <p className="price">{formatCurrency(movie.price)}</p>
      <div className="button-wrapper">
        <CartAddButton onClick={() => onClickAdd(movie)} />
      </div>
    </Container>
  );
};
