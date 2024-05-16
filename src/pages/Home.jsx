import React,{useState, useEffect}from 'react'
import Loader from './Loader';
import { Link } from 'react-router-dom'
import bg from '../assets/bg.jpg'

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(()=>{
            setIsLoading(false);
        },2000);
    },[]);

    if(isLoading){
        return <Loader/>
    }
    return (

        <section className='mt-5 flex px-10 py-20 shadow-md ml-10 mr-10'>
            
            <div className='w-1/2'>
                <div className='mr-28 '>
                    <span className='text-[3rem]'>Welcome,</span>
                    {/* <span className='text-[2rem]'> to</span> */}
                    <div className='animate-bounce'>
                    <h1 className='text-[3rem] font-[Agbalumo]'>Bharat <span id='samarkand'>Yatra</span></h1></div>
                </div>
                <div className=''>
                    <button type="button" className="text-white bg-[#002d74] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Explore</button>
                    <Link to='/home'><button type="button" className='text-white bg-[#002d74] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Places</button></Link>

        <div>
        <section className='mt-[5px]'>
            <img src="https://img.freepik.com/premium-vector/mumbai-skyline-landscape-view-city-mumbai-with-characteristics-buildings-monuments_743272-109.jpg?w=4320" className='w-[100vw] h-[100vh] fixed' alt="" />
            <div className='absolute w-full bottom-[5rem]'>
                <div className='flex flex-col justify-center items-center mb-[5rem]'>
                    <span className='text-[3rem]'>Welcome,</span><span className='text-[2rem]'> to</span><h1 className='text-[5rem] ml-[25px] font-[Agbalumo]'>Bharat <span id='samarkand'>Yatra</span></h1>
                </div>
                <div className='flex justify-center items-center gap-[12rem] h-[5.9rem]'>
                    <button className='text-[25px] w-[10rem] h-[2.9rem] rounded-xl bg-[black] text-[white] hover:text-[green] duration-[0.4s]' type="button">Explore</button>
                    <Link to='/home'><button className='text-[25px] w-[10rem] h-[2.9rem] rounded-xl bg-[black] text-[white] hover:text-[green] duration-[0.4s]' type="button">Places</button></Link>

                </div>
            </div>
            <div className='w-1/2 shadow-md py-5 px-5'>
            <img src={bg} className='shadow-md transform transiton duration-300 hover:scale-105 hover:cursor-pointer' alt="" />
            </div>
        </section>
        <footer style={{ backgroundColor: '#f8f9fa', padding: '20px', textAlign: 'center', position: 'absolute', bottom: '0', width: '100%' }}>
                <p>&copy; 2024 Bharat Yatra. All rights reserved.</p>
                <p>Contact Us:1234567892</p>
            </footer>
        </div>
    )
}

export default Home 