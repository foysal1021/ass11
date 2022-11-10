import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthContext/AuthProvider";
// ES6 Modules or TypeScript
import Swal from "sweetalert2";

const Myreviews = () => {
  const { user } = useContext(AuthContext);
  console.log("ok", user?.email);
  const [myReviews, setMyreviews] = useState([]);
  console.log(myReviews);

  useEffect(() => {
    fetch(`http://localhost:5000/review?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyreviews(data.review));
  }, [user?.email]);

  // delete review start
  const deleteReview = (dlt) => {
    console.log(dlt);

    fetch(`http://localhost:5000/review/${dlt}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire("Good job!", "Review Delete!", "success");
          const remaning = myReviews.filter((review) => review._id !== dlt);
          setMyreviews(remaning);
        }
      });
  };
  // delete review start

  return (
    <div>
      <div className="overflow-x-auto w-full container mx-auto my-10 ">
        <h1 className=" text-2xl font-bold mb-10"> MY REVIEW</h1>
        <p className=" text-start mb-5">
          {" "}
          Totla Review:{" "}
          {myReviews.length < 0 ? (
            <span className=""> No Review</span>
          ) : (
            <span className=""> {myReviews.length}</span>
          )}
        </p>
        {/* table */}
        {myReviews.map((review) => (
          <div className="   lg:flex justify-around  items-center border-4 rounded-xl p-6">
            <button
              onClick={() => deleteReview(review._id)}
              className="btn bg-red-400 lg:mr-10 "
            >
              delete
            </button>

            <div className=" flex items-center lg:w-1/3 ">
              <img
                className=" w-20 h-20 rounded-full"
                alt=""
                src={review.photo}
              />
              <span className="  text-start ml-3">
                <p className=" text-2xl font-bold"> {review.name} </p>
                <p className=" text-xl "> {review.email} </p>
              </span>
            </div>

            <div className=" lg:w-2/3">
              <p className=" mt-5 text-justify">{review.aboutService}</p>
              <button> Eidit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Myreviews;
