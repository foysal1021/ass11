import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Component/ShardPage/Footer/Footer";
import Header from "../Component/ShardPage/Header/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
