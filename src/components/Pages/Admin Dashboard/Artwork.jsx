import React from "react";
import AdminDashBoard from "./AdminDashBoard";

import Image1 from "../../../images/Group A-Image 1.png";
import Image2 from "../../../images/Group A-Image 2.png";
import Image3 from "../../../images/Group A-Image 3.png";
import Image4 from "../../../images/Group A-Image 4.png";
import Image5 from "../../../images/Group A-Image 5.png";
import Image6 from "../../../images/Group A-Image 6.png";
import Image7 from "../../../images/Group B- Image 1.png";
import Image8 from "../../../images/Group B- Image 2.png";
import Image9 from "../../../images/Group B- Image 3.png";
import Image10 from "../../../images/Group B- Image 4.png";
import Image11 from "../../../images/Group B- Image 5.png";
import Image12 from "../../../images/Group B- Image 6.png";
import NftCard from "./NftCard";

const nftData = [
  { id: 123, imgsrc: Image1, mint: 1234 },
  { id: 123, imgsrc: Image2, mint: 1234 },
  { id: 123, imgsrc: Image3, mint: 1234 },
  { id: 123, imgsrc: Image4, mint: 1234 },
  { id: 123, imgsrc: Image5, mint: 1234 },
  { id: 123, imgsrc: Image6, mint: 1234 },
  { id: 123, imgsrc: Image7, mint: 1234 },
  { id: 123, imgsrc: Image8, mint: 1234 },
  { id: 123, imgsrc: Image9, mint: 1234 },
  { id: 123, imgsrc: Image10, mint: 1234 },
  { id: 123, imgsrc: Image11, mint: 1234 },
  { id: 123, imgsrc: Image12, mint: 1234 },
];

const Artwork = () => {
  return (
    <div className="space-x-16 bg-[#F8FAFF]">
      <AdminDashBoard />

      <div className="flex flex-col w-[100%-64rem] h-[100vh-3rem]  mt-2">
        <div className="w-full p-2  flex flex-row items-end justify-end">
          <button className="p-2 bg-[#109CF1] text-white flex flex-row items-center justify-center space-x-4 font-poppins mr-[6rem] mt-8 rounded-md drop-shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                fill-rule="evenodd"
                d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                clip-rule="evenodd"
              />
            </svg>
            Upload Artwork
          </button>
        </div>

        <div className="flex flex-wrap gap-x-[4rem] gap-y-[2rem] mt-[2rem]">
          {nftData.map((data, index) => {
            return (
              <NftCard id={data.id} imgSrc={data.imgsrc} mint={data.mint} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Artwork;
