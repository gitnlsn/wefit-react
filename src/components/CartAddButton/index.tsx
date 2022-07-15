import { Button } from "../Button";
import cartAdd from "../../assets/cart-add.png";

interface CartButton {
  onClick: () => void;
}

export const CartAddButton: React.FC<CartButton> = ({ onClick }) => {
  return (
    <Button
      title="ADICIONAR AO CARRINHO"
      onClick={onClick}
      leftText="1"
      leftIcon={cartAdd}
      fontSize={12}
    />
  );
};
