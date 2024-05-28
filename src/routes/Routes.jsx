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
import AllProducts from "../pages/AllProducts";
import AddProducts from "../pages/dashboard/AddProducts";
import EditProduct from "../pages/EditProduct";
import ProductDetail from "../pages/ProductDetail";
import PrivateRoute from "./private/PrivateRoute";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path: "/",
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
          element:
          // <PrivateRoute>
          <Dashboard/>
          // </PrivateRoute>
        },
        {
          path: "/dashboard/all-products",
          element:
          <PrivateRoute>
            <AllProducts/>
          </PrivateRoute>
        },
        {
          path: "/dashboard/add-products",
          element:<AddProducts/>
        },
        {
          path: "/dashboard/edit-product/:id",
          element:<EditProduct/>,
          loader:({params})=>
            fetch(`http://localhost:3000/toys/${params.id}`),
        },
        {
          path: "/dashboard/detail-product/:id",
          element:<ProductDetail/>,
          loader:({params})=>
            fetch(`http://localhost:3000/toys/${params.id}`),
        },
       
      ]
    },
  ]);