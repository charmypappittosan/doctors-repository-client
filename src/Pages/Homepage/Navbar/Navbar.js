import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../../Shared/Loading";


const Navbar = () => {
  const [user]=useAuthState(auth);
    const [signOut, loading] = useSignOut(auth);
    if(loading){
      <Loading></Loading>
    }
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li tabindex="0">
                <ul className="p-2"></ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/appointment">Appointment</Link>
                </li>
                <li>
                  <a>Reviews</a>
                </li>
                <li>
                  <a>Contact Us</a>
                </li>
                <li>
                  {user ? (
                    <a onClick={() => signOut()}>Signout</a>
                  ) : (
                    <Link to="/login">Login</Link>
                  )}
                </li>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Doctor's Portal</a>
        </div>
        {/* <div className="navbar-center "></div> */}
        <div className="navbar-end ">
          <ul className="menu menu-horizontal px-1 hidden lg:flex">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/appointment">Appointment</Link>
            </li>
            <li>
              <a>Reviews</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>

            <li>
              {user ? (
                <a onClick={() => signOut()}>Signout</a>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
