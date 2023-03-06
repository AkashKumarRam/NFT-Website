import React from "react";
import Button from "../../images/GetStartted.png";
import Line from "../../images/Line.png";
import Mask from "../../images/Mask group.png";

const BrandDetails = () => {
  return (
    <div className="mt-28 w-full flex items-center justify-center p-5">
      <div className="flex flex-row space-x-12 bg-[#F2F9FF] items-center justify-between h-[20rem] w-[64.4rem] max-sm:justify-center">
        <div className="ml-10 max-sm:ml-0">
          <div className="flex flex-col space-y-4 max-sm:text-center max-sm:justify-center">
            <h2 className="text-3xl font-settings">Make your</h2>
            <h2 className="text-3xl font-settings">brand stand out</h2>
            <img src={Line} alt="line" className="max-sm:hidden w-[20rem]" />
            <div className="mt-20 flex flex-row items-center space-x-2 max-sm:-mt-10 max-sm:flex-col max-sm:space-y-3 ">
              <input
                placeholder="Email ID"
                type="email"
                className="pl-4 w-[18rem] h-12  rounded-md border border-cyan-500 max-sm:w-[20rem]"
              />
              <button className="h-12 w-28 border border-white rounded-md bg-blue-800 text-white text-center ">
                Join Waitlist
              </button>
            </div>
            {/* <div className='flex flex-row items-center justify-between  max-sm:flex max-sm:flex-col max-sm:items-center max-sm:jusitfy-center max-sm:space-y-4'>
                <span className='font-bold text-4xl'>$39</span>
                <img src={Button} alt="button" className='h-14 cursor-pointer'/>
            </div> */}
          </div>
        </div>
        <img src={Mask} alt="button" className="h-[19rem] max-sm:hidden -mt-[1rem]" />
      </div>
    </div>
  );
};

export default BrandDetails;
