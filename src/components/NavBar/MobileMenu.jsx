import React, { useState } from "react";
import { Link } from "react-scroll";
import {useNavigate} from "react-router-dom";

function MobileMenu() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative sm:hidden">
      <button
        className="text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900"
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10"
        >
          <path
            fill-rule="evenodd"
            d="M3 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.25zm0 4.5A.75.75 0 013.75 9h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-2 px-3"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <p
             onClick={() => navigate('/casestudies')}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Case studies
            </p>
            <p
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              API Documentation
            </p>
            <p
             onClick={() => navigate('/pricing')}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Pricing
            </p>
            <Link to='form' spy={true} smooth={true} offset={10} duration={400} className="block w-full px-4 py-2 mt-2 text-sm font-medium border-[#2F3FD4] rounded-md border-2 p-2 text-[#2F3FD4] font-body">
              Contact Sales
            </Link>
            <button className="block w-full px-4 py-2 mt-2 text-sm font-medium border-[#2F3FD4] rounded-md border-2 p-2 bg-[#2F3FD4] text-white w-28">
              Sign Up
            </button>
          </div>

          <button
            className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
