import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { PageTemplate } from "../../components/PageTemplate.ts";
import { Container, Image, Title } from "./styles";

import reloadGirl from "../../assets/reload-girl.png";
import { Button } from "../../components/Button";
import { CartContext, useCartItemList } from "../../contexts/CartContext";
import { CardAddRemoveHeader } from "../../components/CartAddRemoveHeader";
import { CardAddRemoveItem } from "../../components/CartAddRemoveItem";
import { CartAddRemoveFooter } from "../../components/CartAddRemoveFooter";
import { useContext } from "react";

export const CartView: React.FC = () => {
  const {
    cartItems,
    increaseItem,
    decreaseItem,
    removeItem,
    clearCart,
    getTotalPrice,
  } = useContext(CartContext);

  const navigate = useNavigate();

  const handleSubmit = () => {
    clearCart();
    navigate("/success");
  };

  return (
    <PageTemplate>
      <Header />
      {cartItems.length === 0 ? (
        <Container>
          <Title>{"Parece que não há nada por aqui :("}</Title>
          <Image src={reloadGirl} />
          <div className="button-wrapper">
            <Button title="VOLTAR" onClick={() => navigate("/")} />
          </div>
        </Container>
      ) : (
        <Container shrinkHeight>
          <CardAddRemoveHeader />
          {cartItems.map((cartItem) => (
            <CardAddRemoveItem
              key={cartItem.movie.id}
              cartItem={cartItem}
              onClickIncrease={(movie) => increaseItem(movie)}
              onClickDecrease={(movie) => decreaseItem(movie)}
              onClickRemove={(movie) => removeItem(movie)}
            />
          ))}
          <CartAddRemoveFooter
            total={getTotalPrice()}
            onClickFinalizar={handleSubmit}
          />
        </Container>
      )}
    </PageTemplate>
  );
};
