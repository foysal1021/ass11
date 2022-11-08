import React from "react";
import img from "../../Asset/img/meet.png";
import "./Meet.css";

const Meet = () => {
  return (
    <div className=" container mx-auto my-40">
      <h1 className=" text-5xl font-bold mb-10"> TO MEET </h1>

      <div className=" lg:flex justify-around ">
        <div className=" bg-red-300 lg:w-2/4 ">
          <div id="meetIMG" className="relative">
            {" "}
            <img src={img} alt="" />{" "}
          </div>
        </div>

        <div className="overflow-x-auto lg:w-1/2">
          <table className="table w-full">
            <thead>
              <tr className=" text-center">
                <th className=" w-1/3">DAY</th>
                <th className=" w-1/3">PLACE</th>
                <th className=" w-1/3">TIME</th>
              </tr>
            </thead>
            <tbody>
              <tr className=" text-center">
                <td>Friday</td>
                <td>Jessore</td>
                <td>10 AM - 4 PM</td>
              </tr>
              <tr className=" text-center">
                <td>Saturday</td>
                <td>Jessore</td>
                <td>10 AM - 4 PM</td>
              </tr>
              <tr className=" text-center">
                <td>Sunday</td>
                <td>Khulna</td>
                <td>1 PM - 4 PM</td>
              </tr>
              <tr className=" text-center">
                <td>Monday</td>
                <td>Khulna</td>
                <td>1 PM - 4 PM</td>
              </tr>
              <tr className=" text-center">
                <td>Tuesday</td>
                <td>Borisal</td>
                <td>10 AM - 1 PM</td>
              </tr>
              <tr className=" text-center">
                <td>Wednesday</td>
                <td>Dhaka</td>
                <td>10 AM - 4 PM</td>
              </tr>
              <tr className=" text-center">
                <td>Thursday</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* <div className=" lg:flex justify-around items-center">

        <div id="meetIMG" className="relative">
          {" "}
          <img src={img} alt="" />{" "}
        </div>

        <div>
          <div className=" ok">
            <h1> DAY</h1>
            <h1> TIME</h1>
          </div>
        </div>

      </div> */}
    </div>
  );
};

export default Meet;
