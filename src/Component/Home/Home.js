import React from "react";
import AboutME from "./AboutME";
import Banner from "./Banner";
import Meet from "./Meet";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Meet></Meet>
      <AboutME></AboutME>
    </div>
  );
};

export default Home;
