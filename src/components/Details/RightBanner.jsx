import React from 'react';
import NftBranding from "../../images/NFT Branding.png";
import YtButton from "../../images/YouTube Button.png";

const RightBanner = () => {
  return (
    <div>
        <img className='mr-40 h-[480px] mt-[-10px]' src={NftBranding} alt="BrandingButton" />
        <img className='mt-[-80px] ml-8 cursor-pointer' src={YtButton} alt="YouTubeButton" />
    </div>
  )
}

export default RightBanner