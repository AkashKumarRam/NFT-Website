import React from "react";
import LogoImage from "../../images/LogoImage.png";
import LogoText from "../../images/LogoText.png";
import ButtonA from "../../images/ButtonA.png";
import ButtonB from "../../images/ButtonB.png";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between w-full h-[74px] relative z-[2]">
      <div className="flex gap-3 ml-10 cursor-pointer">
        <img className="h-8" src={LogoImage} alt="LogoImage" />
        <img className="mt-1 h-4" src={LogoText} alt="LogoText" />
      </div>

      <ul className="flex gap-5 cursor-pointer">
        <li>Case Studies</li>
        <li>API Documentation</li>
        <li>Pricing</li>
      </ul>

      <div className="flex justify-between mr-10 gap-2 cursor-pointer">
        <img src={ButtonA} alt="contact-button" />
        <img src={ButtonB} alt="signup-button" />
      </div>
    </nav>
  );
};

export default NavBar;
