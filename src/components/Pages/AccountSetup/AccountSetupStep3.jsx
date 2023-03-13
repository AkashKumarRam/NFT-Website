import React from "react";
import Select from "react-select";

const options = [
  { value: "Designer", label: "Designer" },
  { value: "Developer", label: "Developer" },
  { value: "Marketing", label: "Marketing" },
  { value: "Starup", label: "Starup" },
  { value: "NFT", label: "NFT" },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    width: "22rem",
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

const AccountSetupStep3 = () => {
  return (
    <div className="p-20 flex flex-col items-center justify-center -mt-16">
      <div className="w-full">
        <h2 className="text-xl">Account Set Up (3/3)</h2>
        <div className="w-full bg-gray-100 h-3 flex flex-row items-start justify-start mt-[1rem]">
          <div className="h-3 bg-blue-800 w-full"></div>
        </div>
      </div>

      <div className="mt-[3rem]">
        <h2 className="text-3xl font-poppins">
          Tell us a bit more about your brand
        </h2>
        <div className="flex flex-col mt-8">
          <label className="text-black text-md font-poppins cursor-pointer">
            Type of Business
          </label>

          <Select options={options} styles={customStyles} />

          <div className="flex flex-row items-center  space-x-5 mt-[2rem]">
            <div className="flex flex-col">
              <label className="text-black text-md font-poppins cursor-pointer">
                Company Size
              </label>
              <input
                type="text"
                className="border-[1px] border-gray-900 rounded-md h-[2.5rem] w-[22rem] pl-2"
              />
            </div>
          </div>
          <div className="flex flex-row items-center  space-x-5 mt-[2rem]">
            <div className="flex flex-col">
              <label className="text-black text-md font-poppins cursor-pointer">
                Userbase
              </label>
              <input
                type="text"
                className="border-[1px] border-gray-900 rounded-md h-[2.5rem] w-[22rem] pl-2"
              />
            </div>
          </div>
          <div className="flex flex-row  items-end space-x-5 mt-[2rem]">
            <div className="flex flex-col">
              <label className="text-black text-md font-poppins cursor-pointer">
                Revenue/Annum
              </label>
              <input
                type="text"
                className="border-[1px] border-gray-900 rounded-md h-[2.5rem] w-[22rem] pl-2"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-5">
          <button className="mt-6 border-[#2F3FD4] rounded-md border-2 p-2 bg-[#2F3FD4] text-white w-28 max-sm:hidden">
            NEXT
          </button>
          <p className="font-poppins mt-6">Skip</p>
        </div>
      </div>
    </div>
  );
};

export default AccountSetupStep3;
