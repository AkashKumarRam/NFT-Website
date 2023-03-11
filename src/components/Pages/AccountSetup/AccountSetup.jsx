import React from "react";

const AccountSetup = () => {
  return (
    <div className="p-20 flex flex-col items-center justify-center -mt-16">
      <div className="w-full">
        <h2 className="text-xl">Account Set Up(1/3)</h2>
        <div className="w-full bg-gray-100 h-3 flex flex-row items-start justify-start mt-[1rem]">
          <div className="h-3 bg-blue-800 w-1/2"></div>
        </div>
      </div>

      <div className="mt-[3rem]">
        <h2 className="text-3xl font-poppins">Tell us a bit about you</h2>
        <div>
          <div className="flex flex-row items-center  space-x-5 mt-[2rem]">
            <div className="flex flex-col">
              <label className="text-black text-md font-poppins cursor-pointer">
                First Name
              </label>
              <input
                type="text"
                className="border-[1px] border-gray-900 rounded-md h-[2.5rem] w-[22rem] pl-2"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-black text-md font-poppins cursor-pointer">
                Last Name
              </label>
              <input
                type="text"
                className="border-[1px] border-gray-900 rounded-md h-[2.5rem] w-[22rem] pl-2"
              />
            </div>
          </div>
          <div className="flex flex-row  items-center space-x-5 mt-[2rem]">
            <div className="flex flex-col">
              <label className="text-black text-md font-poppins cursor-pointer">
                Phone Number
              </label>
              <input
                type="text"
                className="border-[1px] border-gray-900 rounded-md h-[2.5rem] w-[22rem] pl-2"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-black text-md font-poppins cursor-pointer">
                Gender
              </label>
              <div class="flex justify-center space-x-4">
                <label class="inline-flex items-center bg-gray-200 rounded-md px-2 py-1">
                  <input
                    type="radio"
                    class="form-radio"
                    name="gender"
                    value="male"
                  />
                  <span class="ml-2">Male</span>
                </label>
                <label class="inline-flex items-center bg-gray-200 rounded-md px-2 py-1">
                  <input
                    type="radio"
                    class="form-radio"
                    name="gender"
                    value="female"
                  />
                  <span class="ml-2">Female</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <p className="text-sm mt-[1rem] font-poppins">I am</p>
        <div className="w-full flex items-start">
          <div className="mt-[0rem] items-start">
            
            <label class="flex items-center  rounded-md mt-[0.5rem]">
              <input
                type="radio"
                class="form-radio"
                name="profession"
                value="Founder"
              />
              <span class="ml-2 font-poppins">Founder</span>
            </label>
            <label class="flex items-center  rounded-md mt-[0.5rem]">
              <input
                type="radio"
                class="form-radio"
                name="profession"
                value="Founder"
              />
              <span class="ml-2 font-poppins">Product Manager</span>
            </label>
            <label class="flex items-center  rounded-md mt-[0.5rem]">
              <input
                type="radio"
                class="form-radio"
                name="profession"
                value="Founder"
              />
              <span class="ml-2 font-poppins">Growth Hacker</span>
            </label>
            <label class="flex items-center  rounded-md mt-[0.5rem]">
              <input
                type="radio"
                class="form-radio"
                name="profession"
                value="Founder"
              />
              <span class="ml-2 font-poppins">Developer</span>
            </label>
            <label class="flex items-center  rounded-md mt-[0.5rem]">
              <input
                type="radio"
                class="form-radio"
                className="bg-black"
                name="profession"
                value="Founder"
              />
              <span class="ml-2 font-poppins">Graphics Designer</span>
            </label>
            <label class="flex items-center space-x-1 rounded-md mt-[0.5rem]">
              <input
                type="radio"
                class="form-radio"
                className="bg-black"
                name="profession"
                value="Founder"
              />
              <input
                type="text"
                className="border-[1px] border-gray-900 rounded-md h-[2rem] w-[16rem] pl-2"
              />

            </label>
            <button className="mt-6 border-[#2F3FD4] rounded-md border-2 p-2 bg-[#2F3FD4] text-white w-28 max-sm:hidden">NEXT</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AccountSetup;
