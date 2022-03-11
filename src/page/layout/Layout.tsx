import React from "react";
import PageHeader from "../../components/header/PageHeader";
import PageAside from "../../components/aside/PageAside";
import { Outlet } from "react-router-dom";
import "./index.css";

export default function PageLayout() {
  return (
    <div className="container">
      <div className="page-header-cointainer">
        <PageHeader></PageHeader>
      </div>
      <div className="aside-content-container">
        <div className="page-aside-container">
          <PageAside></PageAside>
        </div>
        <div className="page-content-container">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}
