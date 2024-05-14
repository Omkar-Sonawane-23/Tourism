import React from 'react'

const AboutUs = () => {
    return (

        <div className='bg-white w-full mt-[6rem] px-6 sm:px-20 sm:mt-[4rem] relative p-4 md:px-12 lg:px-16 z-2'>


            <h1 className='text-[3rem] sm:text-[5rem] md:text-[6rem] lg:text-[8rem] text-black font-[Agbalumo] opacity-[10%]'>About Us</h1>
            <h2 className='absolute z-3 top-[3.4rem] sm:top-[5rem] md:top-[6rem] lg:top-[7rem] text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-[Agbalumo]'>Welcome to<span id='samarkand' className='text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[4rem]'> Tourism</span></h2>


            <div className='flex flex-col items-start justify-center lg:flex-row lg:justify-start lg:items-center gap-8  md:gap-18 lg:gap-[5vw] 2xl:gap-32 my-2 sm:my-5'>
                <p className='w-full text-[0.8rem] font-normal text-gray-500 leading-[1.1rem] sm:text-[1rem] sm:leading-[1.5rem] md:text-[1rem] md:leading-[1.4rem] lg:w-[30rem] lg:text-[1rem] lg:leading-[1.5rem] xl:w-[45rem] xl:text-[1.2rem] xl:leading-[1.6rem]'>Your ultimate guide to exploring the vibrant tapestry of Indias rich cultural heritage and natural wonders. At Tourism, we are passionate about showcasing the diverse beauty and boundless charm of Indias most iconic destinations. From the majestic Himalayas in the north to the sun-kissed beaches of the south, and from bustling metropolises to serene rural landscapes, India offers an unparalleled array of experiences waiting to be discovered.</p>
                <div className='sm:flex sm:items-center sm:justify-center relative'>
                    <img src='https://images.pexels.com/photos/788943/pexels-photo-788943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='travel-photo' className='rounded-full absolute left-[3rem] sm:left-[0rem] w-[5rem] h-[5rem] sm:w-[6rem] sm:h-[6rem] md:w-[8rem] md:h-[8rem] lg:w-[9rem] lg:h-[9rem] 2xl:w-[10vw] 2xl:h-[20vh]' />
                    <img src='https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='travel-photo' className='rounded-full absolute left-[6rem] sm:left-[5rem] w-[5rem] h-[5rem] sm:w-[6rem] sm:h-[6rem] md:w-[8rem] md:h-[8rem] lg:w-[9rem] lg:h-[9rem] 2xl:w-[10vw] 2xl:h-[20vh]' />
                    <img src='https://images.pexels.com/photos/8112531/pexels-photo-8112531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='travel-photo' className='rounded-full absolute left-[9rem] sm:left-[10rem] w-[5rem] h-[5rem] sm:w-[6rem] sm:h-[6rem] md:w-[8rem] md:h-[8rem] lg:w-[9rem] lg:h-[9rem] 2xl:w-[10vw] 2xl:h-[20vh]' />
                    <img src='https://images.pexels.com/photos/2780309/pexels-photo-2780309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='travel-photo' className='rounded-full absolute left-[12rem] sm:left-[15rem] w-[5rem] h-[5rem] sm:w-[6rem] sm:h-[6rem] md:w-[8rem] md:h-[8rem] lg:w-[9rem] lg:h-[9rem] 2xl:w-[10vw] 2xl:h-[20vh]' />
                    <img src='https://images.pexels.com/photos/749115/pexels-photo-749115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='travel-photo' className='rounded-full  left-[15rem] sm:left-[20rem] w-[5rem] h-[5rem] sm:w-[6rem] sm:h-[6rem] md:w-[8rem] md:h-[8rem] lg:w-[9rem] lg:h-[9rem] 2xl:w-[10vw] 2xl:h-[20vh]' />

                </div>
            </div>


            <div className='bg-white flex flex-col-reverse gap-6 lg:gap-4 xl:gap-0 lg:flex-row items-center justify-center lg:justify-between my-8 lg:my-24'>
                <img src="https://r.mobirisesite.com/436293/assets/images/photo-1596808534583-1072b4a154ba.jpeg" alt="" className='w-full h-[40vw] md:h-[32vw] lg:w-[40vw] lg:h-[12rem] xl:w-[35vw] xl:h-[30vh] rounded-xl' />
                <div className='py-5 px-4 sm:py-8 sm:px-6 md:py-6 md:px-8 lg:py-8 lg:px-8 xl:py-10 xl:px-12 shadow-md shadow-gray-400 rounded-lg'>
                    <p className='text-[0.8rem] leading-[1.2rem] sm:w-full sm:text-[1.2rem] sm:leading-[1.7rem] md:text-[1rem] md:leading-[1.5rem] lg:w-[25rem] lg:text-[1rem] lg:leading-[1.4rem] xl:w-[35rem] xl:text-[1.2rem] text-gray-400 xl:leading-[1.6rem] font-semibold'>Our team of seasoned travelers and local experts has scoured every corner of the country to bring you comprehensive insights into the top attractions, hidden gems, and off-the-beaten-path treasures that make India truly extraordinary. </p></div>
            </div>



            <div className='flex flex-wrap justify-between items-start gap-6 md:justify-evenly md:gap-2 mb-10'>

                <div className='flex flex-col p-6 sm:py-8 sm:px-6 gap-4 items-start md:items-center rounded-2xl shadow-md sm:shadow-lg shadow-slate-200'>
                    <img src="take-off.gif" alt="" className='rounded-full w-[3rem] h-[3rem] sm:w-[8vw] sm:h-[8vw]' />
                    <h1 className='text-[0.8rem] sm:text-[1.2rem] sm:leading-[1.8rem] md:w-[16rem] md:text-[0.8rem] md:leading-[1.4rem] lg:w-[22rem] lg:text-[1rem] font-normal text-gray-500 lg:leading-[1.6rem]'>Whether you are planning a pilgrimage to the spiritual heartlands of Varanasi and Rishikesh, an architectural odyssey through the ancient ruins of Hampi and Khajuraho, or a wildlife safari in the pristine jungles of Ranthambore and Jim Corbett, Tourism is your trusted companion every step of the way.</h1>
                </div>

                <div className='flex flex-col p-6 sm:py-8 sm:px-6 gap-4 items-start md:items-center rounded-2xl shadow-md sm:shadow-lg shadow-slate-200'>
                    <img src="drying.gif" alt="" className='rounded-full w-[3rem] h-[3rem] sm:w-[8vw] sm:h-[8vw]' />
                    <h1 className='text-[0.8rem] sm:text-[1.2rem] sm:leading-[1.8rem] md:w-[16rem] md:text-[0.8rem] md:leading-[1.4rem] lg:w-[22rem] lg:text-[1rem] font-normal text-gray-500 lg:leading-[1.6rem]'>But we do not just stop at providing information; we are here to inspire and empower you to create unforgettable memories that will last a lifetime. From practical travel tips and cultural etiquette to immersive storytelling and breathtaking photography, we aim to ignite your wanderlust and help you craft the journey of your dreams.</h1>
                </div>

                <div className='flex flex-col p-6 sm:py-8 sm:px-6 gap-4 items-start md:items-center rounded-2xl shadow-md sm:shadow-lg shadow-slate-200'>
                    <img src="route.gif" alt="" className='rounded-full w-[3rem] h-[3rem] sm:w-[8vw] sm:h-[8vw]' />
                    <h1 className='text-[0.8rem] sm:text-[1.2rem] sm:leading-[1.8rem] md:w-[16rem] md:text-[0.8rem] md:leading-[1.4rem] lg:w-[22rem] lg:text-[1rem] font-normal text-gray-500 lg:leading-[1.6rem]'>Whether you are a first-time visitor or a seasoned explorer, let Tourism be your gateway to the enchanting world of Indian travel. Join us as we embark on a journey of discovery, celebration, and connection in one of the worlds most captivating destinations.</h1>
                </div>


            </div>






        </div>


    )
}

export default AboutUs
