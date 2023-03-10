import React, { useEffect, useState } from "react";
import UseTitale from "../../../Utilitis/Utilitis";
import Getallservices from "./Getallservices";

const Allservices = () => {
  UseTitale("All Services");
  const [allservices, setallservices] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetch("https://server-foysal1021.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setallservices(data.services));
  }, []);
  //   console.log(allservices);
  return (
    <div
      className=" container mx-auto py-10"
      style={{
        backgroundImage: `url("https://i.ibb.co/3BxVjvt/16282276-rm222batch2-mind-03.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className=" text-5xl font-bold  py-10"> ALL SERVICES</h1>
      {loading === true && <progress className="progress w-52 "></progress>}

      <div className=" lg:grid grid-cols-3 gap-10 ">
        {allservices.map((service) => (
          <Getallservices
            key={service._id}
            service={service}
            setloading={setloading}
          ></Getallservices>
        ))}
      </div>
    </div>
  );
};

export default Allservices;
