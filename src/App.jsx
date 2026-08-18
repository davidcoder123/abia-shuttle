import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavLayout from "../layout/NavLayout";
import AboutUs from "./pages/LandingPage/AboutUs";
import LandingPage from "./pages/LandingPage/LandingPage";
import ContactUs from "./pages/LandingPage/ContactUs";
import Register from "./pages/LandingPage/Register";
import Login from "./pages/LandingPage/Login";
import HomeNavLayout from "../layout/HomeNavLayout";
import CardSection from "./pages/UserPage/CardSection";
import Home from "./pages/UserPage/Home";
import BusRoute from "./pages/UserPage/BusRoute";
import BusSchedule from "./pages/UserPage/BusSchedule";
import Notification from "./pages/UserPage/Notification";
import TransactionHistory from "./pages/UserPage/TransactionHistory";
import BookTrip from "./pages/UserPage/BookTrip";
import FundCard from "./pages/UserPage/FundCard";
import Error404 from "./pages/404/Error404";
import ForgotPassword from "./pages/LandingPage/ForgotPassword";
import HelpCenter from "./pages/UserPage/HelpCenter";
import Setting from "./pages/UserPage/Setting";

//router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <NavLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "about", element: <AboutUs /> },
      { path: "contact", element: <ContactUs /> },
      { path: "signup", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "login", element: <Login /> },
      { path: "forgotpassword", element: <ForgotPassword /> },
    ],
  },
  {
    path: "/",
    element: <HomeNavLayout />,
    children: [
      { index: true, path: "/home", element: <Home /> },
      { path: "routes", element: <BusRoute /> },
      { path: "card", element: <CardSection /> },
      { path: "schedule", element: <BusSchedule /> },
      { path: "notifications", element: <Notification /> },
      { path: "history", element: <TransactionHistory /> },
      { path: "book", element: <BookTrip /> },
      { path: "fund-load", element: <FundCard /> },
      { path: "help-center", element: <HelpCenter /> },
      { path: "settings", element: <Setting /> },
    ],
  },
  { path: "*", element: <Error404 /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
