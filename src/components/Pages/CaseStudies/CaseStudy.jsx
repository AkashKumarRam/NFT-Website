import React from "react";
import Cola from "../../../images/BlogImage.png";
// import Eye from "../../../images/Eye.png";
import { useNavigate } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";

const CaseStudy = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => navigate("/casestudydetail-cococola")}
        className="flex items-center flex-row justify-center max-sm:hidden cursor-pointer"
      >
        <div className="border-[1px] shadow-lg border-slate-900 rounded-xl flex flex-row w-3/4 items-center h-60 p-20 mt-10">
          <img src={Cola} alt="BlogImage" className="h-52 -ml-14" />
          <h2 className="font-body text-4xl ml-8">
            From Bottles to Blockchain: Coca-Cola's NFT Marketing Experiment
          </h2>
          <div className="flex flex-col space-y-40 -mr-12">
            <div className="flex flex-row items-center space-x-2">
              {/* <img className="w-28" src={Eye} alt="eyeImage" /> */}
              <AiFillEye />
              <p>144k</p>
            </div>
            <p className="font-settings -mr-6 ">Read Full</p>
          </div>
        </div>
      </div>

      <div
        onClick={() => navigate("/casestudydetail-cococola")}
        className="flex flex-col items-center justify-center space-y-5"
      >
        <div className="sm:hidden relative border-[1px] border-slate-900 rounded-2xl p-5 w-11/12 h-fit space-y-4 flex flex-col items-center justify-center shadow-lg">
          {/* <img className="absolute top-2 right-8" src={Eye} alt="eye" /> */}
          <img className="h-52 w-[492px]" src={Cola} alt="cocacla" />

          <p className="font-body text-xl text-center">
            From Bottles to Blockchain: Coca-Cola's NFT Marketing Experiment
          </p>
          {/* <div className="flex flex-row items-center ">
            <AiFillEye />
            <p>144k</p>
          </div> */}
          <p className="font-settings text-xl relative left-28">Read Full</p>
        </div>
      </div>
    </>
  );
};

export default CaseStudy;
