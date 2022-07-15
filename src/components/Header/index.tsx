import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import {
  Container,
  ItemsQuantity,
  LogoTitle,
  MyCartArea,
  MyCartTextArea,
  MyCartTitle,
} from "./styles";

import cartPng from "../../assets/cart.png";

export const Header: React.FC = () => {
  const { getTotal } = useContext(CartContext);

  return (
    <Container>
      <LogoTitle>WeMovies</LogoTitle>
      <MyCartArea>
        <Link to={"/cart"}>
          <MyCartTextArea>
            <MyCartTitle>Meu Carrinho</MyCartTitle>
            <ItemsQuantity>{`${getTotal()} itens`}</ItemsQuantity>
          </MyCartTextArea>
        </Link>
        <Link to={"cart"}>
          <img className="cart-icon" src={cartPng} alt="carrinho-de-compras" />
        </Link>
      </MyCartArea>
    </Container>
  );
};
