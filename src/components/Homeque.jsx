import React from 'react';
import { Link } from 'react-router-dom';
import Data from "../../Data/Detailed.json";

const Homeque = () => {
  const data = Data.destinations;

  return (
    <section className="grid grid-cols-1 mt-36 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 sm:px-8 md:px-12 lg:px-16">
      {data.map((destination, index) => (
        <div key={index} className="group w-full relative overflow-hidden rounded-3xl hover:scale-105 transition-all duration-300">
          <Link to={`/detail/?id=${index}`}>
            <img
              src={destination.image}
              className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover"
              alt="Heritage Image"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 rounded-3xl flex flex-col justify-center items-center p-4">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white text-center leading-relaxed mb-2 line-clamp-2">{destination.name}</h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white text-center line-clamp-3">{destination.description}</p>
            </div>
          </Link>
          <button
            onClick={() => console.log(index)}
            className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 lg:bottom-10 lg:left-10  bg-white text-black border-2 border-transparent rounded-lg px-4 py-2 uppercase text-xs sm:text-sm md:text-base font-medium cursor-pointer hover:bg-black hover:text-white hover:border-white transition-all duration-300"
          >
            Explore
          </button>
        </div>
      ))}
    </section>
  );
};

export default Homeque;
