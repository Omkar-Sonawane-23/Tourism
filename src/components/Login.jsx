import React from 'react'
import tour from '../assets/tour.jpg'
const Login = () => {
  return (
  <>
    <section className='bg-gray-50 min-h-screen flex items-center justify-center'>
{/* login contianer */}
        <div className='bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5'>
        {/* form */}
        <div className='w-1/2'>
        <h2 className='font-bold'>Login to join us...</h2>
        <p>If you already a member, easily log in</p>
        <form action=''>
            <input type='text' name='email' placeholder='Email'></input>
            <input type='password' name='password' placeholder='Password'></input>
            <button>Log In</button>
        </form>