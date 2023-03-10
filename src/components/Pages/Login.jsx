import React from "react";
import Log from "../../images/Login.png";
import LogoImage from "../../images/LogoImage.png";
import LogoText from "../../images/LogoText.png";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
  return (
    // <div className="h-[100vh] flex items-center justify-center bg-[#FFFAFA]">
      <div className="flex flex-row h-[100vh] space-x-12 max-sm:space-x-0 max-sm:flex max-sm:items-center max-sm:-mt-12 ">
        <div className="bg-[#F2F5FE] flex items-center justify-center w-1/2 max-sm:hidden">
          <div>
            <img src={Log} className="h-[18rem]" alt="blur circle" />
          </div>
        </div>
        <div className="bg-white p-6 w-1/2 mt-14 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:w-full">
          <div className="flex flex-row items-center space-x-3 w-full max-sm:ml-[1rem] max-sm:flex max-sm:flex-row max-sm:items-start">
            <img onClick={() => navigate('/')} src={LogoImage} alt="logo"/>
            <img onClick={() => navigate('/')} src={LogoText} alt="logotext" />
          </div>
          <div className="mt-[2rem] max-sm:items-start max-sm:w-screen max-sm:pl-5 max-sm:pr-5">
            <h1 className="font-bold text-2xl font-poppins">Hey, Innovator</h1>
            <p className="text-sm text-gray-400 font-poppins" >Enter the information you entered while registering</p>
          </div>
          <div className="mt-5 flex flex-col space-y-4 ">
            <div className="flex flex-col max-sm:pl-5 max-sm:pr-5">
              <label className="text-black text-md font-poppins cursor-pointer">Email</label>
              <input
                type="email"
                className="border-[1px] border-gray-900 rounded-md h-[2.5rem] w-[22rem] pl-2"
              />
            </div>
            <div className="flex flex-col max-sm:pl-5 max-sm:pr-5">
              <label className="text-black text-md font-poppins cursor-pointer">Password</label>
              <input
                type="password"
                className="border-[1px] border-gray-900 rounded-md h-[2.5rem] w-[22rem] pl-2"
              />
            </div>
          </div>
          <div className="w-full flex-row mt-[0.5rem] items-end max-sm:flex max-sm:items-end">
            <p className="text-sm text-end font-poppins cursor-pointer w-[22rem]">Forgot Password?</p>
          </div>
          <button class="text-white font-bold px-4 py-2 rounded w-[22rem] mt-[1rem] bg-[#2F3FD4]">
            LOGIN
          </button>
          <div className="flex flex-row items-center w-[22rem] justify-between mt-[1rem]">
            <hr className="border-gray-400 border-1 w-[8rem] mt-[3px]" />
            <p className="text-gray-400 font-poppins">or</p>
            <hr className="border-gray-400 border-1 w-[8rem] mt-[3px]" />
          </div>
          <div className="w-full flex flex-col items-start justify-center max-sm:flex max-sm:flex-col max-sm:items-center">
            <button class="flex items-center justify-center px-4 py-2 space-x-2 border-[1px]  text-gray-600 bg-stone-50 mt-[1rem] rounded-sm w-[22rem] border-black max-sm:pl-5 max-sm:pr-5">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/235px-Google_%22G%22_Logo.svg.png"
                alt="Google logo"
                className="w-6 h-6 mr-2 cursor-pointer"
              />
              Sign up with Google
            </button>
            <div className="flex flex-row items-center justify-center space-x-2 mt-[1rem]">
              <p className="text-md font-poppins text-black cursor-pointer">
                Don't have a Account?
              </p>
              <p onClick={() => navigate('/signup')} className="text-md font-poppins text-[#2F3FD4] cursor-pointer">Sign Up</p>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Login;
