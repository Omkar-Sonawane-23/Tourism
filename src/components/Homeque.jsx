import React from 'react';
import { Link } from 'react-router-dom';
import Data from "../../Data/Detailed.json";

const Homeque = () => {
  const data = Data.destinations;

  const showdetail = (index) => {
    console.log(index);
  };

  return (
    <section className='mt-20 sm:mt-24 mb-6 flex flex-wrap items-center justify-around lg:mx-4'>
      {data.map((ele, i) => (

        <div key={i} className='w-[90vw] h-[28rem] mx-[1rem] my-[0.15rem] sm:w-[18rem] sm:h-[25rem] md:w-[45vw] lg:w-[45vw] lg:h-[32rem] xl:w-[22rem] 2xl:w-[28rem] xl:h-[34rem]  flex flex-col items-center justify-center'>
          <div className='w-[80vw] h-[25rem] sm:w-[18rem] sm:h-[23rem] md:w-[45vw] lg:w-[45vw] lg:h-[30rem] xl:w-[25rem] xl:h-[30rem] 2xl:w-[28rem] overflow-hidden rounded-[30px]'>
            <img src={data[i].image} className='rounded-[30px] w-[80vw] h-[30rem] sm:w-[18rem] sm:h-[23rem] md:w-[45vw] lg:w-[45vw] lg:h-[30rem] xl:w-[25rem] xl:h-[30rem] 2xl:w-[28rem] bg-cover' alt="Heritage Image" />
          </div>
          <div className='w-[80vw] h-[15rem] bg-[black] mt-[-26rem] sm:w-[18rem] sm:h-[14rem] sm:mt-[-24rem]  z-[2] opacity-[50%] rounded-[30px] flex flex-col justify-center items-start gap-4 px-4 py-4 md:w-[45vw] lg:gap-6 lg:px-6 lg:py-4 lg:w-[45vw] lg:h-[20rem]  lg:mt-[-31rem] xl:gap-6 xl:px-6 xl:py-4 xl:w-[25rem] xl:h-[20rem]  xl:mt-[-32rem] 2xl:w-[28rem]'>
            <h1 className='text-[2rem] font-bold leading-[10vw] sm:text-[2rem] sm:leading-[4vw] z-[2] text-[white] 
            md:text-[2.4rem] md:leading-[46px] lg:text-[3rem] lg:leading-[54px] xl:text-[3.8rem] xl:leading-[64px]'>{data[i].name}</h1>
            <p className='text-[white] font-medium z-[2] leading-[1.2rem] w-[70vw] text-[0.9rem] sm:text-[0.8rem] sm:w-[15rem] md:w-[20rem] md:text-[0.9rem] lg:w-[22rem]  lg:text-[1rem] lg:leading-[1.3rem] xl:w-[22rem]  xl:text-[1rem] xl:leading-[1.5rem]'>{data[i].description}</p>
          </div>
          <Link to={`/detail/?id=${i}`} key={i}>
            <button onClick={() => showdetail(i)} className='border-2 rounded-xl backdrop-blur-md text-[1rem] hover:text-[1.25rem] cursor-pointer text-white font-bold hover:px-6 hover:py-4 duration-[0.4s] px-4 py-2 mt-[5rem]'>Explore</button>
          </Link>
        </div>

      ))}
    </section>
  );
};

export default Homeque;
