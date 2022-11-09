import React from "react";
import { Link } from "react-router-dom";
import loginImg from "../../../Asset/img/login.png";

const Login = () => {
  return (
    <div className="hero-content mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 lg:py-40 ">
      <div className="text-center ">
        <img alt="" src={loginImg} />
      </div>

      <div className="card flex-shrink-0  py-5 bg-base-100 text-center ">
        <h1 className="text-5xl font-bold">Login now!</h1>

        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="text"
              placeholder="password"
              className="input input-bordered"
            />
            <label className="label">
              <a href="/" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <span className=" text-left">
            Are you new here?
            <Link to="/singup">
              {" "}
              <button className="  text-red-500 font-bold"> Singup </button>
            </Link>
          </span>

          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
