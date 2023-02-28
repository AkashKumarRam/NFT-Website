import React from "react";
import SingleFeatures from "./SingleFeatures";

const Features = () => {
  return (
    <div className="mt-24 content-center">
      <div className="ml-96">
        <h1 className="ml-[120px] text-5xl font-bold">Why use Hexatick?</h1>
        <p className="mt-4 ml-8 text-2xl">
          Create a unique brand experience with digital collectibles to
        </p>
        <p className="ml-40 text-xl">build
          long-term relationship with users</p>
      </div>
      <div>
        <SingleFeatures/>
      </div>
    </div>
  );
};

export default Features;
