import React, { useEffect } from "react";
import { useState } from "react";
import { shuffle } from "lodash";
import Adidas from "../../images/Adidas.png";
import CocaCola from "../../images/CocaCola.png";
import Pepsi from "../../images/Pepsi.png";
import Starbucks from "../../images/Starbucks.png";
import Gucci from "../../images/Gucci.png";
import HM from "../../images/HM.png";
import KFC from "../../images/KFC.png";
import Levis from "../../images/Levis.png";
import MacD from "../../images/MacD.png";
import Nestle from "../../images/Nestle.png";
import Marqee from "../BigBrands/Marqee.jsx";

const logos = [
  { src: Adidas },
  { src: CocaCola },
  { src: Pepsi },
  { src: Starbucks },
  { src: HM },
  { src: KFC },
  { src: Levis },
  { src: MacD },
  { src: Gucci },
  { src: Nestle },
];

const BigBrands = () => {
  const [visiblelogos, setVisiblelogos] = useState(shuffle(logos).slice(0, 4));

  useEffect(() => {
    setInterval(() => {
      const shuffledlogo = shuffle(shuffle(logos).slice(0, 4));
      setVisiblelogos(shuffledlogo.slice(0, 4));
    }, 3000);
  }, []);

  return (
    <>
      <div className="mt-28 flex items-center justify-between max-sm:mt-[-5rem] max-sm:flex-col">
        <div className="flex items-center justify-center  leading-10 p-20 bg-[#2F3FD4] w-1/2 max-sm:w-full max-sm:rounded-none max-sm:h-20 max-sm:p-4  rounded-r-3xl rounded-br-3xl">
          <h2 className="text-5xl font-body text-white max-sm:text-[1.3rem]">
            Big brands are already using NFTs
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 max-sm:hidden">
          {visiblelogos.map((logo, index) => {
            return (
              <img key={index} src={logo.src} className="h-32" alt="logo" />
            );
          })}
        </div>
      </div>
      <div className="sm-hidden max-sm:visible">
        <Marqee />
      </div>
    </>
  );
};

export default BigBrands;
