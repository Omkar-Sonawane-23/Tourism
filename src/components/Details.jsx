import React from 'react';
import { Link } from 'react-router-dom';
import Detailed from '../../Data/Detailed.json';

const Details = () => {
    function extractIdFromPathname() {
        const searchParams = new URLSearchParams(window.location.search);
        const id = searchParams.get("id");
        return id ? parseInt(id, 10) : null;
    }

    const id = extractIdFromPathname();
    const data = Detailed.destinations;
    const eventDetails = id !== null ? data[id].happeningEvents : [];

    return (
        <div className='pt-20 flex flex-col items-center '>
            <h1 className='text-3xl sm:text-4xl mb-8 text-center'>Checkout Latest Events</h1>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {eventDetails.map((event, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden transform transition-all hover:scale-105">
                                <img className="w-full h-48 object-cover object-center" src={event.image} alt="event" />
                                <div className="p-6 bg-gray-800">
                                    <h2 className="text-xs font-medium text-gray-400 mb-1">{event.date}</h2>
                                    <h1 className="text-lg font-medium text-white mb-3">{event.eventName}</h1>
                                    <p className="leading-relaxed mb-3 text-gray-400">{event.description}</p>
                                    <Link to={event.exploreLink} className="text-indigo-500 inline-flex items-center">Explore
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='bg-white bg-opacity-50 rounded-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mt-8 p-8'>
                        <h1 className='text-3xl text-black mb-4'>Travel Tips:</h1>
                        <ul className='text-lg text-black'>
                            {data[0].travelTips.map((tip, index) => (
                                <li key={index} className='mb-2'><a href={tip.link} target="_blank" rel="noopener noreferrer">{tip.text}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Details;
