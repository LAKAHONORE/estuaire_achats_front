import { createBrowserRouter } from "react-router-dom";
import Layout from "../src/screens/outside/Layout";
import Home from "../src/screens/outside/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
    ]
  },
]);


export default router;