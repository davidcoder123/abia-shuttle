import React from "react";
import { Outlet } from "react-router-dom";

function NavLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default NavLayout;
