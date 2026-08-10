import React from "react";
import { Outlet } from "react-router-dom";

function HomeNavLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default HomeNavLayout;
