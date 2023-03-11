import React from "react";

const AccountSetupStep2 = () => {
  return (
    <div className="p-20 flex flex-col items-center justify-center -mt-16">
      <div className="w-full">
        <h2 className="text-xl">Account Set Up(2/3)</h2>
        <div className="w-full bg-gray-100 h-3 flex flex-row items-start justify-start mt-[1rem]">
          <div className="h-3 bg-blue-800 w-2/3"></div>
        </div>
      </div>

      <div className="mt-[3rem]">
        <h2 className="text-3xl font-poppins">
          Tell us a bit about your brand
        </h2>
        <div>
          <div className="flex flex-row items-center  space-x-5 mt-[2rem]">
            <div className="flex flex-col">
              <label className="text-black text-md font-poppins cursor-pointer">
                First Name
              </label>
              <input
                type="text"
                className="border-[1px] border-gray-900 rounded-md h-[2.5rem] w-[22rem] pl-2"
              />
            </div>
          </div>
          <div className="flex flex-row  items-end space-x-5 mt-[2rem]">
            <div className="flex flex-col">
              <label className="text-black text-md font-poppins cursor-pointer">
                Brand Domain
              </label>
              <input
                type="text"
                className="border-[1px] border-gray-900 rounded-md h-[2.5rem] w-[22rem] pl-2"
              />
            </div>
            <div className="flex flex-col">
              <button className="text-white font-poppins bg-red-600 p-2 text-center rounded-md">
                Verify your work-email
              </button>
            </div>
          </div>
        </div>
        <p className="text-xs font-poppins text-gray-400 mt-[1rem]">Prevent others from claiming your brand domain by verifying your work-email.</p>
        <button className="mt-6 border-[#2F3FD4] rounded-md border-2 p-2 bg-[#2F3FD4] text-white w-28 max-sm:hidden">
          NEXT
        </button>
      </div>
    </div>
  );
};

export default AccountSetupStep2;
