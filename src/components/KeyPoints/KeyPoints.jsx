import React from 'react';
import SingleKeyPoints from './SingleKeyPoints';


const KeyPoints = () => {
  return (
    <div className='mt-24 content-center'>
        <div className='ml-96'>
            <h2 className='ml-[120px] text-5xl font-bold'>How it works?</h2>
            <p className='mt-4 ml-8 text-2xl'>Leverage on No-Code Deployment and effortless APIs</p>
            <p className='ml-24 text-xl'>your most junior developer can implement.</p>
        </div>
        <div>
           <SingleKeyPoints/>
        </div>
    </div>
  )
}

export default KeyPoints