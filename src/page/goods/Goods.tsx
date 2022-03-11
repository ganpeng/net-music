import React from "react";
import { Outlet } from "react-router-dom";

export default function Goods() {
  return (
    <>
      <h2>Goods</h2>
      <Outlet></Outlet>
    </>
  );
}
