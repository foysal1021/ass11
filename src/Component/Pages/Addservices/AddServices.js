import React from "react";
import UseTitale from "../../../Utilitis/Utilitis";

const AddServices = () => {
  UseTitale("Add Services");
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
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addSERVICE),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
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

          <input type="submit" value="Send Request" className=" btn" />
        </form>
      </div>
    </div>
  );
};

export default AddServices;
