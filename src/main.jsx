import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import MyBookings from "./pages/MyBookings";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthContextComponent from "./Context/AuthContextComponent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RoomDetail from "./pages/RoomDetail";
import Review from "./pages/Review";
import { HelmetProvider } from "react-helmet-async";
import PraivateRoute from "./PrivateRoute/PraivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/rooms",
        element: <Rooms></Rooms>,
      },
      {
        path: "/myBookings",
        element: <PraivateRoute><MyBookings></MyBookings></PraivateRoute>,
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
        path: "/room/:id",
        element: <PraivateRoute><RoomDetail></RoomDetail></PraivateRoute>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/rooms/${params.id}`),
      },
      {
        path: "/review/:id",
        element: <PraivateRoute><Review></Review></PraivateRoute>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/review/${params.id}`),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextComponent>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
      <ToastContainer></ToastContainer>
    </AuthContextComponent>
  </React.StrictMode>
);
