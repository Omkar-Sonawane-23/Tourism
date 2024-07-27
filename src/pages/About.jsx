import React from 'react'
 function About() {
    return(
        <>
        <div className='flex flex-col font-Poppins items-center about'>
            <div className='my-[40px] w-[650px]'>
            <h1 className='text-2xl'>About Bharat Yatra</h1>
        <p className='mt-2'>Welcome to Bharat Yatra, your gateway to exploring the vibrant cultures, rich history, and breathtaking landscapes of India.</p>
        <h1 className='text-2xl mt-5'>Our Mission</h1>
        <p className='mt-2'>At Bharat Yatra, our mission is to promote and showcase the beauty and diversity of India through immersive travel experiences. We believe in creating memorable journeys that leave a lasting impact on our travelers and contribute positively to local communities.</p>
        <h1 className='text-xl mt-5 '>Discover India with Bharat Yatra</h1>
        <ul className='list-disc'><li className='ml-6 mt-2'><strong>Cultural Immersion:</strong> Immerse yourself in the traditions, arts, and cuisines of India's diverse regions.</li>
        <li className='ml-6 mt-2'><strong>Historical Exploration:</strong> Uncover the historical marvels, ancient monuments, and UNESCO World Heritage sites scattered across the country.</li>
        <li className='ml-6 mt-2'><strong>Natural Wonders:</strong> Explore the natural beauty of India, from majestic mountains to serene beaches and lush forests.
</li>
        <li className='ml-6 mt-2'><strong>Spiritual Journeys:</strong> Embark on spiritual pilgrimages to renowned temples, ashrams, and sacred sites.</li></ul>
        <h1 className='text-xl mt-5 '>Why Choose Bharat Yatra?</h1>
        <ul className='list-disc'>
        <li className='ml-6 mt-2'><strong>Expert Guidance:</strong> Our team of experienced guides and travel experts ensures a seamless and enriching travel experience.</li>
        <li className='ml-6 mt-2'><strong>Customized Itineraries:</strong> We tailor our itineraries to match your interests, preferences, and travel style.</li>
        <li className='ml-6 mt-2'><strong>Sustainable Tourism:</strong> We are committed to responsible and sustainable tourism practices that respect local cultures and environments.</li>
        <li className='ml-6 mt-2'><strong>Safety and Comfort:</strong> Your safety and comfort are our top priorities, with carefully curated accommodations and transportation options.</li>
        </ul>
        <h1 className='text-xl mt-5 '>Join Us on an Unforgettable Journey</h1>
        <p className='mt-2'>Whether you're a solo traveler, a family seeking adventure, or a group of friends exploring together, Bharat Yatra invites you to embark on a journey of discovery and wonder across the incredible landscapes of India.</p>
</div>
        </div>
        <Footer />
        </>
    )
 }
 export default About;