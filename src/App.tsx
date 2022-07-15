import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CartProvider } from "./contexts/CartContext";
import { GlobalStyle } from "./GlobalStyles";
import { CartView } from "./pages/CartView";
import { Home } from "./pages/Home";
import { Success } from "./pages/Success";

export const App: React.FC = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </CartProvider>
  );
};
