import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-6 flex justify-between bg-black text-white text-xl">
      <div>
        <p className=" px-4 transiton hover:scale-125 duration-200">
          <Link to="/"> Home </Link>
        </p>
      </div>
      <div className="flex">
        <p className=" px-4 transiton hover:scale-125 duration-200"> <NavLink to="/signup">Sign Up </NavLink> </p>
        <p className="px-4 transiton hover:scale-125 duration-200"> <NavLink to="/login">Log In </NavLink> </p>
      </div>
    </nav >
  );
};

export default Navbar;
