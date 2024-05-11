
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <section className="flex justify-evenly items-evenly shadow-xl fixed top-0 w-full bg-white z-10">
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
        <Link to="/" className="nav-link">
          <li className="list-none text-xl hover:text-blue-400 hover:underline m-[10px]">Home</li>
        </Link>
        <Link to="/places" className="nav-link">
          <li className="list-none text-xl  hover:text-blue-400 hover:underline m-[10px]">Places</li>
        </Link>
        <Link to="/About" className="nav-link">
          <li className="list-none text-xl hover:text-blue-400 hover:underline m-[10px]">About Us</li>
        </Link>
      </div>
    </section>
  );
}

export default Navbar;
