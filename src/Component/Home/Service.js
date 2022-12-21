import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import UseTitale from "../../Utilitis/Utilitis";

const Service = ({ service, setloading }) => {
  UseTitale("services");
  // console.log(service);
  const { img, title, price, details } = service;
  return (
    <div className="card w-96  shadow-xl mx-auto ">
      <figure className="px-10 pt-10">
        <PhotoProvider>
          <PhotoView src={img}>
            <img src={img} alt="" />
          </PhotoView>
        </PhotoProvider>
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
      {setloading(false)}
    </div>
  );
};

export default Service;
