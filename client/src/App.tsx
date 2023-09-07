import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  HomePage,
  OrderPage,
  ProductListPage,
  SingleProductPage,
  CheckoutPage,
  CartPage,
} from "./Pages";
function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/products/:id" element={<SingleProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
