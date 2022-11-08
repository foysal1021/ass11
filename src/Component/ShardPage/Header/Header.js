import React from "react";
import Banner from "../../Home/Banner";
import Meet from "../../Home/Meet";
import Nav from "../../Home/Nav";
import Services from "../../Home/Services";

const Header = () => {
  return (
    <div>
      <Nav></Nav>
      <Banner></Banner>
      <Services></Services>
      <Meet></Meet>
    </div>
  );
};

export default Header;
