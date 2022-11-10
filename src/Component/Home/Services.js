import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UseTitale from "../../Utilitis/Utilitis";
import Service from "./Service";

const Services = () => {
  UseTitale("services");
  const [Services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://server-two-xi.vercel.app/services3")
      .then((res) => res.json())
      .then((data) => setServices(data.services));
  }, []);

  // console.log(Services);

  return (
    <div
      className=" h-full  container mx-auto my-10 py-10 rounded-xl"
      style={{
        backgroundImage: `url("https://i.ibb.co/3BxVjvt/16282276-rm222batch2-mind-03.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className=" text-5xl font-bold"> MY SERVICES </h1>

      <div className=" lg:flex justify-around">
        {Services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>

      <Link to="/all-services">
        <button className="  bg-teal-700 btn mt-20 px-10 text-xl capitalize">
          {" "}
          See All{" "}
        </button>
      </Link>
    </div>
  );
};

export default Services;
