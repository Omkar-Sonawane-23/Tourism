
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className='flex justify-evenly items-evenly py-4 sm:py-2 shadow-xl fixed top-0 w-full bg-white z-10 px-4'>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Agbalumo&family=Montserrat:wght@500&display=swap');
      </style>

      <div className='flex flex-stretch justify-between items-center gap-[10vw]'>
        <div className='align-left my-auto flex'>
          <h1 className='text-[2rem] sm:text-[3rem] font-[Agbalumo]'>
            Bharat <span id='samarkand'>Yatra</span>
          </h1>
        </div>

        <div className='sm:hidden my-auto'>
          <button className='text-xl' onClick={toggleMenu}>
            <svg
              className='w-10 h-10'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              ></path>
            </svg>
          </button>
        </div>
      </div>



      <div className={`sm:flex ${isMenuOpen ? 'flex flex-col gap-4 m-4' : 'hidden'} my-auto`}>
        <Link to='/' className='list-none text-md sm:text-xl hover:text-gray-500 mx-2 sm:mx-4'>
          Home
        </Link>
        <Link to='/places' className='list-none text-md sm:text-xl hover:text-gray-500 mx-2 sm:mx-4'>
          Places
        </Link>
        <Link to='/about' className='list-none text-md sm:text-xl hover:text-gray-500 mx-2 sm:mx-4'>
          About Us
        </Link>
      </div>
    </section>
  );
}

export default Navbar;
