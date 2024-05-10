import React from 'react'
import { Link } from 'react-router-dom'
import bg from '../assets/bg.jpg'

const Home = () => {
    return (
        <section className=''>
    <img src="https://img.freepik.com/premium-vector/mumbai-skyline-landscape-view-city-mumbai-with-characteristics-buildings-monuments_743272-109.jpg?w=4320" className='w-screen h-screen fixed' alt="" />
    <div className='absolute w-full pt-5 '>
        <div className='flex flex-col justify-center items-center mb-40 md:mb-10'>
            <span className=' text-[2rem] md:text-[3rem]'>Welcome,</span><span className='text-[2rem]'> to</span><h1 className=' ml-6 text-[5rem] md:ml-25 font-[Agbalumo]'>Bharat <span id='samarkand'>Yatra</span></h1>
        </div>
        
        <div className='flex  justify-center items-center gap-[15rem]'>
            <button className='text-[25px] w-[10rem] h-[2.9rem] rounded-xl bg-[black] text-[white] hover:text-[green] duration-[0.4s]' type="button">Explore</button>
            <Link to='/places'><button className='text-[25px] w-[10rem] h-[2.9rem] rounded-xl bg-[black] text-[white] hover:text-[green] duration-[0.4s]' type="button">Places</button></Link>
        </div>
    </div>
</section>
    )
}

export default Home