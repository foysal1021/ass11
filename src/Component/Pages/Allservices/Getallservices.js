import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
const Getallservices = ({ service }) => {
  const { _id, title, price, img, details } = service;

  return (
    <div>
      <div className="card w-96 shadow-xl mx-auto mb-5">
        <figure className="px-10 pt-10">
          <PhotoProvider>
            <PhotoView src={img}>
              <img src={img} alt="" />
            </PhotoView>
          </PhotoProvider>

          {/* <img src={img} alt="Shoes" className="rounded-xl" /> */}
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl"> {title}</h2>
          <p className=" text-xl font-bold">Price : ${price} </p>
          <p>Price : {details.slice(0, 100)}... </p>
          <div className="card-actions">
            <Link to={`/service-details/${_id}`}>
              <button className="btn btn-primary mt-6"> View details </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Getallservices;
