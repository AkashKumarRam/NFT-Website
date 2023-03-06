import React from 'react';
import BlueButton from "../../images/BlueButton.png";
import "../Header/HeaderLeft.css";

const HeaderLeft = () => {
  return (
    <div className='mt-28 ml-24 main-header-left'>
       <h2 className='font-header text-indigo-700 text-3xl nft-text'>NFT Life-Cycle Management Platform</h2>
       <h1 className='font-body text-6xl main-text'>Use NFT-Driven Customer <br />Engagement - at scale</h1> 
       <p className='font-hero text-indigo-600 mt-4 text-lg sub-text'>Leverage NFTs to transform customer engagement and <br/>establish a powerful community-driven brand presence with<br/>Hexatick's comprehensive NFT management solution.</p>
       {/* <img className='w-1/5 mt-14 cursor-pointer try-for-free' src={BlueButton} alt='try-for-free-button' />
       <p className='font-body text-xs mt-1 credit'>No Credit Card needed.</p> */}
       <div className='mt-20 flex flex-row items-center space-x-2 max-sm:-mt-10'>
        <input placeholder="Email ID" type="email" className="pl-4 w-[22rem] h-12 rounded-md border border-cyan-500 max-sm:w-[14rem]"  />
        <button className='h-12 w-28 border border-white rounded-md bg-blue-800 text-white text-center '>Join Waitlist</button>
       </div>
       <p className='text-black text-[0.8rem] max-sm:hidden'>Join Waiting list</p>

       {/* <p className='mt-6 font-hero underline underline-offset-4 text-sm text-indigo-600 cursor-pointer demo'>Request Demo</p> */}
       <p className='mt-6 max-sm:mt-20 font-hero underline underline-offset-4 text-sm text-indigo-600 cursor-pointer demo'>Contact Sales</p>
    </div>    
  )
}

export default HeaderLeft