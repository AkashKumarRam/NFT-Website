import React from 'react';
import Log from "../../images/Login.png";
// import LogoImage from "../../images/LogoImage.png";
// import LogoText from "../../images/LogoText.png";

const ResetPassword = () => {
  return (
    // <div className="h-[100vh] flex items-center justify-center bg-[#FFFAFA]">
    <div className="flex flex-row h-[100vh] space-x-12 max-sm:space-x-0 max-sm:flex max-sm:items-center max-sm:-mt-12 ">
      <div className="bg-[#F2F5FE] flex items-center justify-center w-1/2 max-sm:hidden">
        <div>
          <img src={Log} className="h-[18rem]" alt="blur circle" />
        </div>
      </div>
      <div className="bg-white p-6  w-1/2 max-sm:w-full max-sm:p-10 mt-14 max-sm:flex max-sm:flex-col max-sm:items-center">
       <div className='max-sm:flex max-sm:flex-col max-sm:items-start'>
       <h2 className='text-black text-2xl font-poppins'>Create new password</h2>
       </div>
        <p className="mt-[1rem] text-xs font-poppins text-gray-400 w-[22rem]">
          New password must be the different from the previously used password
        </p>

        <div className="mt-5 flex flex-col space-y-4">
          <div className="flex flex-col max-sm:pl-5 max-sm:pr-5">
            <label className="text-black text-md font-poppins cursor-pointer">
            Password
            </label>
            <input
              type="password"
              className="border-[1px] border-gray-900 rounded-md h-[2.5rem] w-[22rem] pl-2"
            />
          </div>
          <div className="flex flex-col max-sm:pl-5 max-sm:pr-5">
            <label className="text-black text-md font-poppins cursor-pointer">
               Confirm Password
            </label>
            <input
              type="password"
              className="border-[1px] border-gray-900 rounded-md h-[2.5rem] w-[22rem] pl-2"
            />
          </div>
        </div>
        <button class="text-white font-bold px-4 py-2 rounded w-[22rem] mt-[1rem] bg-[#2F3FD4]">
          Continue
        </button>

        <div className="flex flex-col items-center w-[22rem]  justify-center max-sm:flex max-sm:flex-col max-sm:items-center">
          <div className="flex flex-row items-center justify-center space-x-2 mt-[1rem]">
            <p className="text-md font-poppins text-black cursor-pointer">
              Don't have a Account?
            </p>
            <p className="text-md font-poppins text-[#2F3FD4] cursor-pointer">
              Sign Up
            </p>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};


export default ResetPassword