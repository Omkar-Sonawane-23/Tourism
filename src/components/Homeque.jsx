import React from "react";
import { Link } from "react-router-dom";
import Data from "../../Data/Detailed.json";

const Homeque = () => {
  const data = Data.destinations;

  const showDetail = (index) => {
    console.log(index);
  };

  return (
    <>
    <h1 className="text-black text-center relative">Places</h1>
    <section className="grid grid-cols-3 mt-40 gap-8 mx-auto max-w-screen-lg">
      {data.map((destination, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-lg shadow-lg"
        >
          <img
            src={destination.image}
            alt={destination.name}
            className="object-cover w-full h-64 md:h-72 lg:h-80 xl:h-96"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center text-white">
            <h2 className="text-3xl font-semibold">{destination.name}</h2>
            <p className="mt-2">{destination.description}</p>
            <Link to={`/detail/?id=${index}`}>
              <button
                onClick={() => showDetail(index)}
                className="mt-4 px-6 py-3 bg-transparent border-2 border-white rounded-full uppercase tracking-wide transition duration-300 hover:bg-white hover:text-black focus:outline-none"
              >
                Explore
              </button>
            </Link>
          </div>
        </div>
      ))}
    </section>
    </>
  );
};

export default Homeque;
