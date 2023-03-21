import React from "react";
import Odssy from "../../../images/Odyssey.png";
import { useNavigate } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";

const OdssyCaseStudy = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => navigate("/casestudydetail-starbucks")}
        className="flex items-center flex-row justify-center max-sm:hidden cursor-pointer"
      >
        <div className="shadow-lg border-[1px] border-[#CECECE] rounded-xl flex flex-row w-3/4 items-center h-60 p-20 mt-10">
          <img src={Odssy} alt="BlogImage" className="h-52 -ml-14" />
          <h2 className="font-body text-4xl ml-8">
            Brewing Up a New Marketing Strategy: Inside Starbucks' NFT
            Collection
          </h2>
          <div className="flex flex-col space-y-40 -mr-12">
            <div className="flex flex-row items-center space-x-2">
              {/* <img className="w-28" src={Eye} alt="eyeImage" /> */}
              <AiFillEye />
              <p>140k</p>
            </div>
            <p className="font-settings -mr-6 ">Read Full</p>
          </div>
        </div>
      </div>

      <div
        onClick={() => navigate("/casestudydetail-starbucks")}
        className="flex flex-col items-center justify-center space-y-5"
      >
        <div className="sm:hidden relative border-[1px] border-[#CECECE] rounded-2xl p-5 w-11/12 h-fit space-y-4 flex flex-col items-center justify-center shadow-lg">
          {/* <img className="absolute top-2 right-8" src={Eye} alt="eye" /> */}
          <img className="h-52 w-[492px]" src={Odssy} alt="odssy" />

          <p className="font-body text-xl text-center">
            Brewing Up a New Marketing Strategy: Inside Starbucks' NFT
            Collection
          </p>
          <div className="absolute bottom-5 left-6">
            <div className="flex flex-row items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-[1.5rem]"
              >
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                <path
                  fill-rule="evenodd"
                  d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                  clip-rule="evenodd"
                />
              </svg>

              <p className="text-lg">140k</p>
            </div>
          </div>
          <p className="font-settings text-xl relative left-28">Read Full</p>
        </div>
      </div>
    </>
  );
};

export default OdssyCaseStudy;
