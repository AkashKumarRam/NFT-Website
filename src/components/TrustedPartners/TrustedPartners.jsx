import React from "react";
import TrustedPartner from "../../images/Trusted Partners.png";
import "../TrustedPartners/TrustedPartner.css";

const TrustedPartners = () => {
  return (
    <div className="ml-32 mr-32 mt-[90px] mb-28 max-sm:hidden hidden">
        <img src={TrustedPartner} alt="" className="trusted-partner"/>
    </div>
  );
};

export default TrustedPartners;
