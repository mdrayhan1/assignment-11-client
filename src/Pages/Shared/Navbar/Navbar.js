import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <parent className="btn btn-ghost normal-case text-xl">Web Works</parent>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <button className="btn btn-accent mr-2">
              <Link to={"/"}>Home</Link>
            </button>
          </li>
          <li>
            <button className="btn btn-accent mr-2">
              {" "}
              <Link to={"/signup"}>SignUp</Link>
            </button>
          </li>

          <li>
            <button className="btn btn-accent mr-2">
              <Link to={"/login"}>LogIn</Link>
            </button>
          </li>
          <li>
            <button className="btn btn-accent mr-2">
              <Link to={"/myreviews"}>My reviews</Link>
            </button>
          </li>
          <li>
            <button className="btn btn-accent mr-2">
              <Link to={"/bookedservice"}>Booked Service</Link>
            </button>
          </li>
          <li>
            <button className="btn btn-accent mr-2">
              <Link to={"/blogs"}>Blogs</Link>
            </button>
          </li>
          <li>
            <button className="btn btn-accent mr-2">
              {" "}
              <Link to={"/logout"}>LogOut</Link>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
