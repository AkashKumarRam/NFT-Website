import React from "react";
// import BlueButton from "../../images/BlueButton.png";
import "../Header/HeaderLeft.css";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const HeaderLeft = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-28 ml-24 main-header-left max-sm:flex max-sm:items-center max-sm:justify-center max-sm:mt-16 max-sm:ml-0">
      <h2 className="font-header text-indigo-700 text-3xl nft-text max-sm:text-2xl">
        No-Code NFT Management
      </h2>
      <h1 className="font-body text-6xl main-text max-sm:text-3xl max-sm:mt-[-1rem]">
        Use No-Code NFT API <br />
        to drive engagement
      </h1>
      <div className="max-sm:hidden">
        <p className="font-hero text-indigo-600 mt-4 text-lg sub-text max-sm:ml-11">
          Leverage NFTs to transform customer engagement and <br /> establish a
          powerful community-driven brand presence with <br /> Hexatick's
          comprehensive NFT management solution.
        </p>
      </div>

      {/* For Mobile */}
      <div className="sm:hidden mb-14">
        <p className="font-hero text-indigo-600 -mt-2 text-sm text-center">
          Leverage NFTs to transform customer engagement and establish a
          powerful community-driven brand presence
        </p>
      </div>
      {/* <img className='w-1/5 mt-14 cursor-pointer try-for-free' src={BlueButton} alt='try-for-free-button' />
       <p className='font-body text-xs mt-1 credit'>No Credit Card needed.</p> */}
      <div className="mt-20 flex flex-row items-center space-x-2 max-sm:-mt-10">
        {/* <input
          placeholder="Email ID"
          type="email"
          className="pl-4 w-[22rem] h-12 rounded-md border border-[#71BEFF] max-sm:w-[14rem]"
        />
        <button className="h-12 w-28 border border-white rounded-md bg-blue-800 text-white text-center ">
          Join Waitlist
        </button> */}
        <button
          onClick={() => navigate("/requestbeta")}
          className="border-[#2F3FD4] rounded-md border-2 p-2 bg-[#2F3FD4] text-white w-[14rem]"
        >
          Request for Beta Access
        </button>
      </div>
      <p className="text-black text-[0.8rem] max-sm:mt-[-1rem]">No credit card needed</p>

      {/* <p className='mt-6 font-hero underline underline-offset-4 text-sm text-indigo-600 cursor-pointer demo'>Request Demo</p> */}
      {/* <div className="mt-[2rem]">
        <Link
          to="form"
          spy={true}
          smooth={true}
          offset={10}
          duration={400}
          className="mt-12 max-sm:mt-20 font-hero underline underline-offset-4 text-sm text-indigo-600 cursor-pointer"
        >
          Contact Sales
        </Link>
      </div> */}
    </div>
  );
};

export default HeaderLeft;
