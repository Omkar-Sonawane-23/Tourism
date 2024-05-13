import React from 'react'
import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Places', href: '/home', current: false },
  { name: 'Explore', href: '#', current: false },
  { name: 'About Us', href: '/about', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Navbar() {
  return (
    <section className='flex justify-evenly items-evenly shadow-xl fixed top-0 w-full bg-white z-10 '>
      <style>
  @import url('https://fonts.googleapis.com/css2?family=Agbalumo&family=Montserrat:wght@500&display=swap');
</style>
        <div className='align-left my-auto flex'>
            <h1 className='text-[3rem] ml-[25px] font-[Agbalumo]'>Bharat <span id='samarkand'>Yatra</span></h1>
        </div>
        <div className='flex my-auto'>
            <Link to='/'><li className='list-none text-xl hover:text-gray-500 m-[10px]'><a href="">Home</a></li></Link>
            <li className='list-none text-xl hover:text-gray-500 m-[10px]'><a href="">Places</a></li>
            <li className='list-none text-xl hover:text-gray-500 m-[10px]'><a href="">About Us</a></li>
            <Link to='/contact'>
  <li className='list-none text-xl hover:text-gray-500 m-[10px]' style={{ textDecoration: 'none' }}>
    <a href="" style={{ 
      color: '#333', 
      textDecoration: 'none', 
      padding: '10px 20px',
      borderRadius: '5px',
      border: '1px solid #333',
      transition: 'background-color 0.3s ease',
    }}>
      Contact Us
    </a>
  </li>
</Link>

        </div>
    </section>
  )
}

export default Navbar