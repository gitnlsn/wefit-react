import { CartItem } from "../../contexts/CartContext";
import { Movie } from "../../models/movie";
import { formatCurrency } from "../../utils/formatCurrency";
import { Container } from "./styles";

import decreaseIcon from "../../assets/decrease-icon.png";
import increaseIcon from "../../assets/increase-icon.png";
import trashIcon from "../../assets/trash-icon.png";
import { Input } from "../Input";

interface CardAddRemoveItemProps {
  cartItem: CartItem;
  onClickDecrease: (movie: Movie) => void;
  onClickIncrease: (movie: Movie) => void;
  onClickRemove: (movie: Movie) => void;
}

export const CardAddRemoveItem: React.FC<CardAddRemoveItemProps> = ({
  cartItem,
  onClickDecrease,
  onClickIncrease,
  onClickRemove,
}) => {
  return (
    <Container>
      <img src={cartItem.movie.image} alt={cartItem.movie.title} />

      <div className="product-section">
        <p>{cartItem.movie.title}</p>
        <p>{formatCurrency(cartItem.movie.price)}</p>
      </div>

      <div className="inc-dec-section">
        <img
          className="icon"
          src={decreaseIcon}
          alt="decrease-button"
          onClick={() => onClickDecrease(cartItem.movie)}
        />
        <Input value={cartItem.quantity} disabled />
        <img
          className="icon"
          src={increaseIcon}
          alt="increase-button"
          onClick={() => onClickIncrease(cartItem.movie)}
        />
      </div>

      <div className="subtotal-section">
        <p>{formatCurrency(cartItem.movie.price * cartItem.quantity)}</p>
      </div>

      <div className="remove-button-section">
        <img
          src={trashIcon}
          alt="remove-button"
          onClick={() => onClickRemove(cartItem.movie)}
        />
      </div>
    </Container>
  );
};
