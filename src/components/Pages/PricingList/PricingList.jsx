import React from "react";

const PricingList = () => {
  return (
    <div className="mt-10">
      <div className="text-center space-y-6">
        <h1 className="font-space text-6xl">Choose a pricing plan</h1>
        <h3 className="font-inter text-xl">
          Unlock the power of NFTs in your product journey with plug-n-play
          APIs.
        </h3>
      </div>

      {/* Pricing */}
      <div className="mt-16 pl-8 pr-8 space-x-3 flex flex-row justify-center max-sm:flex max-sm:items-center max-sm:justify-center max-sm:flex-col max-sm:space-y-5">
        <div className="border-2 h-fit rounded-3xl border-slate-900 space-y-10 p-5 pb-8">
          <div className="space-y-2">
            <h3 className="font-inter text-4xl font-bold">Professional</h3>
            <p className="font-inter text-md">
              Level up your NFT Marketing workflow with simple APIs integrated
              in your product journey
            </p>
          </div>

          <div className="space-x-2 space-y-2">
            <s className="text-3xl font-bold">$59</s>
            <span className="text-5xl font-bold">$39</span>
            <p className="font-inter text-sm font-thin">Valid for 1 Month</p>
          </div>

          <div className="space-y-5">
            <ul className="space-y-3">
              <li className="font-intermedium">&#10003; 1 NFT Collection</li>
              <li className="font-intermedium">&#10003; 75 NFT Distribution</li>
              <li className="font-intermedium">&#10003; Unlimited API Calls</li>
              <li className="font-intermedium">
                &#10003; Full Access to Artwork Library
              </li>
              <li className="font-intermedium">&#10003; 1 user license</li>
              <li className="font-intermedium">
                &#10003; Standard Collection Level Metadata
              </li>
            </ul>
            <button className="font-inter font-bold border-2 text-center rounded-md h-12 border-stone-500 w-full">
              Buy Plan
            </button>
          </div>
        </div>

        {/* Second Pricing List */}
        <div className="border-2 h-fit rounded-3xl border-slate-900 space-y-10 p-5 pb-8">
          <div className="space-y-2">
            <h3 className="font-inter text-4xl font-bold">Business</h3>
            <p className="font-inter text-md">
            Level up your NFT Marketing workflow with simple APIs integrated in your product journey
            </p>
          </div>

          <div className="space-x-2 space-y-2">
            <s className="text-3xl font-bold">$349</s>
            <span className="text-5xl font-bold">$199</span>
            <p className="font-inter text-sm font-thin">Valid for 6 Months</p>
          </div>

          <div className="space-y-5">
            <ul className="space-y-3">
              <li className="font-intermedium">&#10003; 3 NFT Collection</li>
              <li className="font-intermedium">&#10003; 1500 NFT Distribution</li>
              <li className="font-intermedium">&#10003; Unlimited API Calls</li>
              <li className="font-intermedium">
                &#10003; Full Access to Artwork Library
              </li>
              <li className="font-intermedium">&#10003; 10 user license</li>
              <li className="font-intermedium">
                &#10003; Customized NFT-Level Metadata
              </li>
              <li>&#10003; 1 Free Creative Consultation</li>
              <li>&#10003; Advanced Analytics Dashboard</li>
              <li>&#10003; Access IRL Airdrop Mobile App</li>
            </ul>
            <button className="font-inter font-bold border-2 text-center rounded-md h-12 bg-[#F21C1C] text-white w-full">
              Buy Plan
            </button>
          </div>
        </div>

        {/* Third Pricing */}
        <div className="border-2 h-fit rounded-3xl border-slate-900 space-y-10 p-5 pb-8">
          <div className="space-y-2">
            <h3 className="font-inter text-4xl font-bold">Enterprise+</h3>
            <p className="font-inter text-md">
            Level up your NFT Marketing workflow with simple APIs integrated in your product journey
            </p>
          </div>

          <div className="space-x-2 space-y-2">
            {/* <s className="text-2xl font-bold">$349</s>
            <span className="text-4xl font-bold">$199</span> */}
            <p className="text-5xl font-bold">Custom</p>
            <p className="font-inter text-sm font-thin">Free forever</p>
          </div>

          <div className="space-y-5">
            <ul className="space-y-3">
              <li className="font-intermedium">&#10003; Custom Capped NFT Collection</li>
              <li className="font-intermedium">&#10003; Unlimited NFT Distribution</li>
              <li className="font-intermedium">&#10003; Unlimited API Calls</li>
              <li className="font-intermedium">
                &#10003; Full Access to Artwork Library
              </li>
              <li className="font-intermedium">&#10003; Unlimted user license</li>
              <li className="font-intermedium">
                &#10003; Customized NFT-Level Metadata
              </li>
              <li>&#10003; 10 Free Creative Consultation</li>
              <li>&#10003; Advanced Analytics Dashboard</li>
              <li>&#10003; Access IRL Airdrop Mobile App</li>
              <li>&#10003; Additional Custom Metadata</li>
            </ul>
            <button className="font-inter font-bold border-2 text-center rounded-md h-12 bg-[#141414] text-white w-full">
            Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingList;
