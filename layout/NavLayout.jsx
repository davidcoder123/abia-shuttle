import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function NavLayout() {
  return (
    <main>
  
      <NavBar/>
      <Outlet />
    </main>
  );
}

export default NavLayout;
