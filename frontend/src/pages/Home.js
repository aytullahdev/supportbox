import React from "react";
import { BiCloudUpload, BiQuestionMark } from "react-icons/bi";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Home = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className=" font-bold text-center py-10">
      <div>
        <h1 className="text-xl lg:text-3xl text-center text-gray-700">
          Do you need any support for coding?
        </h1>
        <p className="text-xl text-gray-400 py-2">Please create a ticket now</p>
      </div>
      <div className="flex flex-col space-y-5">
        <NavLink to="/new-ticket" className="flex text-xl justify-center items-center font-normal space-x-5 border border-1 border-gray-600 p-2 w-2/3 lg:w-1/3 mx-auto  cursor-pointer hover:bg-slate-300">
            <BiQuestionMark className="bg-gray-400 rounded-full text-white "/> <span>Create a Session</span>
        </NavLink>
        <NavLink to="/my-tickets"  className="flex text-xl justify-center items-center font-normal space-x-5 border border-1 border-gray-600 p-2 w-2/3 lg:w-1/3 mx-auto cursor-pointer hover:bg-slate-300">
            <BiCloudUpload className="bg-gray-400 rounded-full text-white "/> <span>View my Sessions</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
