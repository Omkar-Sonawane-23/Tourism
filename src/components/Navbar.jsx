import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap p-3 shadow-md">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Agbalumo&family=Montserrat:wght@500&display=swap');
      </style>
      <div className="flex items-center flex-shrink-0 text-black mr-6 lg:mr-72">
        <h1 className="text-[2rem] ml-[25px] font-[Agbalumo] ">
          Bharat <span id="samarkand">Yatra</span>
        </h1>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm lg:flex-grow">
          <Link to="/">
            <li className="list-none text-xl font-semibold  lg:inline-block hover:text-gray-500 m-[10px]">
              Home
            </li>
          </Link>
          <Link to="/places">
            <li className="list-none text-xl font-semibold   lg:inline-block hover:text-gray-500 m-[10px]">
              Places
            </li>
          </Link>
          <Link to="/about">
            <li className="list-none text-xl  font-semibold lg:inline-block hover:text-gray-500 m-[10px]">
              About
            </li>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
