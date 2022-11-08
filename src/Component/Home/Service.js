import React from "react";

const Service = ({ service }) => {
  console.log(service);
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
          <button className="btn btn-primary mt-5">view details</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
