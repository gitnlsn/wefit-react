import { Container } from "./styles";

export const CardAddRemoveHeader: React.FC = () => {
  return (
    <Container>
      <h3 style={{ marginLeft: 145 }}>PRODUTO</h3>
      <h3 style={{ marginLeft: 140 }}>QTD</h3>
      <h3 style={{ marginLeft: 116 }}>SUBTOTAL</h3>
    </Container>
  );
};
