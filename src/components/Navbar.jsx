import React from 'react';
import { Link } from 'react-router-dom';
import { HiMoon, HiSun } from 'react-icons/hi';

function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <section className={`flex justify-evenly items-evenly shadow-xl fixed top-0 w-full bg-${darkMode ? 'black' : 'white'} text-${darkMode ? 'white' : 'black'} z-10`}>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Agbalumo&family=Montserrat:wght@500&display=swap');
      </style>
      <div className='align-left my-auto flex'>
        <h1 className={`text-[3rem] ml-[25px] font-[Agbalumo] ${darkMode ? 'text-white' : 'text-black'}`}>Bharat <span id='samarkand'>Yatra</span></h1>
      </div>
      <div className='flex my-auto'>
        <Link to='/'><li className='list-none text-xl hover:text-gray-500 m-[10px]'><a href="">Home</a></li></Link>
        <li className='list-none text-xl hover:text-gray-500 m-[10px]'><a href="">Places</a></li>
        <li className='list-none text-xl hover:text-gray-500 m-[10px]'><a href="">About Us</a></li>
      </div>
      <div className="my-auto">
        <button className={`m-[10px] text-xl ${darkMode ? 'text-white' : 'text-black'}`} onClick={toggleDarkMode}>
          {darkMode ? <HiSun style={{ fontSize: '24px' }} /> : <HiMoon style={{ fontSize: '24px' }} />}
        </button>
      </div>
    </section>
  );
}

export default Navbar;
