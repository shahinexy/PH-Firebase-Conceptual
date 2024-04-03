import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Layout/Home";
import Login from "./components/Layout/Login";
import Register from "./components/Layout/Register";
import AuthProvaider from "./provider/AuthProvaider";
import About from "./components/Layout/About";
import PrivetRout from "./components/PrivetRout/PrivetRout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
        path: '/about',
        element: <PrivetRout>
          <About></About>
        </PrivetRout>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvaider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvaider>
  </React.StrictMode>
);
