import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext/AuthProvider";

const Nav = () => {
  const { user, userlogout } = useContext(AuthContext);

  const navigate = useNavigate();

  const logout = () => {
    userlogout()
      .then((result) => {
        navigate("/login");
        console.log("user not foun");
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className=" bg-teal-500 ">
      <div className="navbar container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/blog"> Blog </Link>
              </li>

              <li>
                <Link to=""> My reviews</Link>
              </li>
              <li>
                <Link to="/AddServices">Add service</Link>
              </li>
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-2xl font-bold" to="/">
            Medi<span className=" text-red-500">Space</span>{" "}
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <Link to="/blog"> Blog </Link>
          {user?.uid ? (
            <ul className="menu menu-horizontal p-0">
              <li>
                <Link to="/my-reviews"> My reviews</Link>
              </li>

              <li>
                <Link to="/AddServices">Add service</Link>
              </li>
            </ul>
          ) : (
            <></>
          )}
        </div>

        <div className="navbar-end">
          <div className="navbar-center  lg:flex">
            {user?.uid ? (
              <ul className="menu menu-horizontal p-0">
                <li>
                  <Link onClick={logout}> Logout </Link>
                </li>
              </ul>
            ) : (
              <ul className="menu menu-horizontal p-0">
                <li>
                  <Link to="/login"> Login </Link>
                  <Link to="/Register"> Register </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
