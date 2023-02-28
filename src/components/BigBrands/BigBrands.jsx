import React, { useEffect } from 'react';
import { useState } from 'react';
import { shuffle } from "lodash"
import Adidas from "../../images/Adidas.png";
import CocaCola from "../../images/CocaCola.png";
import Pepsi from "../../images/Pepsi.png";
import Starbucks from "../../images/Starbucks.png";

const logos = [{src: Adidas}, {src: CocaCola}, {src: Pepsi}, {src: Starbucks}];


const BigBrands = () => {
  const [visiblelogos, setVisiblelogos] = useState(logos);

  useEffect(()=>{
   setInterval(()=>{ const shuffledlogo = shuffle(visiblelogos);
    setVisiblelogos(shuffledlogo)}, 4000)
  }, [])


  return (
    <div className='mt-40 flex items-center p-2 justify-between'>
      <div className='flex items-center justify-center spac leading-10 p-20 bg-[#2F3FD4] w-1/2  rounded-r-3xl rounded-br-3xl'>
        <h2 className='text-5xl font-body text-white'>Big brands are <br/> already using NFTS</h2>
      </div>


      <div className='grid grid-cols-2 gap-4'>
      {visiblelogos.map((logo, index) => {
        return <img key={index} src={logo.src} className="h-32" alt="logo" />
      })}
      </div>
    </div> 
  )
}

export default BigBrands