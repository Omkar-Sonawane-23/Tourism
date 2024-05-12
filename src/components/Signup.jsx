import React from 'react'
import women from '../assets/women.jpg';
const Signup = () => {
  return (
    <>
    <section className='bg-gray-50 min-h-screen flex items-center justify-center'>
{/* login contianer */}
        <div className='bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5'>
        {/* form */}
        <div className='sm:w-1/2 px-16'>
        <h1 className='font-bold'>Welcome</h1>
        <form action='' className='flex flex-col gap-4'>
            <input type='text' name='First Name' placeholder='First Name' className='p-2 mt-8 rounded-xl border'></input>
            <input type='text' name='Last Name' placeholder='Last Name' className='p-2 mt-2 rounded-xl border'></input>
            <input type='text' name='email' placeholder='Email' className='p-2 mt-2 rounded-xl border'></input>
            <input type='password' name='password' placeholder='Password' className='p-2 rounded-xl border'></input>
            <button className='bg-[#002D74] rounded-xl text-white py-2'>Sign In</button>
        </form>
        <div className='mt-5 grid grid-cols-3 items-center text-gray-400'>
            <hr className='border-gray-400'></hr>
            <p className='text-center text-sm'>OR</p>
            <hr className='border-gray-400'></hr>

            <button 
  type="button"
  data-twe-ripple-init
  data-twe-ripple-color="light"
  class="mb-2 mr-3 mt-3 inline-block rounded bg-[#1877f2] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
  <span class="[&>svg]:h-4 [&>svg]:w-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 320 512">
    
      <path
        d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
    </svg>
  </span>
</button>
<button
  type="button"
  data-twe-ripple-init
  data-twe-ripple-color="light"
  class="mb-2 mr-3 mt-3 inline-block rounded bg-[#ea4335] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
  <span class="[&>svg]:h-4 [&>svg]:w-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 488 512">
   
      <path
        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
    </svg>
  </span>
</button>
<button
  type="button"
  data-twe-ripple-init
  data-twe-ripple-color="light"
  class="mb-2 mr-3 mt-3 inline-block rounded bg-black px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
  <span class="[&>svg]:h-4 [&>svg]:w-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 512 512">
      <path
        d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
    </svg>
  </span>
</button>

        </div>
        </div>
    {/* image-container */}
        <div className='sm:block hidden w-1/2'>
    <img src={women} alt='women-image' className=' rounded-2xl'></img>
        </div>
        </div>

    </section>
  </>
  )
}

export default Signup