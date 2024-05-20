import React, {useState} from 'react';
import '../styles/aboutus.css';
import activity from '../assets/activities.png'
import activityhover from '../assets/activitieshover.png'
import event from '../assets/event.png'
import eventhover from '../assets/eventhover.png'
import explore from '../assets/explore.png'
import explorehover from '../assets/explorehover.png'
import season from '../assets/season.png'
import seasonhover from '../assets/seasonhover.png'

const AboutUs = () => {
    const [exploreHover, setExploreHover] = useState(false);
    const [activityHover, setActivityHover] = useState(false);
    const [eventHover, setEventHover] = useState(false);
    const [seasonHover, setSeasonHover] = useState(false);

  return (
    <div id='about-us' >
    <h1 className='about-us-heading'>About Us</h1>
    <div className='about-us-block'>
        <div className='about-us-community' onMouseOver={()=>setExploreHover(true)} onMouseLeave={()=>setExploreHover(false)}>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <img src={exploreHover ? explorehover : explore} alt="" style={{marginLeft: '1rem', marginTop: '1rem', width: '3rem'}}/>
                <div className='about-us-blk-text'>Discover India</div>
            </div>
            <p className='about-us-blk-para'>If you’re looking for popular tourist spots or hidden gems, BharatYatra offers a curated list of places that cater to all interests. With the ability to search and filter destinations, you can easily plan your travel and ensure you experience the rich cultural, magnificient architecture and natural tapestry that India has to offer.</p>
        </div>
        <div className='about-us-product' onMouseOver={()=>setActivityHover(true)} onMouseLeave={()=>setActivityHover(false)}>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <img src={activityHover ? activityhover : activity} alt="" style={{marginLeft: '1rem', marginTop: '1rem', width: '3rem'}}/>
                <div className='about-us-blk-text'>Activity Highlights</div>
            </div>
            <p className='about-us-blk-para'>Whether you’re into trekking in the Himalayas, diving in the Andaman Islands, or practicing yoga in Rishikesh, BharatYatra provides detailed information on the best activities to try. You can discover new adventures, learn about local traditions, and find relaxation spots, all tailored to enhance your travel experiences. </p>
        </div>
    </div>
    <div className='about-us-block'>
        <div className='about-us-location' onMouseOver={()=>setEventHover(true)} onMouseLeave={()=>setEventHover(false)}>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <img src={eventHover ? eventhover : event} alt="" style={{marginLeft: '1rem', marginTop: '1rem', width: '3rem'}}/>
                <div className='about-us-blk-text'>Major Events</div>
            </div>
            <p className='about-us-blk-para'>From vibrant festivals like Diwali and Holi to cultural exhibitions, music concerts, and local fairs, we ensur that travelers don't miss out on unique experiences. By participating in these events, you can immerse themselves in local culture, witness traditional celebrations, and create unforgettable memories during your journey.</p>
        </div>
        <div className='about-us-event' onMouseOver={()=>setSeasonHover(true)} onMouseLeave={()=>setSeasonHover(false)}>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <img src={seasonHover ? season : seasonhover} alt="" style={{marginLeft: '1rem', marginTop: '1rem', width: '3rem'}}/>
                <div className='about-us-blk-text'>Ideal Season</div>
            </div>
            <p className='about-us-blk-para'>Detailed timelines suggest the perfect months to visit each place, factoring in climate conditions and peak tourist seasons. Additionally, it informs you about specific events and festivals occurring throughout the year, allowing you to plan your trips to coincide with these vibrant celebrations, enhancing your overall travel experience.</p>
        </div>
    </div>
    </div>
  )
}

export default AboutUs