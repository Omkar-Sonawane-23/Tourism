// Home.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ModeContext from '../components/ModeContext';
import bg from '../assets/bg.jpg';

const Home = () => {
  const { theme, toggleTheme } = useContext(ModeContext);

  return (
    <div>
      <section className="mt-[5px]">
        <img src={bg} className="w-[100vw] h-[100vh] fixed" alt="" />
        <div className="absolute w-full bottom-[5rem]">
          <div className="flex flex-col justify-center items-center mb-[5rem]">
            <span className="text-[3rem]">Welcome,</span>
            <span className="text-[2rem]"> to</span>
            <h1 className="text-[5rem] ml-[25px] font-[Agbalumo]">
              Bharat <span id="samarkand">Yatra</span>
            </h1>
          </div>
          <div className="flex justify-center items-center gap-[12rem] h-[5.9rem]">
            <Link to="/explore">
              <button className="text-[25px] w-[10rem] h-[2.9rem] rounded-xl bg-[black] text-[white] hover:text-[green] duration-[0.4s]" type="button">
                Explore
              </button>
            </Link>
            <Link to="/places">
              <button className="text-[25px] w-[10rem] h-[2.9rem] rounded-xl bg-[black] text-[white] hover:text-[green] duration-[0.4s]" type="button">
                Places
              </button>
            </Link>
          </div>
        </div>
      </section>
      <footer style={{ backgroundColor: theme === 'dark' ? '#343a40' : '#f8f9fa', padding: '20px', textAlign: 'center', position: 'absolute', bottom: '0', width: '100%' }}>
        <p>&copy; 2024 Bharat Yatra. All rights reserved.</p>
        <p>Contact Us:1234567892</p>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </footer>
    </div>
  );
};

export default Home;
