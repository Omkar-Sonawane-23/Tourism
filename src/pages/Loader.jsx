import React from 'react'
import loader from '../assets/loader.gif';
const Loader = () => {
  return (
    <div className='mt-10'>
    <img src={loader} className='rounded-full h-auto max-w-xl mx-auto shadow-xl dark:shadow-gray-800'></img>
    </div>
  )
}

export default Loader