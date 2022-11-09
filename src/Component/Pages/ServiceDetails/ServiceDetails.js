import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const { img, price, title, details } = useLoaderData();

  return (
    <div>
      <div
        className=" h-full  container mx-auto my-10 py-10 rounded-xl"
        style={{
          backgroundImage: `url("https://i.ibb.co/3BxVjvt/16282276-rm222batch2-mind-03.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="card   shadow-xl mx-auto ">
          <figure className="px-10 pt-10">
            <img src={img} alt="" className="rounded-xl" />
          </figure>

          <div className="card-body items-center text-center">
            <h2 className="card-title text-3xl">{title}!</h2>
            <p className=" text-xl font-bold"> Price : ${price}</p>
            <p className=" lg:w-1/2">{details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
