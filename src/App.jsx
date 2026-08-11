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
import CardSection from "./pages/UserPage/CardSection";
import BusSchedule from "./pages/UserPage/BusSchedule";
import TransactionHistory from "./pages/UserPage/TransactionHistory";
import Notification from "./pages/UserPage/Notification";

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
      ],
    },
  ]);
  function App() {
  return <RouterProvider router={router} />;
}

export default App;
