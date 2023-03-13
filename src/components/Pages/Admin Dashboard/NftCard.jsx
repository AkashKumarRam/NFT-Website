import React from 'react'

const NftCard = ({id, imgSrc,mint}) => {
  return (
    <div className='bg-white border-[1px] border-black rounded-lg flex flex-col p-3  items-center justify-center space-y-1'>
        <p className='font-poppins'>{`ID: #${id}`}</p>
        <img src={imgSrc} alt='nftcard' className='h-[10rem]' />
        <p className='font-poppins'>{`Mints: ${mint}`}</p>
    </div>
  )
}

export default NftCard