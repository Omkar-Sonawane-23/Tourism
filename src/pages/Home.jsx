import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../assets/bg.jpg';

const Home = () => {
  return (
    <section className='relative min-h-screen'>
      <img
        src="https://img.freepik.com/premium-vector/mumbai-skyline-landscape-view-city-mumbai-with-characteristics-buildings-monuments_743272-109.jpg?w=4320"
        className='absolute inset-0 w-full h-full object-cover'
        alt=""
      />
      <div className='absolute bottom-[50%] left-[50%] -translate-x-[50%] flex flex-col justify-end items-center px-4'>
        <div className='text-center mb-10'>
          <span className='text-3xl md:text-2xl sm:text-xl'>Welcome,</span>
          <span className='text-2xl md:text-xl sm:text-lg'>to</span>
          <h1 className='text-5xl font-Agbalumo md:text-3xl sm:text-2xl'>
            Bharat <span id='samarkand'>Yatra</span>
          </h1>
        </div>
        <div className='flex justify-center items-center gap-8 sm:gap-4'>
          <button
            className='text-lg md:text-base sm:text-sm btn-style bg-white hover:bg-gray-100 text-gray-800 py-2 px-6 rounded-full border border-gray-300 shadow-sm transition duration-300'
            type="button"
          >
            Explore
          </button>
          <Link to='/home'>
            <button
              className='text-lg md:text-base sm:text-sm btn-style bg-white hover:bg-gray-100 text-gray-800 py-2 px-6 rounded-full border border-gray-300 shadow-sm transition duration-300'
              type="button"
            >
              Places
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
