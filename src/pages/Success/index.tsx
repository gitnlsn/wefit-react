import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { PageTemplate } from "../../components/PageTemplate.ts";
import { Container } from "./styles";

import successGuy from "../../assets/success-guy.png";

export const Success: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageTemplate>
      <Header />
      <Container>
        <img src={successGuy} alt="success" />
        <Button title="VOLTAR" onClick={() => navigate('/')} />
      </Container>
    </PageTemplate>
  );
};
