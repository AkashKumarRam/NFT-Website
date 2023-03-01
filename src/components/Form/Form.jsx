import React from 'react';
import Vector from "../../images/Vector.png";
import BrownButton from "../../images/BrownButton.png";

const Form = () => {
  return (
    <div className='p-5'>
        <div className='flex flex-row items-center space-x-5 justify-center'>
            <img src={Vector} alt="vector boy" className='h-[20rem]' />
            <form className='flex flex-col space-y-5 p-3 items-center justify-center border-black-600 border-solid border-2'>
                <div className='flex flex-col space-y-5 items-start'>
                <h2 className='text-3xl font-body font-bold'>We are taking custom orders</h2>
                <p className='text-sm'>Our sales team always active to support enterprises for their <br/>custom branded nft requirement</p>
                </div>
                <div className='flex flex-col space-y-3  items-start'>
                    <div className='flex flex-row items-start space-x-10'>
                        <input type="text" placeholder='First name' className='pd-3 w-1/2 border border-purple-300 border-solid border-1 p-2' />
                        <input type="text" placeholder="last Name" className='pd-3 w-1/2 border border-purple-300 border-solid border-1 p-2' />
                    </div>
                    <div className='flex flex-col space-y-2 w-full'>
                    <input type="email" placeholder='Email address' className='pd-3 w-fit border border-purple-300 border-solid border-1 p-2' />
                        <input type="text" placeholder="You Text" className='h-10 pd-3 w-fit border border-purple-300 border-solid border-1 p-2' />
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Form