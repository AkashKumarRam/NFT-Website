import React from "react";
import { Row1, Row2 } from "../../data/data";
import "../Header/HeaderRight.css";

const HeaderRight = () => {
  return (
    <div className="hero-images mr-20">
      <div className="marquee marquee-up">
        {Row1.map((el) => (
          <div className="marquee-images">
            <img className="h-32" src={el} alt="" />
          </div>
        ))}
      </div>
      <div className="marquee marquee-down">
        {Row2.map((el) => (
          <div className="marquee-images">
            <img className="h-32" src={el} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderRight;
