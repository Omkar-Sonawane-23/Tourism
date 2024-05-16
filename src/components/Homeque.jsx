import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Data from "../../Data/Data.json";

const Homeque = () => {
  const data = Data.destinations;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => clearInterval(intervalId); 
  }, [3]);
  
  const showdetail = (index) => {
    console.log(index);
  };

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-2 justify-center items-center">
      {data.map((destination, i) => (
        <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24 bg-gray-900/40 shadow-lg hover:shadow-2xl transition duration-500 ease-in-out transform"
         key={i}>
            <img
              src={destination.image[currentImageIndex]}
              className="absolute inset-0 h-full w-full object-cover"
              alt={destination.name}
            />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
          <h3 className="z-10 mt-3 text-4xl  font-bold text-white text-center">
            {data[i].name}
          </h3>
          <div className="z-10 gap-y-1 pt-4 overflow-hidden text-center text-sm leading-6 text-gray-300">
            {data[i].description}
          </div>

          <div className="z-10 mt-4 justify-center text-center items-center">
          <Link to={`/detail/?id=${i}`} key={i}>
            <button
              onClick={() => showdetail(i)}
              className="w-[80px] h-[30px]  border-2 rounded-xl text-[white] backdrop-blur  cursor-pointer text-[white]  duration-[0.4s] mt-[5rem] hover:bg-[#f9a826] hover:text-[#1f2937] hover:shadow-lg hover:scale-105 transition duration-500 ease-in-out transform
              "
            >
              Explore
            </button>
            
          </Link>
        </div>
       </article>
      ))}
    </section>
  );
};

export default Homeque;