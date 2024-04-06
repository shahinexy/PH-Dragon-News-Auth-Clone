import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Login from "../Home/Login";
import Register from "../Home/Register";
import SingleNews from "../Home/SingleNews";
import PrivetRout from "./PrivetRout";
import ErrorePage from "../Home/ErrorePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorePage></ErrorePage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/news.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/singleNews/:id",
        element: <PrivetRout><SingleNews></SingleNews></PrivetRout>,
        loader: () => fetch("/news.json"),
      },
    ],
  },
]);

export default router;
