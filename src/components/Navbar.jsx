import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ModeContext from './ModeContext';

function Navbar() {
  const { mode, toggleMode } = useContext(ModeContext);

  const navbarStyle = {
    backgroundColor: mode === 'light' ? 'white' : 'black',
    color: mode === 'light' ? 'black' : 'white',
  };

  return (
    <section className={`flex justify-evenly items-evenly shadow-xl fixed top-0 w-full z-10`} style={navbarStyle}>
      <div className='align-left my-auto flex'>
        <h1 className='text-[3rem] ml-[25px] font-[Agbalumo]'>Bharat <span id='samarkand'>Yatra</span></h1>
      </div>
      <div className='flex my-auto'>
        <Link to='/'><li className='list-none text-xl hover:text-gray-500 m-[10px]'><a href="">Home</a></li></Link>
        <Link to='/places'><li className='list-none text-xl hover:text-gray-500 m-[10px]'><a href="">Places</a></li></Link>
        <Link to='contact'><li className='list-none text-xl hover:text-gray-500 m-[10px]'><a href="">Contact Us</a></li></Link>
      </div>
      <button onClick={toggleMode}>Change Mode</button>
    </section>
  );
}

export default Navbar;
