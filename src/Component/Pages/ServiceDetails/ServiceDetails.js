import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContext/AuthProvider";
import Swal from "sweetalert2";
import UseTitale from "../../../Utilitis/Utilitis";

const ServiceDetails = () => {
  UseTitale(" Service Details");
  const { user, loading } = useContext(AuthContext);
  const { img, price, title, details, _id } = useLoaderData();
  const [reviews, setReviews] = useState([]);
  //xxxxxxxxxxxxxxxxxxxx
  const location = useLocation();
  // <progress className="progress w-56"></progress>

  const addReview = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const review = form.review.value;

    const CustomerREVIEW = {
      name: name,
      email: email,
      photo: photo,
      aboutService: review,
      service_id: _id,
    };
    // review post in database start
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(CustomerREVIEW),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire("Review Added!", "Pls Refresh page", "success");
        }
      });
  }; // review post in database end

  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data.review));
  }, []);

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
      {/* ................................................................. */}
      <div>
        <h1 className=" text-3xl font-bold mb-5"> ADD REVIEW</h1>
        {user?.uid ? (
          <div className=" container mx-auto">
            <form
              onSubmit={addReview}
              className=" grid grid-cols-1 lg:grid-cols-2 gap-10 py-10 px-5"
            >
              <input
                readOnly
                defaultValue={user?.displayName}
                name="name"
                type="text"
                placeholder="Type Your Name"
                className="input input-bordered input-secondary w-full"
              />
              <input
                readOnly
                defaultValue={user?.email}
                name="email"
                type="email"
                placeholder="Type Your Email"
                className="input input-bordered input-secondary w-full"
              />
              <input
                readOnly
                defaultValue={user?.photoURL}
                name="photo"
                type="text"
                placeholder="Type Your Photo URL "
                className="input input-bordered input-secondary w-full"
              />
              <textarea
                name="review"
                className="textarea textarea-accent h-[250px] lg:h-0"
                placeholder="Bio"
              ></textarea>

              <input type="submit" value="Give Review" className=" btn" />
            </form>
          </div>
        ) : (
          <span className=" text-2xl font-bold">
            {" "}
            For added Reivew{" "}
            <Link
              state={{ from: location }}
              replace
              to="/login"
              className="btn btn-primary px-10 "
            >
              {" "}
              Login{" "}
            </Link>
          </span>
        )}
      </div>

      {/*  give feedback end */}

      {/* review section start */}
      <div className="overflow-x-auto w-full container mx-auto my-40 ">
        <h1 className=" text-2xl font-bold mb-10"> SERVICES REVIEW</h1>
        {/* table */}
        {reviews.map((review) => (
          <div className="   lg:flex justify-around  items-center border-4 rounded-xl p-6">
            <div className=" flex items-center lg:w-1/3 ">
              <img
                className=" w-20 h-20 rounded-full"
                alt=""
                src={review.photo}
              />
              <span className="  text-start ml-3">
                <p className=" text-2xl font-bold"> {review.name}</p>
                <p className=" text-xl "> {review.email}</p>
              </span>
            </div>

            <div className=" lg:w-2/3">
              <p className=" mt-5 text-justify">
                {review.status ? (
                  <span>{review.status}</span>
                ) : (
                  <span>{review.aboutService}</span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* review section end */}
    </div>
  );
};

export default ServiceDetails;
