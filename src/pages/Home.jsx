import React from 'react';
import banner from '../assets/home-banner-background.png'
import '../styles/home.css'
import { FiArrowRight } from 'react-icons/fi';
import varanasi from '../assets/varanasi.jpg';
import delhi from '../assets/delhi.jpg';
import kolkata from '../assets/kolkata.jpg';

const Home = () => {
  return (
    <div className='home-banner-container'>
      <div className="home-bannerImage-container">
        <img src={banner} alt="" />
      </div>
      <div className='home-text-section'>
        <h3 className='primary-subheading'>Welcome to</h3>
        <h1 className='primary-heading'><span className="text-[5rem] font-[Agbalumo]" id="loadLogo">Bharat <span id="samarkand">Yatra</span></span></h1>
        <p className='primary-text'>One Stop Destination for Exploring India's Diverse Wonders!</p>
        <button className='primary-button'>Explore Now <FiArrowRight/> </button>
      </div>
      <div className="home-image-section">
          <img src={kolkata} alt="" className='home-image'/>
          <div className='home-images'>
          <img src={varanasi} alt="" className='home-image-sub'/>
          <img src={delhi} alt="" className='home-image-sub'/>
          </div>
      </div>
    </div>
  )
}

export default Home