import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home/Home";
import Menu from "../pages/menu/Menu/Menu";
import Order from "../pages/order/Order/Order";
import ContactUs from "../pages/contact/ContactUs/ContactUs";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/shered/Secret/Secret";
import Dashboard from "../layout/Dashboard";
import Cart from "../pages/dashBoard/Cart/Cart";
import AllUsers from "../pages/dashBoard/AllUsers/AllUsers";
import AddItems from "../pages/dashBoard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/dashBoard/ManageItems/ManageItems";
import UpdateItem from "../pages/dashBoard/UpdateItem/UpdateItem";
import Payment from "../pages/dashBoard/Payment/Payment";
import PaymentHistory from "../pages/dashBoard/PaymentHistory/PaymentHistory";
import AdminHome from "../pages/dashBoard/AdminHome/AdminHome";
import UserHome from "../pages/dashBoard/UserHome/UserHome";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "order/:category",
        element: <Order />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      // normal user route
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "userHome",
        element: <UserHome />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory />,
      },
      // admin route
      {
        path: "allUsers",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome />
          </AdminRoute>
        ),
      },
      {
        path: "addItems",
        element: (
          <AdminRoute>
            <AddItems />
          </AdminRoute>
        ),
      },
      {
        path: "manageItems",
        element: (
          <AdminRoute>
            <ManageItems />
          </AdminRoute>
        ),
      },
      {
        path: "updateItem/:id",
        element: (
          <AdminRoute>
            <UpdateItem />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
      },
    ],
  },
]);
