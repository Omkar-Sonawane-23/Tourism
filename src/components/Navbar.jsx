import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <section className='flex justify-evenly items-evenly shadow-md top-0 w-full bg-white z-10 '>
      <style>
  @import url('https://fonts.googleapis.com/css2?family=Agbalumo&family=Montserrat:wght@500&display=swap');
</style>
        <div className='align-left my-auto flex'>
            <h1 className='text-[3rem] ml-[25px] font-[Agbalumo]'>Bharat <span id='samarkand'>Yatra</span></h1>
        </div>
        <div className='flex my-auto'>
            <Link to='/' className='list-none text-xl text-[#002d74] hover:text-blue-500 font-bold m-[10px]'>Home</Link>
            <Link to='/' className='list-none text-xl text-[#002d74]  hover:text-blue-500 font-bold m-[10px]'>Places</Link>
            <Link to='/' className='list-none text-xl text-[#002d74] m-[10px]  hover:text-blue-500 font-bold'>About Us</Link>
            <Link to='/login'className='list-none text-xl text-white bg-[#002d74] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Login</Link>
            <Link to='/signup' className='list-none text-xl text-white bg-[#002d74] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Sign up</Link>
        </div>
    </section>
  )
}

export default Navbar