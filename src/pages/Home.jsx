import React from "react";
import { Link } from "react-router-dom";
import bg from "../assets/bg.jpg";

const Home = () => {
  return (
    <section className="mt-[5px]">
      <img
        src="https://img.freepik.com/premium-vector/mumbai-skyline-landscape-view-city-mumbai-with-characteristics-buildings-monuments_743272-109.jpg?w=4320"
        className="w-[100vw] h-[100vh] fixed"
        alt=""
      />
      <div className="absolute w-full bottom-[5rem]">
        <div className="flex flex-col justify-center items-center mb-[10rem]">
          <span className="text-[3rem] font-bold">Welcome</span>
          <span className="text-[2.5rem] font-bold"> to,</span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1 className="text-[5rem] ml-[25px] font-[Agbalumo]">
            Bharat <span id="samarkand">Yatra</span>
          </h1>
        </div>
        <div className="flex justify-center items-center gap-[15rem]">
          <button className="text-lg px-6 py-3 rounded-full bg-green-600 text-white hover:bg-green-700 transition duration-300 ease-in-out">
            Explore
          </button>
          <Link to="/home">
            <button className="text-lg px-6 py-3 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition duration-300 ease-in-out">
              Discover Places
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
