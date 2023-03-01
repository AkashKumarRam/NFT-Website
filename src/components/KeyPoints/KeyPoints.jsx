import React from 'react';
import SingleKeyPoints from './SingleKeyPoints';


const KeyPoints = () => {
  return (
    <div className='mt-24 content-center'>
        <div className='flex flex-col justify-center items-center'>
            <h2 className=' text-5xl font-settings'>How it works?</h2>
           <div className='flex flex-col items-center justify-center'>
           <p className='mt-4 text-xl font-poppins'>Leverage on No-Code Deployment and effortless APIs</p>
            <p className=' text-xl font-poppins'>your most junior developer can implement.</p>
           </div>
        </div>
        <div>
           <SingleKeyPoints/>
        </div>
    </div>
  )
}

export default KeyPoints