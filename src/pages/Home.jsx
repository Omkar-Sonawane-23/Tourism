import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import Navbar from "../components/Navbar";
import bg from "../assets/bg.jpg";
import Footer from "./Footer";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate a data fetching process
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  } else {
    return (
      <>
      <div>
        <Navbar />
        <section className="mt-[5px]">
          <img
            src="https://img.freepik.com/premium-vector/mumbai-skyline-landscape-view-city-mumbai-with-characteristics-buildings-monuments_743272-109.jpg?w=4320"
            className="w-[100vw] h-[100vh] fixed"
            alt=""
          />
          <div className="absolute w-full bottom-[5rem]">
            <div className="flex flex-col justify-center items-center sm:mb-[5rem] mb-[0rem]">
              <span className="text-[3rem]">Welcome,</span>
              <span className="text-[2rem]"> to</span>
              <h1 className="text-[5rem] sm:ml-[25px] text-center font-[Agbalumo]">
                Bharat <span id="samarkand">Yatra</span>
              </h1>
            </div>
            <div className="flex justify-center items-center sm:gap-[12rem] sm:h-[5.9rem] h-[11rem] sm:flex-row flex-col gap-[20px] ">
              <Link to="/explore">
                <button
                  className="text-[25px] w-[10rem] h-[2.9rem] rounded-xl bg-[black] text-[white] hover:text-[green] duration-[0.4s]"
                  type="button"
                >
                  Explore
                </button>
              </Link>
              <Link to="/places">
                <button
                  className="text-[25px] w-[10rem] h-[2.9rem] rounded-xl bg-[black] text-[white] hover:text-[green] duration-[0.4s]"
                  type="button"
                >
                  Places
                </button>
              </Link>
            </div>
          </div>
        </section>
       
      </div>
<Footer />
      </>
    );
  }
};

export default Home;
