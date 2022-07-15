import { Header } from "../../components/Header";
import { PageTemplate } from "../../components/PageTemplate.ts";
import { Container, Image, Title } from "./styles";

import reloadGirl from "../../assets/reload-girl.png";
import { Button } from "../../components/Button";
import { useCartItemList } from "../../contexts/CartContext";
import { CardAddRemoveHeader } from "../../components/CartAddRemoveHeader";
import { CardAddRemoveItem } from "../../components/CartAddRemoveItem";
import { CartAddRemoveFooter } from "../../components/CartAddRemoveFooter";

export const CartView: React.FC = () => {
  const { cartItems, increaseItem, decreaseItem, removeItem, getTotal } = useCartItemList();
  
  return (
    <PageTemplate>
      <Header />
      {cartItems.length === 0 ? (
        <Container>
          <Title>{"Parece que não há nada por aqui :("}</Title>
          <Image src={reloadGirl} />
          <div className="button-wrapper">
            <Button title="VOLTAR" onClick={() => {}} />
          </div>
        </Container>
      ) : (
        <Container shrinkHeight>
          <CardAddRemoveHeader />
          {cartItems.map((cartItem) => (
            <CardAddRemoveItem
              cartItem={cartItem}
              onClickIncrease={(movie) => increaseItem(movie)}
              onClickDecrease={(movie) => decreaseItem(movie)}
              onClickRemove={(movie) => removeItem(movie)}
            />
          ))}
          <CartAddRemoveFooter 
            total={getTotal()}
            onClickFinalizar={() => {}}
          />
        </Container>
      )}
    </PageTemplate>
  );
};
