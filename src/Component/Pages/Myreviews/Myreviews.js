import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthContext/AuthProvider";
import Swal from "sweetalert2";
import UseTitale from "../../../Utilitis/Utilitis";
import { useNavigate } from "react-router-dom";

// ES6 Modules or TypeScript

const Myreviews = () => {
  UseTitale("My Reviews");
  const { user } = useContext(AuthContext);
  //   console.log("ok", user?.email);
  const [myReviews, setMyreviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://server-foysal1021.vercel.app/review?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyreviews(data.review));
  }, [user?.email]);

  // delete review start
  const deleteReview = (dlt) => {
    console.log(dlt);

    fetch(`https://server-foysal1021.vercel.app/review/${dlt}`, {
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
  // delete review end

  const [UPDATEreview, SETreview] = useState();

  const getUpdatedReview = (e) => {
    SETreview(e.target.value);
  };
  // updated review start
  const updatedReview = (id) => {
    fetch(`https://server-foysal1021.vercel.app/review/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: UPDATEreview }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Review Updated", "Pls Refresh page", "success");
        }
      });
  }; // updated review end

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
                <p className="  "> {review.email} </p>
              </span>
            </div>

            <div className=" lg:w-2/3 lg:flex justify-between">
              <p className="  mt-5 text-justify">
                {review.status ? (
                  <p> {review.status} </p>
                ) : (
                  <p>{review.aboutService}</p>
                )}
                {/* {review.aboutService} */}
              </p>

              <p className=" mt-5 lg:flex items-center">
                <form className=" flex items-center">
                  <textarea
                    onBlur={getUpdatedReview}
                    name="updated"
                    className="textarea  textarea-accent lg:h-0"
                    placeholder="Updated Review"
                  ></textarea>
                  <p
                    className="px-6 py-3 rounded-lg ml-4 bg-teal-600 "
                    onClick={() => updatedReview(review._id)}
                    style={{ cursor: "pointer" }}
                  >
                    {" "}
                    Edit{" "}
                  </p>
                </form>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Myreviews;
