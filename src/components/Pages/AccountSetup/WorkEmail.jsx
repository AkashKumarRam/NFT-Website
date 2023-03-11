import React from 'react'

const WorkEmail = () => {
    return (
        <div className="p-20 flex flex-col items-center justify-center -mt-16">
          <div className="w-full">
            <h2 className="text-xl">Work Email Verification</h2>
            <div className="w-full bg-gray-100 h-3 flex flex-row items-start justify-start mt-[1rem]">
              <div className="h-3 bg-blue-800 w-full"></div>
            </div>
          </div>
    
          <div className="mt-[3rem] w-1/2 ml-[-2rem] items-start">
            <h2 className="text-3xl font-poppins">
                Verify Work Email
            </h2>
            <div>
              <div className="flex flex-row items-center space-x-2 mt-[2rem]">
                <div className="flex flex-col">
                  <label className="text-black text-md font-poppins cursor-pointer">
                    Enter Work Email
                  </label>
                  <input
                    type="text"
                    className="border-[1px] border-gray-900 rounded-md h-[2.5rem] w-[11rem] pl-2"
                  />
                </div>
                <p className=' mt-5 text-black text-md font-poppins'>@google.com</p>
              </div>

            </div>
            <p className="text-xs font-poppins text-gray-400 mt-[1rem]">This email will be set as brands admin email ID.</p>
            <button className="mt-6 border-[#2F3FD4] rounded-md border-2 p-2 bg-[#2F3FD4] text-white w-28 max-sm:hidden">
              Verify
            </button>
          </div>
        </div>
      );
    };
    

export default WorkEmail