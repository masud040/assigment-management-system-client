import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const Login = () => {
  const { socialLogin, loginUser } = useAuth();
  const [show, setShow] = useState(false);
  const handleSocialLogin = (provider) => {
    socialLogin(provider)
      .then(() => {
        toast.success("Login success");
      })
      .catch((err) => toast.error(err.message));
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then(() => {
        form.reset();
        toast.success("Login success");
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div className="relative flex flex-col rounded-xl text-gray-500 mb-8 w-[90%] my-8 md:w-[50%] bg-[#0d0929] mx-auto p-10">
      <h4 className="block font-sans text-4xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-[#e8aaff]">
        Login
      </h4>

      <form onSubmit={handleLogin} className="mt-8 mb-2 ">
        <div className="mb-4 flex flex-col gap-6">
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-[#131237] bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "
              name="email"
              required
              type="email"
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Email
            </label>
          </div>
          <div className="relative h-11 w-full min-w-[200px]">
            <div className="flex relative items-center">
              <input
                type={show ? "text" : "password"}
                className="peer h-full w-full rounded-md border bg-[#131237] border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                name="password"
                required
              />
              <span
                onClick={() => setShow(!show)}
                className="text-2xl absolute right-3 "
              >
                {show ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Password
            </label>
          </div>
        </div>
        <div className="inline-flex items-center">
          <label
            className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3"
            htmlFor="checkbox"
            data-ripple-dark="true"
          >
            <input
              type="checkbox"
              className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 
              bg-[#131237]
              before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
              id="checkbox"
              name="terms"
            />
            <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </label>
          <label
            className="mt-px cursor-pointer select-none font-light text-gray-500"
            htmlFor="checkbox"
          >
            <p className="flex items-center font-sans text-sm font-normal leading-normal text-gray-500 antialiased">
              Remember Me
            </p>
          </label>
        </div>
        <div className="bg-gradient-to-r w-full  rounded-md my-1 from-[#3c4fdf] via-[#6354e6] to-[#985cf0] p-[1px]">
          <button
            className=" block w-full select-none rounded-md bg-[#131237] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md  transition-all hover:shadow-lg hover:shadow-violet-900/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="submit"
            data-ripple-light="true"
          >
            Login
          </button>
        </div>

        <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-500 antialiased">
          New user?
          <Link
            className="font-medium text-blue-500 transition-colors "
            to={"/register"}
          >
            Register Here
          </Link>
        </p>
      </form>
      <div className="divider">OR</div>
      <div className="bg-gradient-to-r w-full  rounded-3xl my-1 from-[#3c4fdf] via-[#6354e6] to-[#985cf0] p-[1px] ">
        <Link
          onClick={() => handleSocialLogin(googleProvider)}
          className="flex  justify-center items-center gap-4 bg-[#131237] p-2 rounded-3xl"
        >
          <span>
            <FaGoogle className="text-2xl" />
          </span>
          <p className="font-semibold">Login With Google</p>
        </Link>
      </div>
      <div className="bg-gradient-to-r w-full  rounded-3xl my-1 from-[#3c4fdf] via-[#6354e6] to-[#985cf0] p-[1px] mt-5">
        <Link
          onClick={() => handleSocialLogin(githubProvider)}
          className="flex  justify-center items-center gap-4 bg-[#131237] p-2 rounded-3xl"
        >
          <span>
            <FaGithub className="text-2xl" />
          </span>
          <p className="font-semibold">Login With Github</p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
