import React from 'react';
import Launch from "../../images/Launch.png";
import Paste from "../../images/Paste.png";
import Copy from "../../images/Copy.png";

const SingleKeyPoints = () => {
  return (
    <div className='mt-10 flex flex-row space-x-14 items-center justify-center p-6'>
        <div className='flex flex-col items-center justify-between space-y-2'>
            <img className='h-60' src={Launch}  alt='Launch' />
           <div className='flex flex-col items-center justify-center'>
           <h3 className='font-header text-2xl mt-5'>Deploy NFT in Click</h3>
            <p className=' text-lg mt-2'>Just add collection details and click </p>
            <p className=' text-lg'>deploy</p>
           </div>
        </div>
        <div className='flex flex-col items-center justify-between space-y-2'>
            <img className='h-60' src={Copy}  alt='Launch' />
           <div className='flex flex-col items-center justify-center'>
           <h3 className='font-header text-2xl mt-5'>Copy API Endpoint</h3>
            <p className=' text-lg mt-2'>Copy API Endpoint and API Key from</p>
            <p className=' text-lg'>the dashboard</p>
           </div>
        </div>
        <div className='flex flex-col items-center justify-between space-y-2'>
            <img className='h-60' src={Paste}  alt='Launch' />
           <div className='flex flex-col items-center justify-center'>
           <h3 className='font-header text-2xl mt-5'>Paste in your code</h3>
            <p className='text-lg mt-2'>Call APIs from your business logics to </p>
            <p className=' text-lg'>distribute NFTs</p>
           </div>
        </div>
        
    </div>
  )
}

export default SingleKeyPoints