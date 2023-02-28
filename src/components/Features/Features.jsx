import React from "react";
import SingleFeatures from "./SingleFeatures";

const Features = () => {
  return (
    <div className="mt-44 content-center">
      <div className="ml-96">
        <h1 className="ml-[120px] text-5xl font-settings">Why use Hexatick?</h1>
        <p className="mt-4 ml-8 font-poppins text-xl">
          Create a unique brand experience with digital collectibles to
        </p>
        <p className="ml-40 font-poppins text-xl">build
          long-term relationship with users</p>
      </div>
      <div>
        <SingleFeatures/>
      </div>
    </div>
  );
};

export default Features;
