import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  // console.log(service);
  const { img, title, price, details } = service;
  return (
    <div className="card w-96  shadow-xl mx-auto ">
      <figure className="px-10 pt-10">
        <img src={img} alt="" className="rounded-xl" />
      </figure>

      <div className="card-body items-center text-center">
        <h2 className="card-title text-3xl">{title}!</h2>
        <p className=" text-xl font-bold"> Price : ${price}</p>
        <p>{details.slice(0, 100)}...</p>
        <div className="card-actions">
          <Link to={`/service-details/${service._id}`} className=" mt-5">
            {" "}
            <button className=" btn bg-teal-700"> View details </button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
