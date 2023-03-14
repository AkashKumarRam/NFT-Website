import React, { useState } from "react";
import Upload from "../../../images/UploadButton.png";


const FileUploader = ({ visible, onClose }) => {
    if (!visible) {
      return null;
    }

  return (
    <div className="h-[33rem] w-[33rem] z-10 p-4 rounded-xl shadow-lg space-y-4 bg-white flex flex-col items-start absolute top-[6rem] left-[30rem]">
      <button
        onClick={onClose}
        className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fill-rule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <h2 className="font-poppins text-2xl">ADD COLLECTION</h2>
      <div className="w-full">
        <label className="font-poppins text-lg">Name of Artwork</label>
        <input
          type="text"
          className=" rounded-md border-[1px] border-gray-900 bg-pink-50 h-[2.5rem] w-full pl-2"
        />
      </div>
      <h2 className="font-poppins">Default Artwork</h2>
      <div>
        <label htmlFor="file-input">
          <img src={Upload} alt="Select file" className="h-[15rem] w-[15rem]" />
        </label>
        <input type="file" id="file-input" className="hidden" />
      </div>

      <button onClick={onClose} className="p-2 bg-[#109CF1] w-[12rem]  text-white flex flex-row items-center justify-center space-x-4 font-poppins mr-[6rem] mt-[2rem] rounded-md drop-shadow-md">
        ADD
      </button>
    </div>
  );
};

export default FileUploader;
