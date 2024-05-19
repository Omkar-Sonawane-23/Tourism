import React, {useState, useEffect} from 'react';
import bg from '../assets/bg-home1.webp';
import kerala from '../assets/kerala.jpg';
import varanasi from '../assets/varanasi.jpg';
import jaipur from '../assets/jaipur.webp';
import kolkata from '../assets/kolkata.jpg';
import Loader from './Loader';
import "../styles/home.css";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  } else {

  return (
    <div className='home' id="home-page">
      <img src={bg} alt="" className="home-bg" />
      <div className="home-container grid">
        <div className="home-data">
          <h3 className="home-subtitle">Welcome To <span className="text-[1.4rem] font-[Agbalumo]" id="loadLogo">Bharat <span id="samarkand">Yatra</span></span></h3>
          <h1 className="home-title">Discover India</h1>
          <p className='home-description'>One Stop Destination for Exploring India's Diverse Wonders!</p>
          <a href="/home" className='button'>Explore</a>
        </div>
        <div className='card'>
        <div className="home-cards">
          <article className="home-card">
            <img src={kerala} alt="" className="home-card-img" />
            <h3 className="home-card-title">Kerala</h3>
          </article>
          <article className="home-card">
            <img src={varanasi} alt="" className="home-card-img" />
            <h3 className="home-card-title">Varanasi</h3>
          </article>
          <article className="home-card">
            <img src={jaipur} alt="" className="home-card-img" />
            <h3 className="home-card-title">Jaipur</h3>
          </article>
          <article className="home-card">
            <img src={kolkata} alt="" className="home-card-img" />
            <h3 className="home-card-title">Kolkata</h3>
          </article>
        </div>
        </div>
      </div>
    </div>
  )}
}

export default Home
