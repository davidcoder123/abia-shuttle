import React from "react";
import { Outlet } from "react-router-dom";
import HomeNav from "../components/header&footer/HomeNav";
import SideNav from "../components/header&footer/SideNav";
import Footer from "../components/header&footer/Footer";


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
