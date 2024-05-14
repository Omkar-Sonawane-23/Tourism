import React from 'react';
import { Link } from 'react-router-dom';
import Data from "../../Data/Detailed.json";

const Homeque = () => {
  const data = Data.destinations;

  const showdetail = (index) => {
    console.log(index);
  };

  return (
    <section className='max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 grid gird-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10 '>
      {data.map((ele, i) => (
        <div key={i} className='px-4 shadow dark:bg-gray-800 dark:border-gray-700'>
          <div className=' bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between h-full'>
            <img src={data[i].image} className='transform transiton duration-300 hover:scale-105 hover:cursor-pointer' alt="Heritage Image" />
          
            <h1 className='font-bold text-lg flex items-center mt-2'>{data[i].name}</h1>
            <p className='text-gray-900 mb-2 hover:text-indigo-600 inline-block'>{data[i].description}</p>
          <div className='flex items-center'>
            <Link to={`/detail/?id=${i}`} key={i}>
              <button onClick={() => showdetail(i)} className='text-white bg-[#002d74] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Explore</button>
            </Link></div>
          </div>
        </div>
          

      ))}
      
    </section>
    
  );
};

export default Homeque;
