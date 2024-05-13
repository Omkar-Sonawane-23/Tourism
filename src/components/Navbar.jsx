import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <section className="flex justify-evenly items-evenly shadow-xl fixed top-0 w-full bg-white z-10 ">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Agbalumo&family=Montserrat:wght@500&display=swap');
      </style>
      <div className="align-left my-auto flex">
        <h1 className="text-[3rem] ml-[25px] font-[Agbalumo]">
          Bharat <span id="samarkand">Yatra</span>
        </h1>
      </div>
      <div className="flex my-auto">
        <Link to="/">
          <li className="list-none text-[1.5rem] ml-[10px] font-bold hover:text-gray-500 m-[10px] mr-8">
            <a href="">Home</a>
          </li>
        </Link>
        <li className="list-none text-[1.5rem] ml-[10px] font-bold  hover:text-gray-500 m-[10px] mr-8">
          <a href="">About Us</a>
        </li>
        <li className="list-none text-[1.5rem] ml-[10px] font-bold hover:text-gray-500 m-[10px] mr-8">
          <a href="">Places</a>
        </li>
        <li className="list-none text-[1.5rem] ml-[10px] font-bold hover:text-gray-500 m-[10px] mr-8">
          <a href="">Hotels</a>
        </li>
        <li className="list-none text-[1.5rem] ml-[10px] font-bold hover:text-gray-500 m-[10px] mr-8">
          <a href="">Contact Us</a>
        </li>
      </div>
      <div className="flex items-center">
        <button className="bg-gray-300 hover:bg-gray-400 text-[1.5rem] ml-[10px] text-gray-800 font-bold py-2 px-4 rounded">
          Register
        </button>
      </div>
    </section>
  );
}

export default Navbar;
