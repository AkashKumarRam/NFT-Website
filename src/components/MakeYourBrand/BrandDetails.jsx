import React from 'react';
import Button from "../../images/GetStartted.png";
import Line from "../../images/Line.png";
import Mask from "../../images/Mask group.png";

const BrandDetails = () => {
  return (
   <div className='mt-32 w-full flex items-center justify-center p-5'>
     <div className='flex flex-row space-x-12 bg-[#F2F9FF] items-center justify-between h-[20rem] w-[64.4rem]'>
       <div className='ml-10'>
       <div className='flex- felx-col space-y-4'>
            <h2 className='text-3xl font-settings'>Make your</h2>
            <h2 className='text-3xl font-settings'>brand stand out</h2>
            <img src={Line}  alt="line" />
            <div className='flex flex-row items-center justify-between'>
                <span className='font-bold text-4xl'>$39</span>
                <img src={Button} alt="button" className='h-14 cursor-pointer'/>
            </div>
        </div>
       </div>
        <img src={Mask} alt="button" className="h-[20rem]"/>
    </div>
   </div>
  )
}

export default BrandDetails