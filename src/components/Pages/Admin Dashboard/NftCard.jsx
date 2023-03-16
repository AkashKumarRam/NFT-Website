import React from 'react'

const NftCard = ({id, imgSrc,mint}) => {
  return (
    <div className='bg-white shadow-lg rounded-lg flex flex-col items-center p-3 space-y-1'>
        <p className='font-poppins'>{`ID: #${id}`}</p>
        <img src={imgSrc} alt='nftcard' className='h-[9rem]' />
        <p className='font-poppins'>{`Mints: ${mint}`}</p>
    </div>
  )
}

export default NftCard