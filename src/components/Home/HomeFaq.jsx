import React from "react";
import FaqBox from "../Pages/PricingList/FaqBox";

const HomeFaq = () => {
  return (
    <div className="mt-20">
      <div className="font-space text-6xl text-center">Frequently asked</div>
      <div className="mt-8 flex flex-row space-x-2 items-center justify-center max-sm:flex max-sm:flex-col max-sm:items-center">
        <p className="font-inter">Have any questions?</p>
        <p className="font-inter">Reach out to our team at</p>
        <p className="font-inter underline underline-offset-4 max-sm:flex flex-col">
          {" "}
          support@hexatick.com
        </p>
      </div>

      {/* FAQ SECTION */}
      <div className="mt-14 flex flex-col items-center ">
        <FaqBox
          question="What does your No-Code NFT API platform like Hexatick do?"
          answer="Our platform allows you to easily create and manage your own NFTs without any coding experience. You can mint new tokens, manage ownership and transfer them securely on the blockchain with simple REST APIs that can be implemented with minimal development and knowledge."
        />
        <FaqBox
          question="What Blockchain networks do you support?"
          answer="Currently, we support the Polygon blockchain which Layer2 scaling solution to Ethereum Blockchain. However, we are planning to add support for additional blockchains in the future."
        />
        <FaqBox
          question="How can I distribute NFT from my product?"
          answer="Your brand's NFT are managed by Hexatick Cloud service thus can be managed with simple REST APIs. Brands can trigger Hexatick APIs from within your product according to their business logic."
        />
        <FaqBox
          question="What kind of APIs is provided Hexatick?"
          answer="The basic version of our platform offers three primary API use cases. The first use case is to enable the creation of a new Ethereum wallet for a user. The second use case allows a brand to initiate a new NFT collection. The third use case involves facilitating the distribution of NFTs to user addresses."
        />
        <FaqBox
          question="What is NFT Distribution?"
          answer="NFT Distribution or Airdrop is a marketing strategy used by brand to transfer ownership of branded NFT to their users after a desire action or interaction with platform or brand. Distributing NFT to users creates reate a sense of excitement and anticipation around their brand and help build a community around the brand."
        />
        <FaqBox
          question="Can my user trade the NFTs?"
          answer="Yes, all the NFT distributed by the brand can traded by the user further. Trade can be processed through NFT marketplace in exchnage of other asset like cryptocurrency, fiat, commodities, goodwill, etc. Every trade is essentially a transfer of ownership between two parties."
        />
        <FaqBox
          question="Which trading platform these NFT be available?"
          answer="Due to the fact that non-fungible token (NFT) data is stored on the blockchain, it is possible for each NFT to be traded on various popular NFT marketplaces, including but not limited to Opensea, Looksrare, Rarible, and Blur."
        />
      </div>
    </div>
  );
};

export default HomeFaq;
