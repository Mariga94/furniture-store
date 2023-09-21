import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  HomePage,
  ProductListPage,
  SingleProductPage,

  CartPage,
  Login,
  Register,
} from "./Pages";
import { Footer, Navbar } from "./Components";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/products/:id" element={<SingleProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
