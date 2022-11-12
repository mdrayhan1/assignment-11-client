import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, LogOut } = useContext(AuthContext);
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
            {
              user?<button onClick={LogOut} className="btn btn-accent mr-2">
              LogOut
            </button>:<button className="btn btn-accent mr-2">
                <Link to={"/login"}>LogIn/SignUp</Link>
              </button>
            }
          </li>
          <li>
            {user ? (
              <button className="btn btn-accent mr-2">
                <Link to={"/myreviews"}>My reviews</Link>
              </button>
            ) : (
              <button className="btn btn-accent mr-2 hidden">
                <Link to={"/myreviews"}>My reviews</Link>
              </button>
            )}
          </li>
          <li>
            {user ? (
              <button className="btn btn-accent mr-2">
                <Link to={"/bookedservice"}>Booked Service</Link>
              </button>
            ) : (
              <button className="btn btn-accent mr-2 hidden">
                <Link to={"/bookedservice"}>Booked Service</Link>
              </button>
            )}
          </li>
          <li>
            <button className="btn btn-accent mr-2">
              <Link to={"/blogs"}>Blogs</Link>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
