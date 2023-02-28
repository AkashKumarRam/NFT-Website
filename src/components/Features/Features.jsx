import React from "react";
import SingleFeatures from "./SingleFeatures";

const Features = () => {
  return (
    <div className="mt-44 content-center">
      <div className=" flex items-center flex-col justify-center">
        <h1 className="text-5xl font-settings">Why use Hexatick?</h1>
       <div>
       <p className="mt-4 ml-8 font-poppins text-xl">
          Create a unique brand experience with digital collectibles to
        </p>
        <p className="ml-40 font-poppins text-xl">build
          long-term relationship with users</p>
       </div>
      </div>
      <div>
        <SingleFeatures/>
      </div>
    </div>
  );
};

export default Features;
