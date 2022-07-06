import React from "react";
import { FaBuromobelexperte } from "react-icons/fa";
import { FiUserCheck, FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="">
        <div className=" flex space-x-1 justify-start items-center lg:space-x-4">
          <FaBuromobelexperte className="text-4xl text-lg-4xl text-orange-400" />
          <Link to="/" className="lg:text-xl text-md font-semibold">
            Session Box
          </Link>
        </div>
      </div>
      <div className="flex space-x-3 justify-end">
        <div className=" flex space-x-1 hover:bg-neutral-300 px-2 justify-center items-center rounded cursor-pointer transition-bg ease-in duration-1000">
          <FiUserCheck className="text-2xl text-gray-400" />
          <Link to="/login" className="text-md font-semibold">
            Login
          </Link>
        </div>
        <div className=" flex space-x-1 hover:bg-neutral-300 px-2 justify-center items-center rounded cursor-pointer transition-bg ease-in duration-1000">
          <FiLogOut className="text-2xl text-gray-400" />
          <Link to="/register" className="text-md font-semibold">
            Registration
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
