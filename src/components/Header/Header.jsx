import React from 'react';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

const Header = () => {
  return (
    <div className='flex justify-between w-full relative h-[100vh] bg-gradient-to-b from-cyan-50 to-white-700'>
        <HeaderLeft/>
        <HeaderRight/>
    </div>
  )
}

export default Header;