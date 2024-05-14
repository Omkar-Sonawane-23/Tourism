import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <section className='flex justify-evenly items-evenly shadow-xl top-0 w-full bg-white z-10 '>
      <style>
  @import url('https://fonts.googleapis.com/css2?family=Agbalumo&family=Montserrat:wght@500&display=swap');
</style>
        <div className='align-left my-auto flex'>
            <h1 className='text-[3rem] ml-[25px] font-[Agbalumo]'>Bharat <span id='samarkand'>Yatra</span></h1>
        </div>
        <div className='flex my-auto'>
            <Link to='/'><li className='list-none text-xl hover:text-gray-500 m-[10px]'><a href="">Home</a></li></Link>
            <Link to=""><li className='list-none text-xl hover:text-gray-500 m-[10px]'><a href="">Places</a></li></Link>
            <Link to=""><li className='list-none text-xl hover:text-gray-500 m-[10px]'><a href="">About Us</a></li></Link>
            <Link to="/login"><li className='list-none text-xl hover:text-gray-500 m-[10px]'><a href="">Login </a></li></Link>
            <Link t0="/signup"><li className='list-none text-xl hover:text-gray-500 m-[10px]'><a href="">Sign up </a></li></Link>
        </div>
    </section>
  )
}

export default Navbar
