import React from 'react';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Integration = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row justify-between">
        <div>
        <Sidebar />
        </div>
        <div className=" w-[calc(100%-16rem)] h-[calc(100%-74px)] tex">
          
        </div>
      </div>
    </div>
  )
}

export default Integration