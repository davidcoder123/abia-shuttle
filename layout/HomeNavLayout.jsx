import React from "react";
import { Outlet } from "react-router-dom";
import HomeNav from "../components/HomeNav";
import SideNav from "../components/SideNav";
import Footer from "../components/Footer";

function HomeNavLayout() {
  return (
    <main>
      <HomeNav />
      <SideNav />
      <Outlet />
      <Footer/>
    </main>
  );
}

export default HomeNavLayout;
