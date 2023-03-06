import React from "react";
import LogoImage from "../../images/LogoImage.png";
import LogoText from "../../images/LogoText.png";
import ButtonA from "../../images/ButtonA.png";
import ButtonB from "../../images/ButtonB.png";
import "../NavBar/NavBar.css";
import {useNavigate} from "react-router-dom";
import {Link} from "react-scroll";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex items-center justify-between w-full h-[74px] relative z-[2] main-nav">
      <div className="flex gap-3 ml-10 cursor-pointer main-logos">
        <img onClick={() => navigate('/')} className="h-8" src={LogoImage} alt="LogoImage" />
        <img onClick={() => navigate('/')} className="mt-1 h-4" src={LogoText} alt="LogoText" />
      </div>

      <ul className="flex gap-5 cursor-pointer hidden sm:flex sm:flex-row sm:items-center sm:justify-between">
        <li onClick={() => navigate('/casestudies')}>Case Studies</li>
        <li>API Documentation</li>
        <li>Pricing</li>
      </ul>

      <div className="flex justify-between mr-10 gap-2 cursor-pointer">
        <img src={ButtonA} alt="contact-button" className="hidden sm:flex"/>
        <img src={ButtonB} alt="signup-button" className="sign-up"/>
      </div>
    </nav>
  );
};

export default NavBar;
