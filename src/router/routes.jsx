import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout.jsx";
import HomePage from "../pages/HomePage/HomePage.jsx";
import ProductListPage from "../pages/ProductListPage/ProductListPage.jsx";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage.jsx";
import CartPage from "../pages/CartPage/CartPage.jsx";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage.jsx";
import LoginPage from "../pages/LoginPage/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage/RegisterPage.jsx";
import ProfilePage from "../pages/ProfilePage/ProfilePage.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products", element: <ProductListPage /> },
      { path: "products/:id", element: <ProductDetailPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "checkout", element: <CheckoutPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "profile", element: <ProfilePage /> },
    ],
  },
]);

export default routes;
