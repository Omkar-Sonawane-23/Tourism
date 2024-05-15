import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="relative flex flex-col items-center">
      <div className="w-full h-screen flex justify-center items-center">
        <img
          src="https://img.freepik.com/premium-vector/mumbai-skyline-landscape-view-city-mumbai-with-characteristics-buildings-monuments_743272-109.jpg?w=4320"
          className="w-full h-full object-cover"
          alt=""
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="mb-10 text-center">
            <span className="text-3xl md:text-4xl lg:text-5xl">Welcome,</span>
            <span className="text-2xl md:text-3xl lg:text-4xl">to</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl ml-6 font-[Agbalumo]">
              Bharat <span id="samarkand">Yatra</span>
            </h1>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
            <button
              className="text-lg md:text-xl lg:text-2xl w-40 md:w-48 lg:w-64 h-8 md:h-10 lg:h-14 rounded-xl bg-black text-white hover:text-[green] duration-[0.4s]"
              type="button"
            >
              Explore
            </button>
            <Link to="/home">
              <button
                className="text-lg md:text-xl lg:text-2xl w-40 md:w-48 lg:w-64 h-8 md:h-10 lg:h-14 rounded-xl bg-black text-white hover:text-[green] duration-[0.4s]"
                type="button"
              >
                Places
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home