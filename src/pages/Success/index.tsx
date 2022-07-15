import React from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { PageTemplate } from "../../components/PageTemplate.ts";
import { Container } from "./styles";

import successGuy from '../../assets/success-guy.png';

export const Success: React.FC = () => {
  return (
    <PageTemplate>
      <Header />
      <Container>
        <img src={successGuy} alt="success-image" />
        <Button title="VOLTAR" onClick={() => {}} />
      </Container>
    </PageTemplate>
  );
};
