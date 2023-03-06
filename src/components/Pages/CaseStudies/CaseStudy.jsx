import React from 'react';
import Cola from "../../../images/BlogImage.png";
import Eye from "../../../images/Eye.png";

const CaseStudy = () => {
  return (
    <div className='flex items-center flex-col'>
        <div className='border-[1px] border-slate-900 rounded-md flex flex-row w-3/4 items-center h-60 p-20 mt-10'>
            <img src={Cola} alt='BlogImage' className='h-52 -ml-14' />
            <h2 className='font-body text-4xl ml-8'>From Bottles to Blockchain: Coca-Cola's NFT Marketing Experiment</h2>
            <div className='flex flex-col space-y-40'>
                <img className='w-28' src={Eye} alt="eyeImage"/>
                <p className='font-settings -mr-6'>Read Full</p>
            </div>
        </div>
    </div>
  )
}

export default CaseStudy