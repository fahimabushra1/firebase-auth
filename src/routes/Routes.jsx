import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";
import ErrorPage from "../pages/ErrorPage";
import ToyDetails from "../pages/ToyDetails";
// import PrivateRoute from "./private/PrivateRoute";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path: "/home",
          element: <Home/>,
          loader:()=> fetch("http://localhost:3000/toys"),
        },
        {
          path: "/products/:id",
          element: <ToyDetails/>,
          loader:({params})=>fetch(`http://localhost:3000/toys/${params.id}`),
        },
        {
          path: "/register",
          element: <Register/>
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/login",
          element: <Login/>
        },
      ]
    },
    {
      path: "/dashboard",
      element: <DashboardLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path: "",
          element:<Dashboard/>
        },
      ]
    },
  ]);