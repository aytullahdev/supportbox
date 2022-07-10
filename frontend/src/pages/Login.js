import React, { useState } from "react";
import { BiLogIn } from "react-icons/bi";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";
const Login = () => {
  const dispatch = useDispatch();
  const [fromData, setFromData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = fromData;
  const handleSubmit = (e) => {
    e.preventDefault();
    if(email.length==0 || password.length==0){
       toast.warning("Please fillup all the input fields");
       return ;
    }else{
       const userData ={
         email,
         password
       }
       dispatch(login(userData));

    }
   
  };
  const onChange = (e) => {
    setFromData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="text-3xl font-thin text-center py-5 flex justify-center items-center space-x-4">
          <BiLogIn />
          <span> User Login</span>
        </div>
        <div className="flex flex-col justify-center  space-y-5 md:w-2/3 lg:w-1/3 mx-auto ">
          
          <div>
            <label class="block">
              <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Email
              </span>
              <input
                type="email"
                name="email"
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="you@example.com"
                onChange={onChange}
                required
              />
            </label>
          </div>
          <div>
            <label class="block">
              <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Password
              </span>
              <input
                type="password"
                name="password"
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Enter your password"
                onChange={onChange}
                required
              />
            </label>
          </div>
       
          <div>
            <button className="py-4 px-10 bg-blue-600 text-white font-semibold rounded hover:bg-blue-800">
              Login 
            </button>
          </div>
          <div>
            <Link to="/register" className=" underline text-sm text-blue-400">
              Create  an account?
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
