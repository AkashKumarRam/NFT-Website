import React from "react";
import Vector from "../../images/Vector.png";
import "../Form/Form.css";

const Form = () => {
  return (
    <div className="p-5 mt-16">
      <div className="flex flex-row items-center space-x-20 justify-center">
        
        <img src={Vector} alt="vector boy" className="h-[26rem]" />
        
        <div className="ml-10">
        <div className="flex w-[30rem] flex-col bg-white p-5 space-y-6 border-[1.5px] border-[#000000]">
          <div className="flex flex-col space-y-4">
            <h2 className="text-3xl font-poppins">
            We are taking custom orders
            </h2>
            <p className="font-poppins text-sm">
            Our sales team always active to support enterprises for their custom branded NFT requirement.
            </p>
          </div>
          <div className="flex flex-row items-center space-x-4">
            <input
              type="text"
              placeholder="First Name"
              className="border-[1px] border-[#4751A9] pl-8 h-10 rounded-md"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border-[1px] border-[#4751A9] pl-6 h-10 rounded-md"
            />
          </div>
          <div className="flex flex-col space-y-6">
            <input
              type="email"
              placeholder="Email Address"
              className="border-[1px] border-[#4751A9] pl-6 h-10 rounded-md"
            />
            <input
              type="text"
              placeholder="Your Text"
              className="border-[1px] border-[#4751A9] pl-6 h-20 rounded-md relative placeholder-top-left"
            />
          </div>
          <div className="flex flex-row">
            <label
              for="agree"
              className="flex flex-row  items-center space-x-4"
            >
              <input
                type="checkbox"
                className="form-checkbox  border-[#4751A9] text-purple-600 checked:border-purple-600 checked:text-purple-600 checked:bg-white h-4 w-4"
              />

              <span className="text-sm font-poppins mt-5 text-[#35457F]">
                I agree that hexatick may contact me at the email address or
                phone number above.
              </span>
            </label>
          </div>
          <button
            type="submit"
            className="bg-[#333215] text-white py-2 px-4 rounded-sm"
          >
            Submit
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
