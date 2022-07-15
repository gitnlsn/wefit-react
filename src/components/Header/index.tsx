import { useContext } from "react";
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

export const Header = () => {
  const { movies } = useContext(CartContext);
  const moviesQuantity = movies.length;

  return (
    <Container>
      <LogoTitle>WeMovies</LogoTitle>
      <MyCartArea>
        <MyCartTextArea>
          <MyCartTitle>Meu Carrinho</MyCartTitle>
          <ItemsQuantity>{`${moviesQuantity} itens`}</ItemsQuantity>
        </MyCartTextArea>
        <img src={cartPng} alt="carrinho-de-compras" />
      </MyCartArea>
    </Container>
  );
};
