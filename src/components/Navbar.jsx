import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [btnclick, setBtnclick] = useState(false);
  const btnClick = () => {
    setBtnclick(!btnclick);
  };

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className={` ${isOpen ? "block" : "flex"} md:flex items-center shadow-xl fixed top-0 w-full bg-white dark:bg-gray-900 z-10 px-4 py-2 sm:px-8 md:px-12 lg:px-16 md:justify-between lg:justify-around`}>
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
        

        <div className="md:hidden">
        <button className="focus:outline-none" onClick={toggleMenu} >
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






      </div>
      <div
        className={`${
            isOpen ? "block text-center" : "hidden"
          } md:flex md:items-center md:w-auto w-full`}
      >
        <ul
          className={` md:flex md:justify-center md:pt-0 pt-4 list-none`}
        >
          <li className="text-lg hover:text-gray-500 mx-5 my-2 md:my-0" onClick={toggleMenu}>
            <Link to="/">Home</Link>
          </li>
          <li className="text-lg hover:text-gray-500 mx-5 my-2 md:my-0" onClick={toggleMenu}>
            <Link to="/places">Places</Link>
          </li>
          <li className="text-lg hover:text-gray-500 mx-5 my-2 md:my-0" onClick={toggleMenu}>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li className="text-lg hover:text-gray-500 mx-5 my-2 md:my-0" onClick={toggleMenu}>
            <Link to="/Faq">FAQs</Link>
          </li>
          <li className="text-lg hover:text-gray-500 mx-5 my-2 md:my-0" onClick={toggleMenu}>
            <Link to="/register">
              <button className="btn">
                <img
                  src="user.png"
                  style={{
                    width: "22px",
                    Height: "20px",
                  }}
                />
              </button>
            </Link>
          </li>
          {/*<li className="text-lg hover:text-gray-500 mx-5 my-2 md:my-0">
            <Link to="/register">Register</Link>
          </li>
          <li className="text-lg hover:text-gray-500 mx-5 my-2 md:my-0">
            <Link to="/login">Login</Link>
        </li>*/}
          <li className="text-lg hover:text-gray-500 mx-5 my-2 md:my-0" onClick={toggleMenu}>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="text-lg mx-5 my-2 md:my-0 cursor-pointer flex items-center justify-center" onClick={toggleTheme}>
            {theme === "light" ? (
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
