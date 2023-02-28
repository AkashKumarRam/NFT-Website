import React from "react";
import { useState, useEffect } from "react";
import { BoxImage } from "../../data/data";
import Information from "../../images/Website Information.png";
import BlueButton from "../../images/BlueButton.png";

const LeftBanner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomNumber = Math.floor(
        Math.random() * (BoxImage.length - 1) + 0
      );
      setIndex(randomNumber);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="ml-40">
      <div className="">
        <h2 className="text-4xl font-body">It can be a</h2>
        <h1 className="font-body text-5xl mt-1 text-blue-600">{BoxImage[index].title}</h1>
        <img
          className="h-40 mt-4"
          src={BoxImage[index].image}
          alt={BoxImage[index].title}
        />
      </div>
      <img className="mt-8" src={Information} alt="" />
      <img className="mt-6 cursor-pointer h-14" src={BlueButton} alt="" />
    </div>
  );
};

export default LeftBanner;
