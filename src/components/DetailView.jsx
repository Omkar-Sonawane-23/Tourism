import React, { useEffect, useState } from 'react';
import Details from './Details';
import Detailed from '../../Data/Detailed.json';

const DetailView = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const id = extractIdFromPathname();
    if (id !== null) {
      setData(Detailed.destinations[id]);
    }
  }, []);

  function extractIdFromPathname() {
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get("id");
    return id ? parseInt(id, 10) : null;
  }

  return (
    <section className="relative overflow-hidden">
      {data && (
        <div className='relative flex flex-col lg:flex-row items-center justify-center'>
          <img src={data.image} className='w-full lg:w-1/2 h-auto object-cover z-0' alt={data.name} />
          <div className='lg:w-1/2 lg:ml-10 px-4 py-8 lg:py-0 bg-white bg-opacity-90 backdrop-blur-lg rounded-lg lg:sticky lg:top-20'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl text-gray-900 font-bold text-center mb-4'>{data.name}</h1>
            <p className='text-gray-700 text-lg italic mb-4'>{data.location}</p>
            <p className='text-gray-700 text-lg mb-8 max-w-md px-4 text-center'>{data.description}</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div>
                <h2 className='text-lg font-bold mb-2'>Category:</h2>
                <p className='text-gray-700'>{data.category}</p>
              </div>
              <div>
                <h2 className='text-lg font-bold mb-2'>Best Time to Visit:</h2>
                <p className='text-gray-700'>{data.bestTimeToVisit}</p>
              </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4'>
              <div>
                <h2 className='text-lg font-bold mb-2'>Popular Activities:</h2>
                <ul className='list-disc pl-4'>
                  {data.popularActivities.map((activity, index) => (
                    <li key={index} className='text-gray-700'>{activity}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className='text-lg font-bold mb-2'>Nearby Attractions:</h2>
                <ul className='list-disc pl-4'>
                  {data.nearbyAttractions.map((attraction, index) => (
                    <li key={index} className='text-gray-700'>{attraction}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      <Details />
    </section>
  );
}

export default DetailView;
