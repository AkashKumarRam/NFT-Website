import React from "react";
import Group1 from "../../images/Group1.png";
import Group2 from "../../images/Group2.png";
import Group3 from "../../images/Group3.png";
import "../BigBrands/Marqee.css";

const imageArray = [Group1, Group2, Group3,Group1, Group2, Group3,Group1, Group2, Group3,Group1, Group2, Group3,Group1, Group2, Group3,Group1, Group2, Group3,Group1, Group2, Group3,Group1, Group2, Group3,Group1, Group2, Group3,Group1, Group2, Group3,Group1, Group2, Group3,Group1, Group2, Group3,Group1, Group2, Group3,Group1, Group2, Group3,Group1, Group2, Group3,Group1, Group2, Group3,Group1, Group2, Group3,Group1, Group2, Group3,Group1, Group2, Group3,Group1, Group2, Group3,Group1, Group2, Group3,Group1, Group2, Group3,Group1, Group2, Group3,Group1, Group2, Group3,Group1, Group2, Group3,Group1, Group2, Group3,Group1, Group2, Group3,Group1, Group2, Group3,Group1, Group2, Group3,Group1, Group2, Group3,Group1, Group2, Group3,Group1, Group2, Group3,Group1, Group2, Group3];

const Marqee = () => {
  return (
    <div className="flex flex-row items-center justify-center sm:hidden overflow-hidden p-2">
      <div className="marquee-container">
        {imageArray.map((image, index) => (
          <img key={index} src={image} alt="nft" className="h-38" />
        ))}
      </div>
    </div>
  );
};

export default Marqee;
