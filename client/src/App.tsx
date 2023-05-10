import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

const App: React.FC = () => {
  const Layout = (): JSX.Element => {
    return (
      <div className="App">
        <Navbar />
        <Outlet />
        {/* <Footer /> */}
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
