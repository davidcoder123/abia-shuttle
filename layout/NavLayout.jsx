import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/header&footer/NavBar";
import Footer from "../components/header&footer/Footer";

function NavLayout() {
  return (
    <main>
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default NavLayout;
