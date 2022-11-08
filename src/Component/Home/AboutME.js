import React from "react";
import aboutIMG from "../../Asset/img/aboutmE.png";

const AboutME = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://i.ibb.co/yS3D0h5/16326538-rm222batch5-kul-03.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className=" mb-40 container mx-auto py-10 rounded-lg"
    >
      <h1 className=" text-5xl font-bold"> ABOUT ME </h1>

      <div className=" lg:flex justify-around my-20">
        <div>
          {" "}
          <img className=" rounded-lg" alt="" src={aboutIMG} />{" "}
        </div>
        <div className=" p-5 lg:w-1/2">
          <p className=" text-2xl text-start leading-10">
            Dr. Joyanto Saha is a Medicine Specialist in Jessore. His
            qualification is MBBS, FCPS (Medicine), FACP (USA), FRCP (Glasg, UK,
            Edin), MACP (USA). He is a Former Professor & Head in the Department
            of Medicine at Dhaka Medical College & Hospital. He regularly
            provides treatment to his patients at Popular Diagnostic Center,
            Dhanmondi. Practicing hour of Prof. Dr. Quazi Tarikul Islam at
            Popular Diagnostic Center, Dhanmondi is 5pm to 8pm (Sat, Sun & Mon).
          </p>
        </div>
        ;
      </div>
    </div>
  );
};

export default AboutME;
