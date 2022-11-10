import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import Home from "../../Home/Home";
import AddServices from "../../Pages/Addservices/AddServices";
import Allservices from "../../Pages/Allservices/Allservices";
import Blog from "../../Pages/Blog/Blog";
import Login from "../../Pages/Login/Login";
import Myreviews from "../../Pages/Myreviews/Myreviews";

import Register from "../../Pages/Register/Register";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";

export const routs = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/service-details/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/services/${params.id}`);
        },
      },

      {
        path: "/all-services",
        element: <Allservices></Allservices>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/Register",
        element: <Register></Register>,
      },
      {
        path: "/AddServices",
        element: <AddServices></AddServices>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/my-reviews",
        element: <Myreviews></Myreviews>,
      },
    ],
  },
]);
