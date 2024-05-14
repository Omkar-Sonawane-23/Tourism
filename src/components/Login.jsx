import React from 'react'
import tour from '../assets/tour.jpg'
const Login = () => {
  return (
  <>
    <section className='bg-gray-50 min-h-screen flex items-center justify-center'>
{/* login contianer */}
        <div className='bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5'>
        {/* form */}
        <div className='sm:w-1/2 px-16'>
        <h2 className='font-bold mb-2'>Login to join us...</h2>
        <p>Welcome</p>
        <form action='' className='flex flex-col gap-4'>
            <input type='text' name='email' placeholder='Email' className='p-2 mt-5 rounded-xl border'></input>
            <input type='password' name='password' placeholder='Password' className='p-2 rounded-xl border'></input>
            <button className='bg-[#002D74] rounded-xl text-white py-2'>Log In</button>
        </form>
        <div className='mt-5 grid grid-cols-3 items-center text-gray-400'>
            <hr className='border-gray-400'></hr>
            <p className='text-center text-sm'>OR</p>
            <hr className='border-gray-400'></hr>
        </div>
        <button className='bg-white border py-2 px-12 rounded-xl mt-5 flex justify-center items-center text-sm'><span className='mr-2' class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#ea4335]">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
    
      <path
        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
    </svg>
  </span>Login with Google</button>
        <p className='mt-2 text-xs border-b border-gray-400 py-4'>Forget your password?</p>
        <div className='mt-3 text-xs flex justify-between items-center'><p>Don't have an account..</p>
        <button className='py-3 px-3 bg-white border rounded'>Sign up</button></div>
        </div>
    {/* image-container */}
        <div className='sm:block hidden w-1/2'>
    <img src={tour} alt='tour-image' className=' rounded-2xl'></img>
        </div>
        </div>

    </section>
  </>
  )
}

export default Login