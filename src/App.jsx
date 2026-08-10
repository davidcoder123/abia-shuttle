import React from "react";
import { createBrowserRouter } from "react-router-dom";
import NavLayout from "../layout/NavLayout";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <NavLayout />, children: [{ index: true }] },
  ]);
  return <div></div>;
}

export default App;
