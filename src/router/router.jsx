import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Login from "../Home/Login";
import Register from "../Home/Register";
import SingleNews from "../Home/SingleNews";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=> fetch('/news.json')
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/singleNews/:id',
          element: <SingleNews></SingleNews>,
        }
      ]
    },
  ]);

  export default router;