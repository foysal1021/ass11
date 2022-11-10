import React from "react";
import { Link } from "react-router-dom";
import img from "../../Asset/img/Screenshot_16-removebg-preview.png";
import UseTitale from "../../Utilitis/Utilitis";

const Banner = () => {
  UseTitale("banner");
  return (
    <div
      className=" h-full  container mx-auto lg:my-20  rounded-lg"
      style={{
        backgroundImage: `url("https://i.ibb.co/zRk2cVn/16351572-rm209-adj-20.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className=" lg:flex justify-around items-center">
        <div className=" pt-10  lg:text-start">
          <h1 className=" text-5xl lg:text-6xl font-bold ">
            {" "}
            Dr. Joyanto Saha{" "}
          </h1>
          <p className=" text-3xl lg:text-3xl my-3 mb-9">
            Specialist in Dermatology and Venereology
          </p>
          <span className=" lg:text-xl text-xl">
            <p> MBBS, BCS(Health), DDV(BSMMU)</p>
            <p> Trained in Dermatosurgery</p>
            <p> Cosmetic Dermatologist, Bhola Sadar Hospital, Bhola.</p>
          </span>
          <button className=" btn btn-primary mt-10">
            {" "}
            <Link to="/all-services"> Services</Link>{" "}
          </button>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
