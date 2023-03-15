import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";


const AdminDashBoard = () => {
  return (
    <div>
      <Navbar/>
      <Sidebar menuActive="dashboard"/>
    </div>
  );
};

export default AdminDashBoard;
