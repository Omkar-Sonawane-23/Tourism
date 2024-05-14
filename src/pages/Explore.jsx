import React from 'react';
import Carousel from '../components/Carousel';
import './Explore.css'

const Explore = () => {
  const images = [
    'https://wallpaperaccess.com/full/5773.jpg',
    'https://wallpaperaccess.com/full/8207022.jpg',
    'https://wallpaperaccess.com/full/4455652.jpg',
    // Add more image URLs as needed
  ];

  return (
    <div>
      <h1>My Component</h1>
      <Carousel images={images} />
      <button className='btn'>Learn More</button>
    </div>
  );
};

export default Explore;
