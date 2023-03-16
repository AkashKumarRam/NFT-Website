import React from "react";
import CollectionTable from "./CollectionTable";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Collection = () => {
  return (
    <div className="bg-[#F8FAFF] h-[100vh]">
      <Navbar />
      <div className="flex flex-row justify-between">
        <div>
          <Sidebar menuActive="collection" />
        </div>
        <div className=" w-[calc(100%-16rem)] h-[calc(100vh-74px)] flex flex-col items-end p-8 space-y-4 mt-2">
          <div>
            <button className="p-3 bg-[#109CF1] text-white flex flex-row space-x-3 font-poppins rounded-md drop-shadow-md">
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
              <p>Add Collection</p>
            </button>
          </div>
          <div className="w-full">
            <CollectionTable />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Collection;
