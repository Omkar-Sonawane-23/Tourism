import React, { useState } from 'react';
import activity from '../assets/activities.png';
import activityhover from '../assets/activitieshover.png';
import event from '../assets/event.png';
import eventhover from '../assets/eventhover.png';
import explore from '../assets/explore.png';
import explorehover from '../assets/explorehover.png';
import season from '../assets/season.png';
import seasonhover from '../assets/seasonhover.png';
import Footer from './Footer';  
import '../styles/aboutus.css';

const AboutUs = () => {
  const [exploreHover, setExploreHover] = useState(false);
  const [activityHover, setActivityHover] = useState(false);
  const [eventHover, setEventHover] = useState(false);
  const [seasonHover, setSeasonHover] = useState(false);

  return (
    <>
      <div id="about-us" className="flex flex-col gap-4 px-4 lg:px-20">
        <h1 className="about-us-heading">About Us</h1>
        <div className="about-us-block">
          <div 
            className="about-us-community"
            onMouseOver={() => setExploreHover(true)} 
            onMouseLeave={() => setExploreHover(false)}
          >
            <div className="flex items-center gap-4">
              <img 
                src={exploreHover ? explorehover : explore} 
                alt="" 
                className="ml-4 mt-4 w-12" 
              />
              <div className="about-us-blk-text">Discover India</div>
            </div>
            <p className="about-us-blk-para">
              If you’re looking for popular tourist spots or hidden gems, BharatYatra offers a curated list of places that cater to all interests. With the ability to search and filter destinations, you can easily plan your travel and ensure you experience the rich cultural, magnificent architecture, and natural tapestry that India has to offer.
            </p>
          </div>
          <div 
            className="about-us-product"
            onMouseOver={() => setActivityHover(true)} 
            onMouseLeave={() => setActivityHover(false)}
          >
            <div className="flex items-center gap-4">
              <img 
                src={activityHover ? activityhover : activity} 
                alt="" 
                className="ml-4 mt-4 w-12" 
              />
              <div className="about-us-blk-text">Activity Highlights</div>
            </div>
            <p className="about-us-blk-para">
              Whether you’re into trekking in the Himalayas, diving in the Andaman Islands, or practicing yoga in Rishikesh, BharatYatra provides detailed information on the best activities to try. You can discover new adventures, learn about local traditions, and find relaxation spots, all tailored to enhance your travel experiences.
            </p>
          </div>
        </div>
        <div className="about-us-block">
          <div 
            className="about-us-location"
            onMouseOver={() => setEventHover(true)} 
            onMouseLeave={() => setEventHover(false)}
          >
            <div className="flex items-center gap-4">
              <img 
                src={eventHover ? eventhover : event} 
                alt="" 
                className="ml-4 mt-4 w-12" 
              />
              <div className="about-us-blk-text">Major Events</div>
            </div>
            <p className="about-us-blk-para">
              From vibrant festivals like Diwali and Holi to cultural exhibitions, music concerts, and local fairs, we ensure that travelers don't miss out on unique experiences. By participating in these events, you can immerse yourself in local culture, witness traditional celebrations, and create unforgettable memories during your journey.
            </p>
          </div>
          <div 
            className="about-us-event"
            onMouseOver={() => setSeasonHover(true)} 
            onMouseLeave={() => setSeasonHover(false)}
          >
            <div className="flex items-center gap-4">
              <img 
                src={seasonHover ? season : seasonhover} 
                alt="" 
                className="ml-4 mt-4 w-12" 
              />
              <div className="about-us-blk-text">Ideal Season</div>
            </div>
            <p className="about-us-blk-para">
              Detailed timelines suggest the perfect months to visit each place, factoring in climate conditions and peak tourist seasons. Additionally, it informs you about specific events and festivals occurring throughout the year, allowing you to plan your trips to coincide with these vibrant celebrations, enhancing your overall travel experience.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
