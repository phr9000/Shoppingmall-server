import React from "react";
import { Outlet } from "react-router-dom";
import Header from "components/Header";
import SearchHeader from "components/SearchHeader";
import "../assets/styles/index.scss";

export default function Root() {
  return (
    <div>
      <SearchHeader />
      <Header />
      <div className="main-layout-container">
        <Outlet />
      </div>
    </div>
  );
}
