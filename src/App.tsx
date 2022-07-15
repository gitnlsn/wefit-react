import React from "react";
import { CartProvider } from "./contexts/CartContext";
import { GlobalStyle } from "./GlobalStyles";
import { Home } from "./pages/Home";

function App() {
  return (
    <CartProvider>
      <Home />
      <GlobalStyle />
    </CartProvider>
  );
}

export default App;
