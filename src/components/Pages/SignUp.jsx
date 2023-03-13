import React from "react";
import Login from "../../images/Login.png";
import LogoImage from "../../images/LogoImage.png";
import LogoText from "../../images/LogoText.png";
// import Google from "../../images/GoogleLogin.png";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    // <div className="min-h-screen flex items-center justify-center bg-[#FFFAFA]">
    <div className="flex flex-row h-[100vh] space-x-12 max-sm:space-x-0 max-sm:flex max-sm:items-center max-sm:-mt-12">
      <div className="bg-[#F2F5FE] w-1/2 flex items-center justify-center max-sm:hidden">
        <img src={Login} className="h-[18rem]" alt="blur circle" />
      </div>
      <div className="bg-white p-6 w-1/2 mt-14 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:w-screen max-sm:pl-10 max-sm:pr-10">
        <div className="flex flex-row items-center space-x-3 max-sm:-ml-40">
          <img
            onClick={() => navigate("/")}
            className="cursor-pointer"
            src={LogoImage}
            alt="logo"
          />
          <img
            onClick={() => navigate("/")}
            className="cursor-pointer"
            src={LogoText}
            alt="logotext"
          />
        </div>
        <div className="mt-10 flex flex-col space-y-4">
          <div className="flex flex-col">
            <label className="text-black font-poppins text-sm">Email</label>
            <input
              type="email"
              className="border-[1px] border-gray-900 rounded-md h-[2.5rem] w-[22rem] pl-2 max-sm:w-[20rem]"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black font-poppins text-sm">Password</label>
            <input
              type="password"
              className="border-[1px] border-gray-900 rounded-md h-[2.5rem] w-[22rem] pl-2 max-sm:w-[20rem]"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black font-poppins text-sm">
              Confirm Password
            </label>
            <input
              type="password"
              className="border-[1px] border-gray-900 rounded-md h-[2.5rem] w-[22rem] pl-2 max-sm:w-[20rem]"
            />
          </div>
        </div>
        <button class="text-white font-bold px-4 py-2 rounded w-[22rem] mt-[2rem] cursor-pointer bg-[#2F3FD4] max-sm:w-[20rem]">
          SIGN UP
        </button>
        <div className="flex flex-row items-center w-[22rem] justify-between mt-[1rem] max-sm:w-[20rem]">
          <hr className="border-gray-400 border-1 w-[8rem] mt-[3px]" />
          <p className="font-poppins">or</p>
          <hr className="border-gray-400 border-1 w-[8rem] mt-[3px]" />
        </div>
        <div className="w-full flex flex-col items-start justify-center max-sm:flex max-sm:flex-col max-sm:items-center">
          <button class="flex items-center justify-center px-4 py-2 space-x-2 border-[1px]  text-gray-600 bg-stone-50 mt-[1rem] rounded-sm w-[22rem] border-black max-sm:w-[20rem]">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/235px-Google_%22G%22_Logo.svg.png"
              alt="Google logo"
              className="w-6 h-6 mr-2 font-poppins border-[#707070]"
            />
            Sign up with Google
          </button>
          <div className="flex flex-row items-center justify-center space-x-2 mt-[1rem]">
            <p className="text-md font-poppins text-black">Have a Account?</p>
            <p
              onClick={() => navigate("/login")}
              className="text-md font-poppins cursor-pointer text-[#2F3FD4]"
            >
              Log In
            </p>
          </div>
        </div>
      </div>
    </div>
    //    </div>
  );
};

export default SignUp;
