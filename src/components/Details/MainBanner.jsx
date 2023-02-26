import React from 'react'
import LeftBanner from './LeftBanner'
import RightBanner from './RightBanner'

const MainBanner = () => {
  return (
    <div className='flex justify-between'>
        <LeftBanner/>
        <RightBanner/>
    </div>
  )
}

export default MainBanner