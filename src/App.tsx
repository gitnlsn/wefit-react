import React from "react";
import { CartProvider } from "./contexts/CartContext";
import { GlobalStyle } from "./GlobalStyles";
import { CartView } from "./pages/CartView";
import { Home } from "./pages/Home";
import { Success } from "./pages/Success";

function App() {
  return (
    <CartProvider>
      <Success />
      <GlobalStyle />
    </CartProvider>
  );
}

export default App;
