<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <section className="flex justify-evenly items-evenly shadow-xl fixed top-0 w-full bg-white z-10 ">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Agbalumo&family=Montserrat:wght@500&display=swap');
      </style>

      <Link to="/" className="align-left my-auto flex">
        <h1 className="text-[3rem] ml-[25px] font-[Agbalumo]">
          Bharat <span id="samarkand">Yatra</span>
        </h1>
      </Link>
      <div className="flex my-auto">
        <Link to="/">
          <li className="list-none text-xl hover:text-gray-500 m-[10px]">
            <a href="">Home</a>
          </li>
        </Link>
        <Link to="/home">
          <li className="list-none text-xl hover:text-gray-500 m-[10px]">
            <a href="">Places</a>
          </li>
        </Link>
        <Link to="/AboutUs">
          <li className="list-none text-xl hover:text-gray-500 m-[10px]">
            <a href="">About Us</a>
          </li>
=======
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <section className='flex justify-between items-center shadow-xl fixed top-0 w-full bg-white z-10 py-4 px-8'>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Agbalumo&family=Montserrat:wght@500&display=swap');
      </style>
      
      <Link to='/' className='flex items-center'>
        <h1 className='text-3xl font-[Agbalumo]'>Bharat <span className='font-[Montserrat]'>Yatra</span></h1>
      </Link>
      <div className='flex items-center space-x-4'>
        <Link to='/' className='text-xl hover:text-gray-500 transition duration-300'>
          Home
        </Link>
        <Link to='/home' className='text-xl hover:text-gray-500 transition duration-300'>
          Places
        </Link>
        <Link to='/about' className='text-xl hover:text-gray-500 transition duration-300'>
          About Us
        </Link>
        <Link to='/contact' className='text-xl'>
          <button className='bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300'>
            Contact Us
          </button>
>>>>>>> a3e10a072b879b5dcd47cc12816aeeccc04aacec
        </Link>
      </div>
    </section>
  );
}

export default Navbar;
