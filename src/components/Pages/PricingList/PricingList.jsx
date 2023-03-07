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

      <div className="w-1/3 mt-16 pl-5  flex flex-row max-sm:flex max-sm:flex-col">
        <div className="border-2 rounded-3xl border-slate-900 space-y-10 p-5 pb-8">
          <div className="space-y-2">
            <h3 className="font-inter text-4xl font-bold">Professional</h3>
            <p className="font-inter text-xs">
              Level up your NFT Marketing workflow with simple APIs integrated
              in your product journey
            </p>
          </div>

          <div className="space-x-2 space-y-2">
            <s className="text-2xl font-bold">$59</s>
            <span className="text-4xl font-bold">$39</span>
            <p className="font-inter text-xs font-thin">Valid for 1 Month</p>
          </div>
         

          <div>
            <ul className="space-y-3">
              <li className="font-intermedium">&#10003;  1 NFT Collection</li>
              <li className="font-intermedium">&#10003;  75 NFT Distribution</li>
              <li className="font-intermedium">&#10003;  Unlimited API Calls</li>
              <li className="font-intermedium">&#10003;  Full Access to Artwork Library</li>
              <li className="font-intermedium">&#10003;  1 user license</li>
              <li className="font-intermedium">&#10003;  Standard Collection Level Metadata</li>
            </ul>
          </div>
            <button className="font-inter font-bold border-2 text-center rounded-md h-12 border-stone-500 w-full">
              Buy Plan
            </button>
        </div>
      </div>
    </div>
  );
};

export default PricingList;
