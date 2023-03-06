import React from "react";
import SingleKeyPoints from "./SingleKeyPoints";

const KeyPoints = () => {
  return (
    <div className="mt-24 content-center">
      <div className="flex flex-col justify-center items-center">
        <h2 className=" text-5xl font-settings max-sm:text-4xl">
          How it works?
        </h2>
        <div className="flex flex-col items-center justify-center max-sm:text-center">
          <p className="mt-4 text-xl font-poppins max-sm:text-md max-sm:hidden">
            Leverage on No-Code Deployment and effortless APIs
          </p>
          <p className=" text-xl font-poppins max-sm:text-md max-sm:hidden">
            your most junior developer can implement.
          </p>
          <p className="mt-4 text-xl font-poppins max-sm:text-md text-center sm:hidden max-sm:p-3">
            Leverage on No-Code Deployment and effortless APIs your most junior developer can implement.
          </p>
         
        </div>
      </div>
      <div>
        <SingleKeyPoints />
      </div>
    </div>
  );
};

export default KeyPoints;
