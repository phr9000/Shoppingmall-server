import React from "react";
import { Outlet } from "react-router-dom";
import Header from "components/Header";
import SearchHeader from "components/SearchHeader";
import "../assets/styles/index.scss";
import Footer from "components/Footer";

const Root: React.FC = () => {
  return (
    <div>
      <SearchHeader />
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Root;