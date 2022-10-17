import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Error from "../components/Error";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Main from "../layouts/Main";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
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
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      }
    ]
  }
]);