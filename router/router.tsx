import { createBrowserRouter } from "react-router-dom";
import Layout from "../src/screens/outside/Layout";
import Home from "../src/screens/outside/home/Home";
import Login from "../src/screens/login/Login";
import Register from "../src/screens/register/Register";
import ShopCreate from "../src/screens/shop-create/ShopCreate";
import SellerLogin from "../src/screens/seller-login/SellerLogin";
import FlashDeals from "../src/screens/outside/flash-deals/FlashDeals";
import Blog from "../src/screens/outside/blog/Blog";
import Brands from "../src/screens/outside/brands/Brands";
import NotFound from "../src/screens/404/NotFound";
import AllCategories from "../src/screens/outside/all-categories/AllCategories";
import DetailsCategorie from "../src/screens/outside/details-categorie/DetailsCategorie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/flash-deals",
        element: <FlashDeals />
      },
      {
        path : "/blog",
        element: <Blog />
      },
      {
        path : "/brands",
        element: <Brands />
      },
      {
        path: "*",
        element: <NotFound />
      },
      {
        path: "/categories",
        element: <AllCategories />
      },
      {
        path: "/category/:slug",
        element: <DetailsCategorie />
      },
    ]
  },
  {
    path: "/user/login",
    element: <Login />,
  },
  {
    path: "/user/registration",
    element: <Register />
  },
  {
    path: "/shops/create",
    element: <ShopCreate />
  },
  {
    path: "/seller/login",
    element: <SellerLogin />
  },

]);


export default router;