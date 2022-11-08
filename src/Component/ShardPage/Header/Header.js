import React from "react";
import AboutME from "../../Home/AboutME";
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
      <AboutME></AboutME>
    </div>
  );
};

export default Header;
