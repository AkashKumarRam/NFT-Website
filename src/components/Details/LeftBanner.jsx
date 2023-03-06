import React from "react";
import { useState, useEffect } from "react";
import { BoxImage } from "../../data/data";
import Information from "../../images/Website Information.png";
import BlueButton from "../../images/BlueButton.png";

const LeftBanner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomNumber = Math.floor(
        Math.random() * (BoxImage.length - 1) + 0
      );
      setIndex(randomNumber);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="ml-40 max-sm:ml-0 max-sm:p-4 mt-[10rem]">
      <div className="max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center">
        <h2 className="text-4xl font-body max-sm:text-3xl">It can be a</h2>
        <h1 className="font-body text-5xl mt-1 text-blue-600 max-sm:text-3xl">{BoxImage[index].title}</h1>
        <img
          className="h-40 mt-4"
          src={BoxImage[index].image}
          alt={BoxImage[index].title}
        />
      </div>
      <div className='mt-20 flex flex-col items-start  space-x-0 space-y-2 max-sm:-mt-10 max-sm:hidden'>
        <input placeholder="Email ID" type="email" className="pl-4 w-[22rem] h-12 rounded-md border border-cyan-500 max-sm:w-[14rem]"  />
        <button className='h-12 w-28 border border-white rounded-md bg-blue-800 text-white text-center '>Join Waitlist</button>
       </div>
       <img className="mt-8 sm:hidden" src={Information} alt="" />
      {/* <img className="mt-6 cursor-pointer h-14 max-sm:hidden" src={BlueButton} alt="" />  */}
    </div>
  );
};

export default LeftBanner;
