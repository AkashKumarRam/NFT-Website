import React from "react";

const PendingVerification = () => {
  return (
    <div className="p-20 flex flex-col items-center justify-center -mt-16">
      <div className="w-full">
        <h2 className="text-xl">Work Email Verification</h2>
        <div className="w-full bg-gray-100 h-3 flex flex-row items-start justify-start mt-[1rem]">
          <div className="h-3 bg-blue-800 w-full"></div>
        </div>
      </div>

      <div className="mt-[3rem] w-1/2 ml-[-2rem] items-start">
        <h2 className="text-3xl font-poppins">Verify Work Email</h2>

        <p className="text-lg font-poppins text-slate-900 mt-[1rem]">
            Please click verification link is sent to debapriyo@hexatick.com
        </p>
        <button className="mt-6 border-[#2F3FD4] rounded-md border-2 p-2 bg-[#2F3FD4] text-white w-28 max-sm:hidden">
            Continue
        </button>
      </div>
    </div>
  );
};

export default PendingVerification;
