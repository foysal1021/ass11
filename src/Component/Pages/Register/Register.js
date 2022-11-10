import React, { useContext } from "react";
import { Link } from "react-router-dom";
import loginImg from "../../../Asset/img/login.png";
import { AuthContext } from "../../../Context/AuthContext/AuthProvider";
import UseTitale from "../../../Utilitis/Utilitis";

const Login = () => {
  UseTitale("Login");
  const { userRegister, updateUser } = useContext(AuthContext);

  const register = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, photo, email, password);

    // user singup start
    userRegister(email, password)
      .then((result) => {
        updateUser(name, photo)
          .then((result) => {
            alert("ok");
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => {});
    // user singup end
  };

  return (
    <div className="hero-content mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 lg:py-40 ">
      <div className="text-center ">
        <img alt="" src={loginImg} />
      </div>

      <form onSubmit={register} className="card-body">
        <h1 className=" text-5xl font-bold"> Register Now!!!</h1>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            required
            name="name"
            type="text"
            placeholder="Type Name"
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            required
            name="email"
            type="text"
            placeholder="Type Email"
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            required
            name="photo"
            type="text"
            placeholder=" Type Photo URL"
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            required
            name="password"
            type="password"
            placeholder=" Type Password"
            className="input input-bordered"
          />
        </div>
        <span className=" text-start">
          {" "}
          Already have an accout?{" "}
          <Link className=" text-teal-600 font-bold" to="/login">
            {" "}
            Login{" "}
          </Link>
        </span>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
