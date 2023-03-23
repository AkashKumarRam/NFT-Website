import React from "react";
import NftBranding from "../../images/NFT Branding.png";
import YtButton from "../../images/YouTube Button.png";
import Adds from "../../images/Adds.png";
import { useNavigate } from "react-router-dom";

const RightBanner = () => {
  const navigate = useNavigate();
  return (
    <div>
      <img
        className="mr-40 h-[480px] mt-[10rem] max-sm:hidden"
        src={NftBranding}
        alt="BrandingButton"
      />
      <div className="sm:hidden p-4 bg-blue-700 max-sm:flex max-sm:space-y-5 max-sm:flex-col  max-sm:items-center max-sm:justify-center max-sm:p-5">
        <img className="sm:hidden" src={Adds} alt="BrandingButton" />
        <img
        onClick={() => navigate("/usecases")}
        src={YtButton}
        alt="YouTubeButton"
      />
      </div>
      <img
        onClick={() => navigate("/usecases")}
        className="mt-[-80px] ml-8 cursor-pointer max-sm:hidden"
        src={YtButton}
        alt="YouTubeButton"
      />
    </div>
  );
};

export default RightBanner;
