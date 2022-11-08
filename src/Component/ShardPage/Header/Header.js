import React from "react";
import Banner from "../../Home/Banner";
import Nav from "../../Home/Nav";
import Services from "../../Home/Services";

const Header = () => {
  return (
    <div>
      <Nav></Nav>
      <Banner></Banner>
      <Services></Services>
    </div>
  );
};

export default Header;
