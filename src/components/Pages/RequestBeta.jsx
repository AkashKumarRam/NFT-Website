import React from "react";
import Log from "../../images/Login.png";
import LogoImage from "../../images/LogoImage.png";
import LogoText from "../../images/LogoText.png";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

const options = [
  { value: "Blockchain/Web3", label: "Blockchain/Web3" },
  { value: "Gaming", label: "Gaming" },
  { value: "E-Commerce", label: "E-Commerce" },
  { value: "B2B Services", label: "B2B Services" },
  { value: "FinTech", label: "FinTech" },
  { value: "SAAS", label: "SAAS" },
  { value: "EdTech", label: "EdTech" },
  { value: "Social Media", label: "Social Media" },
  { value: "HealthTech", label: "HealthTech" },
  { value: "AgriTech", label: "AgriTech" },
  { value: "TravelTech", label: "TravelTech" },
  { value: "PropTech", label: "PropTech" },
  { value: "FoodTech", label: "FoodTech" },
  { value: "Logistics", label: "Logistics" },
  { value: "AdTech", label: "AdTech" },
  { value: "HRTech", label: "HRTech" },
  { value: "SpaceTech", label: "SpaceTech" },
  { value: "MediaTech", label: "MediaTech" },
  { value: "GovTech", label: "GovTech" },
  { value: "InsurTech", label: "InsurTech" },
  { value: "Cybersecurity", label: "Cybersecurity" },
  { value: "Other", label: "Other" },
];

const options2 = [
  { value: "Unfunded", label: "Unfunded" },
  { value: "Seed Funded", label: "Seed Funded" },
  { value: "Series A", label: "Series A" },
  { value: "Series B", label: "Series B" },
  { value: "Series C", label: "Series C" },
  { value: "Series D and Above", label: "Series D and Above" },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    width: "20rem",
    height: "2.5rem",
    borderRadius: "6px",
    border: "1px solid black",
    boxShadow: "none",
    "&:hover": {
      border: "1px solid #aaa",
    },
  }),
  menu: (provided) => ({
    ...provided,
    width: "22rem",
    borderRadius: "6px",
    boxShadow: "none",
  }),
  // option: (provided, state) => ({
  //   ...provided,
  //   backgroundColor: state.isFocused ? "#eee" : "transparent",
  //   "&:hover": {
  //     backgroundColor: "#eee",
  //   },
  // }),
  singleValue: (provided) => ({
    ...provided,
    color: "#555",
  }),
};

const RequestBeta = () => {
  const navigate = useNavigate();
  return (
    // <div className="h-[100vh] flex items-center justify-center bg-[#FFFAFA]">
    <div className="flex flex-row h-[100vh] space-x-12 max-sm:space-x-0 max-sm:flex max-sm:items-center max-sm:-mt-8">
      <div className="bg-[#F2F5FE] flex items-center justify-center w-1/2 max-sm:hidden">
        <div>
          <img src={Log} className="h-[18rem]" alt="blur circle" />
        </div>
      </div>
      <div className="bg-white p-6 w-1/2 mt-8 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:w-full">
        <div className="flex flex-row items-center space-x-3 w-full max-sm:flex max-sm:flex-row max-sm:items-start max-sm:-ml-2">
          <img onClick={() => navigate("/")} src={LogoImage} alt="logo" />
          <img onClick={() => navigate("/")} src={LogoText} alt="logotext" />
        </div>
        <div className="mt-[2rem] max-sm:items-start max-sm:w-screen max-sm:pl-5 max-sm:pr-5">
          <h1 className="font-bold text-2xl font-poppins">Request For Beta</h1>
          <p className="text-sm text-gray-400 font-poppins">
            If selected you get 6 Months Business Subscription Plan for Free
          </p>
        </div>
        <div className="mt-5 flex flex-col space-y-4 ">
          <div className="flex flex-col max-sm:pl-5 max-sm:pr-5">
            <label className="text-black text-md font-poppins cursor-pointer">
              Name of the business
            </label>
            <input
              type="text"
              className="border-[1px] border-gray-900 rounded-md h-[2.5rem] w-[22rem] pl-2 max-sm:w-[20rem]"
            />
          </div>
          <div className="flex flex-col max-sm:pl-5 max-sm:pr-5 max-sm:w-[20rem]">
            <label className="text-black text-md font-poppins cursor-pointer">
              Type of Business
            </label>
            <Select options={options} styles={customStyles} />
          </div>

          <div className="flex flex-col max-sm:pl-5 max-sm:pr-5">
            <label className="text-black text-md font-poppins cursor-pointer">
              Funding Status
            </label>
            <Select options={options2} styles={customStyles} />
          </div>
          <div className="flex flex-col max-sm:pl-5 max-sm:pr-5 ">
            <label className="text-black text-md font-poppins cursor-pointer">
              Email (POC)
            </label>
            <input
              type="email"
              className="border-[1px] border-gray-900 rounded-md h-[2.5rem] w-[22rem] pl-2 max-sm:w-[20rem]"
            />
          </div>

          <div className="flex flex-col max-sm:pl-5 max-sm:pr-5">
            <label className="text-black text-md font-poppins cursor-pointer">
              Phone Number (POC)
            </label>
            <input
              type="text"
              className="border-[1px] border-gray-900 rounded-md h-[2.5rem] w-[22rem] pl-2 max-sm:w-[20rem]"
            />
          </div>
        </div>

        <button className="text-white font-bold px-4 py-2 rounded w-[22rem] mt-[1rem] bg-[#2F3FD4] max-sm:w-[20rem]">
          Request Beta
        </button>
      </div>
    </div>
    // </div>
  );
};

export default RequestBeta;
