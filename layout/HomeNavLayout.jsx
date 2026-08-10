import React from "react";
import { Outlet } from "react-router-dom";
import HomeNav from "../components/HomeNav";

function HomeNavLayout() {
  return (
    <main>
      <HomeNav />
      <Outlet />
    </main>
  );
}

export default HomeNavLayout;
