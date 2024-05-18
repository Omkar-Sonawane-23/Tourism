import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="flex items-center shadow-xl fixed top-0 w-full bg-white z-10 px-4 py-2 sm:px-8 md:px-12 lg:px-16 md:justify-between lg:justify-around">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Agbalumo&family=Montserrat:wght@500&display=swap');
      </style>
      <div className="flex items-center justify-between w-full md:w-auto">
        <Link to="/">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-[Agbalumo] mr-4">
            Bharat <span id="samarkand">Yatra</span>
          </h1>
        </Link>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex md:items-center md:w-auto w-full`}
      >
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:justify-center md:pt-0 pt-4 list-none`}
        >
          <li className="text-lg hover:text-gray-500 mx-5 my-2 md:my-0">
            <Link to="/">Home</Link>
          </li>
          <li className="text-lg hover:text-gray-500 mx-5 my-2 md:my-0">
            <Link to="/home">Places</Link>
          </li>
          <li className="text-lg hover:text-gray-500 mx-5 my-2 md:my-0">
            <Link to="/aboutus">About Us</Link>
          </li>
          <li className="text-lg hover:text-gray-500 mx-5 my-2 md:my-0">
            <Link to="/Faq">FAQs</Link>
          </li>          
          <li className="text-lg hover:text-gray-500 mx-5 my-2 md:my-0">
            <Link to="/register"><button className='btn'><img src="user.png" style={{
              width:'22px',
              Height:'20px',
            }}/></button></Link>
          </li>
          {/*<li className="text-lg hover:text-gray-500 mx-5 my-2 md:my-0">
            <Link to="/register">Register</Link>
          </li>
          <li className="text-lg hover:text-gray-500 mx-5 my-2 md:my-0">
            <Link to="/login">Login</Link>
        </li>*/}
          <li className="text-lg hover:text-gray-500 mx-5 my-2 md:my-0">
            <Link to="/contact">Contact Us</Link>
          </li>          
        </ul>
      </div>
      <div className="md:hidden">
        <button className="focus:outline-none" onClick={toggleMenu}>
          <svg
            className={`w-6 h-6 ${isOpen ? "hidden" : "block"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            className={`w-6 h-6 ${isOpen ? "block" : "hidden"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar
