import React from "react";
import "./index.scss";

export default function PageHeader() {
  return (
    <div className="page-header">
      <div className="logo"></div>
      <div className="nav-list">
        <div className="nav-item">Home</div>
        <div className="nav-item">Content</div>
        <div className="nav-item">About</div>
      </div>
    </div>
  );
}
