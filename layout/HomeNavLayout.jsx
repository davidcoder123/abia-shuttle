import React from "react";
import { Outlet } from "react-router-dom";
import HomeNav from "../components/HomeNav";
import SideNav from "../components/SideNav";
import Footer from "../components/Footer";

function HomeNavLayout() {
  return (
    <main className="">
      <HomeNav />
      <SideNav />
      <div className="ml-0">
        <Outlet />
        <Footer />
      </div>
    </main>
  );
}

export default HomeNavLayout;
