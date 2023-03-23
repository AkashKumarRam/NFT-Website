import React from "react";
import SingleFeatures from "./SingleFeatures";

const Features = () => {
  return (
    <div className="mt-44 content-center max-sm:mt-[4rem] max-sm:p-4">
      <div className=" flex items-center flex-col justify-center max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center">
        <h1 className="text-5xl font-settings max-sm:text-4xl">
          Why use Hexarare?
        </h1>
        <div className="max-sm:text-center">
          <p className="mt-4 ml-8 font-poppins text-xl max-sm:ml-0 max-sm:text-md max-sm:hidden">
            Create a unique brand experience with digital collectibles to
          </p>
          <p className="ml-[8rem] font-poppins text-xl max-sm:ml-0 max-sm:text-md max-sm:hidden">
            build long-term relationship with users
          </p>
          <p className="mt-4 font-poppins text-lg sm:hidden text-center">
            Create a unique brand experience with digital collectibles to build
            long-term relationship with users
          </p>
        </div>
      </div>
      <div>
        <SingleFeatures />
      </div>
    </div>
  );
};

export default Features;
