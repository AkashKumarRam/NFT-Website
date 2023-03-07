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
    <nav className="flex items-center justify-between w-full h-[74px] relative z-[2] main-nav pr-10 pl-10">
      <div className="flex gap-3 cursor-pointer main-logos">
        <img onClick={() => navigate('/')} className="h-8" src={LogoImage} alt="LogoImage" />
        <img onClick={() => navigate('/')} className="mt-1 h-4" src={LogoText} alt="LogoText" />
      </div>

      <ul className="flex gap-5 cursor-pointer hidden sm:flex sm:flex-row sm:items-center sm:justify-between">
        <li onClick={() => navigate('/casestudies')}>Case Studies</li>
        <li>API Documentation</li>
        <li onClick={() => navigate('/pricing')}>Pricing</li>
      </ul>

      <div className="flex flex-row  cursor-pointer space-x-5">
        {/* <img src={ButtonA} alt="contact-button" className="hidden sm:flex"/> */}
        <Link to='form' spy={true} smooth={true} offset={10} duration={400} className="border-[#2F3FD4] rounded-md border-2 p-2 text-[#2F3FD4] font-body max-sm:hidden">Contact Sales</Link>
        <button className="border-[#2F3FD4] rounded-md border-2 p-2 bg-[#2F3FD4] text-white w-28">Sign Up</button>
        {/* <img src={ButtonB} alt="signup-button" className="sign-up"/> */}
      </div>
     
    </nav>
  );
};

export default NavBar;
