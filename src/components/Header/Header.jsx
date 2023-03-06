import React from 'react';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
 import "../Header/HeaderLeft.css";

const Header = () => {
  return (
    <div className='flex justify-between w-full relative h-[100vh] bg-gradient-to-b from-[#F2F9FF] to-white-700 main-header'>
        <HeaderLeft/>
        <HeaderRight/>
    </div>
  )
}

export default Header;