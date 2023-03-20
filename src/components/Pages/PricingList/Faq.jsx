import React from "react";
import FaqBox from "./FaqBox";

const Faq = () => {
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
          question="What is Artwork Library?"
          answer="An artwork library refers to a collection of creative resources that brands can access and utilize to create their own unique non-fungible tokens (NFTs). This library may include a range of visual elements, such as images, graphics, and animations, as well as audio and video files and other multimedia resources."
        />
        <FaqBox
          question="What is NFT Metadata?"
          answer="NFT metadata refers to the information that is stored on the blockchain alongside a non-fungible token (NFT). This metadata provides additional details and context about the NFT, such as its title, description, artist, creation date, and any other relevant information.
          The metadata for an NFT is typically stored using a standard format, such as the JSON (JavaScript Object Notation) or IPFS (InterPlanetary File System) protocols. This information is stored on the blockchain as a separate file that is linked to the NFT itself, allowing anyone to access and view the metadata associated with a particular token."
        />
        <FaqBox question="What is Collection-Level Metadata?" answer="Collection-Level Metadata refers to collection where all the NFTs have same metadata except for the artwork. Every NFT Token ID will have same description, name, external_url and other metadata" />
        <FaqBox question="What is NFT-Level Metadata?" answer="NFT-Level Metadata refers to the customized metadata for each NFT Token ID. This mean every NFT Token ID can have a separate description, name, exteranal_url." />
        <FaqBox question="What is Custom Metadata?" answer="Custom Metadata refers to additional metadata added to NFT Token which specific to business case of the brand and are not included in OpenSea Metadata standard." />
        <FaqBox question="What is user license?" answer="User license refers to the maximum number of users allowed to access the single brand's dashboard." />
        <FaqBox question="What is IRL Airdrop?" answer="IRL Airdrop refers to distribution of NFTs to user through a mobile app in real life. These are triggered from application which are accessed brand representative with credentials to brand's hexatick account." />
      </div>
    </div>
  );
};

export default Faq;
