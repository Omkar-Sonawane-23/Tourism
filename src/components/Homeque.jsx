import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Data from "../../Data/Data.json";

const Homeque = () => {
  const data = Data.destinations;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [3]);

  console.log("Current Image Index:", currentImageIndex); // Log current index for debugging

  const showDetail = (index) => {
    console.log(index);
  };

  return (
    <section className="grid grid-cols-3 gap-4">
      {data.map((destination, i) => (
        <div
          key={i}
          className="w-[20rem] h-[25rem] m-[5rem] relative flex flex-col justify-center items-center"
        >
          <div className="w-[20rem] h-[30rem] overflow-hidden rounded-[30px]">
            <img
              src={destination.image[currentImageIndex]}
              className="rounded-[30px] w-[25rem] h-[30rem] bg-cover"
              alt={destination.name}
            />
          </div>
          <div className="w-[20rem] h-[20rem] bg-[black] mt-[-30rem] z-[2] opacity-[30%] rounded-[30px] h-[20rem] flex flex-col justify-center items-center">
            <h1 className="text-[4rem] mt-[0px] text-center leading-[60px] z-[2] text-[white]">
              {destination.name}
            </h1>
            <p className="text-[white] z-[2] w-[18rem]">
              {destination.description}
            </p>
          </div>
          <Link to={`/detail/?id=${i}`} key={i}>
            <button
              onClick={() => showDetail(i)}
              className="w-[80px] h-[30px] border-2 rounded-xl text-[black] backdrop-blur hover:text-[1.25rem] cursor-pointer text-[white] hover:w-[100px] hover:h-[50px] duration-[0.4s] mt-[5rem]"
            >
              Explore
            </button>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default Homeque;
