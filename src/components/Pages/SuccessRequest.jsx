import React from "react";
import Log from "../../images/Login.png";
import LogoImage from "../../images/LogoImage.png";
import LogoText from "../../images/LogoText.png";
import { useNavigate } from "react-router-dom";

const SuccessRequest = () => {
  const navigate = useNavigate();
  return (
    // <div className="h-[100vh] flex items-center justify-center bg-[#FFFAFA]">
    <div className="flex flex-row h-[100vh] space-x-12 max-sm:space-x-0 max-sm:flex max-sm:items-center max-sm:-mt-12 ">
      <div className="bg-[#F2F5FE] flex items-center justify-center w-1/2 max-sm:hidden">
        <div>
          <img src={Log} className="h-[18rem]" alt="blur circle" />
        </div>
      </div>
      <div className="bg-white p-6 w-1/2  flex flex-col justify-center max-sm:flex max-sm:flex-col max-sm:items-center max-sm:w-full">
        <div className="flex flex-row items-center space-x-3 w-full max-sm:flex max-sm:flex-row max-sm:items-start max-sm:-ml-2">
          <img onClick={() => navigate("/")} src={LogoImage} alt="logo" />
          <img onClick={() => navigate("/")} src={LogoText} alt="logotext" />
        </div>
        <div className="mt-[2rem] max-sm:items-start max-sm:w-screen max-sm:pl-5 max-sm:pr-5 w-[22rem] space-y-5">
          <h1 className="text-lg text-[#736A6A] font-poppins">
            Thank You for showing interest in gaining the Beta Access
          </h1>
          <p className="text-sm text-gray-400 font-poppins">
            Our representative will contact you understand the proposed usecase
            and grant beta access.
          </p>

          <p className="text-sm text-gray-400 font-poppins">
            Incase of urgency you can also contact us
          </p>
        </div>
        <div className="flex flex-row space-x-5 mt-5 ">
          <button class="text-white font-poppins px-4 py-2 rounded mt-[1rem] w-[9rem] bg-[#2F3FD4]">
            Email US
          </button>

          <button class="text-white font-poppins px-4 py-2 rounded mt-[1rem] bg-[#2F3FD4] w-[9rem]">
            Call US
          </button>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default SuccessRequest;
