import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const MenuList = ({ graySrc, blueSrc, text, toNavigate }) => {
    const navigate = useNavigate();
    const [imgSrc, setImgSrc] = useState(graySrc);

  const handleHover = () => {
    setImgSrc(blueSrc);
  };

  const handleLeave = () => {
    setImgSrc(graySrc);
  }


  return (
    <div className="bg-white hover:bg-blue-100 w-full p-2 flex flex-row items-center rounded-lg" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
      <img src={imgSrc} alt="dhasboard icon" className="w-6 h-6" />
      <span
        onClick={() => navigate(toNavigate)}
        className="ml-3 font-poppins hover:text-blue-600"
      >
      {text}
      </span>
    </div>
  );
};

export default MenuList;
