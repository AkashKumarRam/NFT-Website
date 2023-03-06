import React from 'react'
import LeftBanner from './LeftBanner'
import RightBanner from './RightBanner'

const MainBanner = () => {
  return (
    <div className='flex justify-between max-sm:flex max-sm:flex-col max-sm:space-y-3 max-sm:-mt-[10rem] '>
        <LeftBanner/>
        <RightBanner/>
    </div>
  )
}

export default MainBanner