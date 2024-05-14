
import React from 'react'
import { Link } from 'react-router-dom'
=======
import React, { useState } from 'react';
import Places from './Places';

const Explore = () => {
  const [selectedFilter, setSelectedFilter] = useState('');
  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };
  const filteredPlaces = selectedFilter ? Places[selectedFilter] : [];

  return (

    <section>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '115vh', boxShadow: '1 4px 8px rgba(1, 0, 0, 0.5)', borderRadius: '8px' }}>
            <div>
                <select name="By Place" id="">
                    <option value="1">maharastra</option>
                    <option value="2">Gujarat</option>
                    <option value="3">Himachal</option>
                    <option value="4">kashmir</option>
                    <option value="5">jammu</option>
                    <option value="6"></option>
                    <option value="7"></option>
                    <option value="8"></option>
                    <option value="9"></option>
                </select>
            </div>
            <div>
            <select name="By Catagory" id="">
                    <option value="1">Historical</option>
                    <option value="2">Thriller</option>
                    <option value="3">Romantic</option>
                    <option value="4">Calmer</option>
                    <option value="5">jammu</option>
                    <option value="6"></option>
                    <option value="7"></option>
                    <option value="8"></option>
                    <option value="9"></option>
                </select>
            </div>
        </div>
        <Link to='/explore'><button className='text-[25px] w-[10rem] h-[2.9rem] rounded-xl bg-[black] text-[white] hover:text-[green] duration-[0.4s]' type="button">Explore</button></Link>
=======
    <section className="flex flex-col justify-center items-center h-screen mt-8"> 
      <div className="max-w-screen-lg w-full">
        <h2 className="text-2xl text-center font-semibold mb-4">Explore</h2>
      </div>
      <div className="max-w-screen-lg w-full mb-4">
        <select
          value={selectedFilter}
          onChange={handleFilterChange}
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
        >
          <option value="">Select Category</option>
          <option value="Historical">Historical</option>
          <option value="Thriller">Thriller</option>
          <option value="Calmer">Calmer</option>
        </select>
      </div>
      <div className="max-w-screen-lg w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredPlaces.map((place, index) => (
          <div key={index} className="bg-white rounded-md shadow-md p-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <img src={place.img} alt={place.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold mb-2">{place.title}</h3>
            <p className="text-gray-600">{place.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Explore;