import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { GlobalStyles } from "./GlobalStyles";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Footer from "./components/Footer";
import ProductsPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/SingleProductPage";
import CartPage from "./pages/CartPage";
import SingleCategoryPage from "./pages/SingleCategoryPage";

const App: React.FC = () => {
  const Layout = (): JSX.Element => {
    return (
      <div className="App">
        <GlobalStyles />
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path:"/cart",
          element: <CartPage />
        },
        {
          path: "/products",
          element: <ProductsPage />,
        },
        {
          path: "/products/:id",
          element: <ProductDetailPage />,
        },
        {
          path: "/product-category/:categoryName",
          element: <SingleCategoryPage />
        },
      ],
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
