import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa';
import Data from "../../Data/Detailed.json";

const Homeque = () => {
  const data = Data.destinations;
  const [showScrollButton, setShowScrollButton] = useState(false);

  const showdetail = (index) => {
    console.log(index);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <section className='grid grid-cols-3 gap-4'>
      {data.map((ele, i) => (
        <div key={i} className='w-[20rem] h-[25rem] m-[5rem] relative flex flex-col justify-center items-center'>
          <div className='w-[20rem] h-[30rem] overflow-hidden rounded-[30px]'>
            <img src={data[i].image} className='rounded-[30px] w-[25rem] h-[30rem] bg-cover' alt="Heritage Image" />
          </div>
          <div className='w-[20rem] h-[20rem] bg-[black] mt-[-30rem] z-[2] opacity-[30%] rounded-[30px] h-[20rem] flex flex-col justify-center items-center'>
            <h1 className='text-[4rem] mt-[0px] text-center leading-[60px] z-[2] text-[white]'>{data[i].name}</h1>
            <p className='text-[white] z-[2] w-[18rem]'>{data[i].description}</p>
          </div>
            <Link to={`/detail/?id=${i}`} key={i}>
              <button onClick={() => showdetail(i)} className='w-[80px] h-[30px] border-2 rounded-xl text-[black] backdrop-blur hover:text-[1.25rem] cursor-pointer text-[white] hover:w-[100px] hover:h-[50px] duration-[0.4s] mt-[5rem]'>Explore</button>
            </Link>
        </div>

      ))}
      {showScrollButton && (
        <button className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full shadow" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </section>
  );
};

export default Homeque;

