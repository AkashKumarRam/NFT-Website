import React from "react";
import {MdDashboard} from "react-icons/md";
import {GiHumanTarget} from "react-icons/gi";
import {BsCollection} from "react-icons/bs";
import {IoColorPaletteOutline} from "react-icons/io5";
import {HiCodeBracket} from "react-icons/hi2";
import {SlSettings} from "react-icons/sl";
import Profile from "../../../images/profile_photo.png";

const AdminDashBoard = () => {
  return (
    <div className="bg-[#F8FAFF] h-[100vh]">
      <nav className='bg-[#FFFFFF] h-[3rem] w-full shadow-md '>
        </nav>

      <aside
        id="default-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-white shadow-md ">
        <div className="ml-3 pb-5 pt-5 flex flex-rom items-center space-x-5 cursor-pointer">
            <img src={Profile} alt="ProfileImage"/>
            <div>
                <p className="font-poppins">Sierra Ferguson</p>
                <p className="font-poppins text-xs text-[#90A0B7]">s.ferguson@gmail.com</p>
            </div>
        </div>
          <ul class="space-y-2 cursor-pointer">
            <li>
              <p
                href="#"
                class="flex items-center p-2 text-base font-normal text-slate-900 rounded-lg hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <MdDashboard className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                <span class="ml-3 font-poppins">Dashboard</span>
              </p>
            </li>
            <li>
              <p
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <GiHumanTarget  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                <span class="flex-1 ml-3 whitespace-nowrap font-poppins">Targeting</span>
              </p>
            </li>
            <li>
              <p
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <BsCollection  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                <span class="flex-1 ml-3 whitespace-nowrap font-poppins">Collections</span>
              </p>
            </li>
            <li>
              <p
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <IoColorPaletteOutline className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                <span class="flex-1 ml-3 whitespace-nowrap font-poppins">Artwork</span>
              </p>
            </li>
            <li>
              <p
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <HiCodeBracket className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                <span class="flex-1 ml-3 whitespace-nowrap font-poppins">Integration</span>
              </p>
            </li>
            <hr/>
            <li>
              <p
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <SlSettings className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                <span class="flex-1 ml-3 whitespace-nowrap font-poppins">Settings</span>
              </p>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default AdminDashBoard;
