import React from 'react';
import Launch from "../../images/Launch.png";
import Paste from "../../images/Paste.png";
import Copy from "../../images/Copy.png";

const SingleKeyPoints = () => {
  return (
    <div className='mt-10 flex items-center justify-between ml-24 mr-24'>
        <div className='mt-10'>
            <img className='h-64' src={Launch} alt='Launch' />
            <h3 className='font-header text-3xl mt-5 ml-2'>Deploy NFT in Click</h3>
            <p className='ml-1 text-lg mt-2'>Just add collection details and click </p>
            <p className='ml-24 text-lg'>deploy</p>
        </div>

        <div className='mt-2'>
            <img className='h-64' src={Copy} alt='Launch' />
            <h3 className='font-header text-3xl mt-5 ml-2'>Copy API Endpoint</h3>
            <p className='ml-1 text-lg mt-2'>Copy API Endpoint and API Key from</p>
            <p className='ml-24 text-lg'>the dashboard</p>
        </div>

        <div className=''>
            <img className='h-64' src={Paste} alt='Launch' />
            <h3 className='font-header text-3xl mt-5 ml-2'>Paste in your code</h3>
            <p className='ml-1 text-lg mt-2'>Call APIs from your business logics to</p>
            <p className='ml-24 text-lg'>distribute NFTs</p>
        </div>
    </div>
  )
}

export default SingleKeyPoints