import { CartItem } from "../../contexts/CartContext";
import { formatCurrency } from "../../utils/formatCurrency";
import { Button } from "../Button";
import { Container, HorizontalLine } from "./styles";

interface CartAddRemoveFooterProps {
  total: number;
  onClickFinalizar: () => void;
}

export const CartAddRemoveFooter: React.FC<CartAddRemoveFooterProps> = ({
  total,
  onClickFinalizar,
}) => {
  return (
    <>
      <HorizontalLine />
      <Container>
        <Button title="FINALIZAR PEDIDO" onClick={onClickFinalizar} />
        <div className="total-section">
          <h1>TOTAL</h1>
          <h3>{formatCurrency(total)}</h3>
        </div>
      </Container>
    </>
  );
};
