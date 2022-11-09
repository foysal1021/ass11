import React from "react";
import loginImg from "../../../Asset/img/login.png";

const Login = () => {
  const register = (event) => {
    event.preventDefault();
    // console.log(event);
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
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
            name="email"
            type="text"
            placeholder="Type Email"
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
            placeholder=" Type Password"
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
