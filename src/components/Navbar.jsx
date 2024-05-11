import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <section className='flex flex-row justify-around items-evenly gap-20 shadow-xl fixed top-0 w-full bg-[#e5e5e5]  z-10 '>
      <style>
  @import url('https://fonts.googleapis.com/css2?family=Agbalumo&family=Montserrat:wght@500&display=swap');
</style>
        <div className='align-left my-auto flex'>
            <h1 className='text-[3rem] ml-[25px] font-[Agbalumo]'>Bharat <span id='samarkand'>Yatra</span></h1>
        </div>
        <div className='flex flex-row gap-10 items-center text-black font-bold'>
            <Link to='/'><div className='text-2xl border-transparent px-3 py-2 hover:text-white hover:bg-[#020617] hover:rounded-lg'><a href="">Home</a></div></Link>
            <div className='text-2xl border-transparent px-4 py-3 hover:text-white hover:bg-[#020617] hover:rounded-lg'><a href="">Places</a></div>
            <div className='text-2xl border-transparent px-4 py-3 hover:text-white hover:bg-[#020617] hover:rounded-lg'> <a href="">About Us</a></div>
        </div>
    </section>
  )
}

export default Navbar