import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './pages/Root';
import Error from './pages/Error';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import MyBookings from './pages/MyBookings';
import Login from './pages/Login';
import Register from './pages/Register';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/rooms",
        element: <Rooms></Rooms>
      },
      {
        path: "/myBookings",
        element: <MyBookings></MyBookings>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
