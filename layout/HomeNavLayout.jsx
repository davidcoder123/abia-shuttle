import React from "react";
import { Outlet } from "react-router-dom";

function HomeNavLayout() {
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default HomeNavLayout;
