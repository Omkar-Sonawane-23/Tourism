import React from "react";
import { Link } from "react-router-dom";
import Data from "../../Data/Detailed.json";

const Homeque = () => {
  const data = Data.destinations;

  const showdetail = (index) => {
    console.log(index);
  };

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-2 justify-center items-center">
      {data.map((ele, i) => (
        <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24 bg-gray-900/40 shadow-lg hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-gray-900/60"
         key={i}>
          <img
            src={data[i].image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
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
              className="w-[80px] h-[30px]  border-2 rounded-xl text-[black] backdrop-blur hover:text-[1.25rem] cursor-pointer text-[white] hover:w-[100px] hover:h-[50px] duration-[0.4s] mt-[5rem]
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
