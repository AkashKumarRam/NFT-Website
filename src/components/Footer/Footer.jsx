import React from "react";
import BlackLogo from "../../images/BlackLogo.png";
import Facebook from "../../images/Facebook.png";
import Instagram from "../../images/Instagram.png";
import Twitter from "../../images/Twitter.png";
import Linkedin from "../../images/LinkedIn.png";
import {useNavigate} from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-20 bg-[#F2F9FF] flex justify-center space-x-72 h-72 max-sm:space-x-0 max-sm:h-auto max-sm:flex-col max-sm:items-center max-sm:justify-center">
      <div className="space-y-8 mt-16 max-sm:text-center  max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center">
        <img onClick={() => navigate('/')} className="cursor-pointer" src={BlackLogo} alt="Footer-logo" />
        <p className="font-poppins">
          Be creative with your brand’s NFT <br /> while we handle the boring
          stuff
        </p>
       <div className="flex cursor-pointer max-sm:hidden">
          <img src={Instagram} alt="Intagram-Logo" />
          <img src={Linkedin} alt="LinkedIn-Logo" />
          <img src={Facebook} alt="Facebook-Logo" />
          <img src={Twitter} alt="Twitter-Logo" />
        </div> 
      </div>

      <div className="space-y-4 mt-16 max-sm:text-center max-sm:mt-10">
        <h2 className="font-poppins text-lg font-bold">Get in touch</h2>
        <p className="font-poppins">contact@hexatick.com</p>
        <p className="font-poppins">
          734 Broadway, Floor 5 <br /> New York, NY 10003
        </p>
      </div>

      <div className="flex cursor-pointer sm:hidden max-sm:flex max-sm:flex-row max-sm:items-center max-sm:justify-center max-sm:space-x-4 max-sm:mt-10 max-sm:pb-8">
          <img src={Instagram} alt="Intagram-Logo" />
          <img src={Linkedin} alt="LinkedIn-Logo" />
          <img src={Facebook} alt="Facebook-Logo" />
          <img src={Twitter} alt="Twitter-Logo" />
        </div>

      <div className="mt-16 max-sm:hidden">
        <h2 className="font-poppins text-lg font-bold mb-4">Jump To</h2>
        <ul className="font-poppins cursor-pointer space-y-1">
          <li onClick={() => navigate('/')}>Home</li>
          <li>UseCases</li>
          <li>Pricing</li>
          <li>About us</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
