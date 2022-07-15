import React, { useState, useEffect } from "react";
import { BiLogIn } from "react-icons/bi";
import { toast } from "react-toastify";
import { Link,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../features/auth/authSlice";
const Login = () => {
  const dispatch = useDispatch();
  const { user, isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();
  const [fromData, setFromData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = fromData;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.length == 0 || password.length == 0) {
      toast.warning("Please fillup all the input fields");
      return;
    } else {
      const userData = {
        email,
        password,
      };
      dispatch(login(userData));
    }
  };
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess && user) {
      toast.success("Login Sucessfull");
      navigate("/");
    }
    dispatch(reset());
  }, [isError, user, isSuccess, message, dispatch]);
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
            <button className="py-4 px-10 bg-blue-600 text-white font-semibold rounded hover:bg-blue-800 flex space-x-2 text-sm" disabled={isLoading}>
              {isLoading && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 animate-spin mr-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                    clip-rule="evenodd"
                  />
                </svg>
              )}
              Login
            </button>
          </div>
          <div>
            <Link to="/register" className=" underline text-sm text-blue-400">
              Create an account?
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
