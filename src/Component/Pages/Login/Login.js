import React, { useContext } from "react";
import { Link } from "react-router-dom";
import loginImg from "../../../Asset/img/login.png";
import { AuthContext } from "../../../Context/AuthContext/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const { user, userLogin, googleSinin } = useContext(AuthContext);
  console.log("login ", user);
  const login = (event) => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    // user login start
    userLogin(email, password)
      .then((result) => {
        alert("login");
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {});
    // user login end
  };
  const googleLogin = () => {
    googleSinin()
      .then(() => {})
      .catch((err) => {});
  };
  return (
    <div className="hero-content mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 lg:py-40 ">
      <div className="text-center ">
        <img alt="" src={loginImg} />
      </div>

      <form onSubmit={login} className="card-body">
        <h1 className=" text-5xl font-bold"> Login Now!!!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="text"
            placeholder="Enter Email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="Enter Password"
            className="input input-bordered"
          />
          <label className="label">
            <Link href="#" className="label-text-alt link link-hover">
              Forgot password?
            </Link>
          </label>
        </div>
        <span className=" text-start">
          {" "}
          Are you new here?{" "}
          <Link className=" text-teal-500 font-bold" to="/Register">
            {" "}
            Register{" "}
          </Link>
        </span>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <button className="btn btn-outline" onClick={googleLogin}>
          {" "}
          <FaGoogle className=" text-red-500 text-2xl mx-3"></FaGoogle> Login
          With Google
        </button>
      </form>
    </div>
  );
};

export default Login;
