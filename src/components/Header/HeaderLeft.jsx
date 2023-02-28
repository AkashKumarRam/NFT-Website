import React from 'react';
import BlueButton from "../../images/BlueButton.png";

const HeaderLeft = () => {
  return (
    <div className='mt-28 ml-24'>
       <h2 className='font-header text-indigo-700 text-3xl'>NFT Life-Cycle Management Platform</h2>
       <h1 className='font-body text-6xl'>Use NFT-Driven Customer <br />Engagement - at scale</h1> 
       <p className='font-hero text-indigo-600 mt-4 text-lg'>Leverage NFTs to transform customer engagement and <br /> establish a powerful community-driven brand presence with <br /> Hexatick's comprehensive NFT management solution.</p>
       <img className='w-1/5 mt-14 cursor-pointer' src={BlueButton} alt='try-for-free-button' />
       <p className='font-body text-xs mt-1'>No Credit Card needed.</p>
       <p className='mt-6 font-hero underline underline-offset-4 text-sm text-indigo-600 cursor-pointer'>Request Demo</p>
    </div>    
  )
}

export default HeaderLeft