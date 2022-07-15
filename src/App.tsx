import React from "react";
import { CartProvider } from "./contexts/CartContext";
import { GlobalStyle } from "./GlobalStyles";
import { CartView } from "./pages/CartView";
import { Home } from "./pages/Home";

function App() {
  return (
    <CartProvider>
      <CartView />
      <GlobalStyle />
    </CartProvider>
  );
}

export default App;
