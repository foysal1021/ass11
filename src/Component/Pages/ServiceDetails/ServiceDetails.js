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
      {/*  give feedback start*/}
      <div className=" container mx-auto">
        <h1 className=" text-3xl font-bold"> ADD REVIEW</h1>
        <form className=" grid grid-cols-1 lg:grid-cols-2 gap-6 pt-10 px-5">
          <input
            name="name"
            type="text"
            placeholder="Type Name"
            className="input input-bordered  w-full"
          />
          <input
            name="email"
            type="email"
            placeholder="Type email"
            className="input input-bordered  w-full"
          />
          <input
            name="img"
            type="text"
            placeholder="give img link "
            className="input input-bordered  w-full"
          />
          <textarea
            className="textarea textarea-info h-[140px] lg:h-0"
            placeholder="Type Review"
          ></textarea>
        </form>
        <input type="sumbit" value="submit" className="btn mt-5" />
      </div>
      {/*  give feedback end */}

      {/* review section start */}
      <div className="overflow-x-auto w-full container mx-auto my-40 ">
        <h1 className=" text-2xl font-bold mb-10"> SERVICES REVIEW</h1>
        {/* table */}
        <div className="   lg:flex justify-around  items-center border-4 rounded-xl p-6">
          <div className=" flex items-center lg:w-1/3 ">
            <img
              className=" w-20 h-20 rounded-full"
              alt=""
              src="https://static.toiimg.com/thumb/msid-11326153,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-28834/11326153.jpg"
            />
            <span className="  text-start ml-3">
              <p className=" text-2xl font-bold"> name</p>
              <p className=" text-xl "> email</p>
            </span>
          </div>

          <div className=" lg:w-2/3">
            <p className=" mt-5 text-justify">
              Karenjit Kaur Vohra, known by her stage name Sunny Leone, is a
              Canadian-American model and actress in the American and Indian
              film industries. She is a former pornographic actress. She was
              born in Canada to an Indian Sikh family. She has Canadian and
              American citizenship. Her pet name is Karen.
            </p>
          </div>
        </div>
      </div>
      {/* review section end */}
    </div>
  );
};

export default ServiceDetails;
