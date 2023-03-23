import React from "react";
import Vector from "../../images/Vector.png";
import "../Form/Form.css";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  return (
    <div
      className="p-5 mt-16 max-sm:flex max-sm:items-center max-sm:justify-center"
      id="form"
    >
      <div className="flex flex-row items-center space-x-20 justify-center max-sm:space-x-0 max-sm:items-center max-sm:justify-center">
        <img
          src={Vector}
          alt="vector boy"
          className="h-[26rem] max-sm:hidden"
        />

        <div className="ml-10">
          <div className="flex w-[30rem] max-sm:w-[22rem] flex-col bg-white p-5 space-y-6 border-[1.5px] border-[#000000]">
            <div className="flex flex-col space-y-4">
              <h2 className="text-3xl font-poppins max-sm:text-2xl">
                We are taking custom orders
              </h2>
              <p className="font-poppins text-sm">
                Our sales team always active to support enterprises for their
                custom branded NFT requirement.
              </p>
            </div>
            <div className="flex flex-row items-center space-x-4 max-sm:space-x-2">
              <input
                type="text"
                placeholder="First Name"
                className="border-[1px] border-[#4751A9] pl-8 h-10 rounded-md max-sm:w-1/2 max-sm:pl-2"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border-[1px] border-[#4751A9] pl-6 h-10 rounded-md max-sm:w-1/2 max-sm:pl-2"
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
                  I agree that hexarare may contact me at the email address or
                  phone number above.
                </span>
              </label>
            </div>
            <button
              onClick={() => navigate("/requestbeta")}
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
