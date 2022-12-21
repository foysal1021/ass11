import React from "react";
import UseTitale from "../../../Utilitis/Utilitis";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { useNavigate } from "react-router-dom";

const AddServices = () => {
  UseTitale("Add Services");
  const navigate = useNavigate();
  const addservice = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const price = form.price.value;
    const about = form.about.value;
    const img = form.img.value;

    const addSERVICE = {
      img: img,
      title: title,
      price: price,
      details: about,
    };
    fetch("https://server-foysal1021.vercel.app/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addSERVICE),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire("Product Added succesful", "success");
          form.reset();
          navigate("/all-services");
        }
      });
  };
  return (
    <div
      className=" container mx-auto py-10 my-5 rounded-xl"
      style={{
        backgroundImage: `url("https://i.ibb.co/3BxVjvt/16282276-rm222batch2-mind-03.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className=" container mx-auto">
        <h1 className=" text-3xl font-bold"> Add Product </h1>
        <form
          onSubmit={addservice}
          className=" grid grid-cols-1 lg:grid-cols-2 gap-10 py-10 px-5"
        >
          <input
            name="img"
            type="text"
            placeholder="Type Service IMG Link"
            className="input input-bordered input-secondary w-full"
          />
          <input
            name="title"
            type="text"
            placeholder="Type Service Name"
            className="input input-bordered input-secondary w-full"
          />
          <input
            name="price"
            type="number"
            placeholder="Type Price "
            className="input input-bordered input-secondary w-full"
          />
          <textarea
            name="about"
            className="textarea textarea-accent h-[250px] lg:h-0"
            placeholder="Type Service Description"
          ></textarea>

          <input type="submit" value="Add Product" className=" btn" />
        </form>
      </div>
    </div>
  );
};

export default AddServices;
