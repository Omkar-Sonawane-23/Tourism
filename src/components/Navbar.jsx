import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <section className='flex justify-evenly items-evenly shadow-xl fixed top-0 w-full bg-white z-10 '>
      <style>
  @import url('https://fonts.googleapis.com/css2?family=Agbalumo&family=Montserrat:wght@500&display=swap');
  @import url('https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css');
</style>
        <div className='align-left my-auto flex'>
            <h1 className='text-[3rem] ml-[25px] font-[Agbalumo]'>Bharat <span id='samarkand'>Yatra</span></h1>
        </div>
        <div className='flex my-auto'>
            <Link to='/'><li className='list-none text-xl hover:text-gray-500 m-[10px]'><a href=""><i class="ri-home-fill"></i> Home</a></li></Link>
            <li className='list-none text-xl hover:text-gray-500 m-[10px]'><a href=""><i class="ri-landscape-fill"></i> Places</a></li>
            <li className='list-none text-xl hover:text-gray-500 m-[10px]'><a href=""><i class="ri-customer-service-2-fill"></i> About Us</a></li>
        </div>
    </section>
  )
}

export default Navbar