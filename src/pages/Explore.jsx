import React, { useState, useEffect } from "react";
import Data from "../../Data/Detailed.json";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import GoToTop from "./GoToTop";

const data = Data.destinations;

const filterByState = (location) => {
  return data.filter((place) => place.location.includes(location));
};

const filterByCategory = (category) => {
  return data.filter((place) => place.category.includes(category));
};

const categories = [...new Set(data.map((item) => item.category))];
const places = [...new Set(data.map((item) => item.location))];

const Explore = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [buttonColor, setButtonColor] = useState("white");

  useEffect(() => {
    console.log("Use effect running with", selectedState, selectedCategory);
    const places = data.filter(
      (place) =>
        (selectedState === "" || place.location.includes(selectedState)) &&
        (selectedCategory === "" || place.category.includes(selectedCategory))
    );
    setFilteredPlaces(places);
  }, [selectedState, selectedCategory]);

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setButtonColor('yellow');
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setButtonColor('yellow');
  };

  return (
    <section className="p-4 mt-20">
      <h1 className="text-2xl font-bold mb-4">Explore More</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col mb-4">
          <label
            className="mb-2 font-bold text-lg text-gray-900"
            htmlFor="placeSelect"
          >
            By Place
          </label>
          <select
            onChange={handleStateChange}
            className="px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded shadow-inner"
            name="By Place"
            id="placeSelect"
          >
            <option value="">All</option>
            {places.map((place, index) => (
              <option key={index} value={place}>
                {place}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col mb-4">
          <label
            className="mb-2 font-bold text-lg text-gray-900"
            htmlFor="categorySelect"
          >
            By Category
          </label>
          <select
            onChange={handleCategoryChange}
            className="px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded shadow-inner"
            name="By Category"
            id="categorySelect"
          >
            <option value="">All</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <h2 className="text-lg font-bold mb-2">Popular Categories</h2>
      <div className="flex flex-wrap gap-2">
        {categories.map((category, index) => (
          <button
            value={category}
            key={index}
            className={`px-4 py-2 ${
              selectedCategory === category
                ? "bg-yellow-200 text-gray-900"
                : "bg-gray-200 text-gray-700"
            } rounded-md hover:bg-yellow-300`}
            onClick={handleCategoryChange}
          >
            {category}
          </button>
        ))}
      </div>
      <br />
      <h2 className="text-lg font-bold mb-2 block">Popular Places</h2>
      <div className="flex flex-wrap gap-2">
        {places.map((place, index) => (
          <button
            value={place}
            key={index}
            className={`px-4 py-2 ${
              selectedState === place
                ? "bg-yellow-200 text-gray-900"
                : "bg-gray-200 text-gray-700"
            } rounded-md hover:bg-yellow-300`}
            onClick={handleStateChange}
          >
            {place}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-2 justify-center items-center">
        {filteredPlaces.map((place, index) => (
          <article
            key={index}
            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24 bg-gray-900/40 shadow-lg hover:shadow-2xl transition duration-500 ease-in-out transform"
          >
            <img
              src={place.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 className="z-10 mt-3 text-4xl  font-bold text-white text-center">
              {place.name}
            </h3>
            <div className="z-10 gap-y-1 pt-4 overflow-hidden text-center text-sm leading-6 text-gray-300">
              {place.description}
            </div>

            <div className="z-10 mt-4 justify-center text-center items-center">
              <Link to={`/detail/?id=${index}`} key={index}>
                <button
                  className="w-[80px] h-[30px] border-2 rounded-xl text-white backdrop-blur cursor-pointer duration-[0.4s] mt-[5rem] hover:bg-[#f9a826] hover:text-[#1f2937] hover:shadow-lg hover:scale-105 transition ease-in-out transform"
                >
                  Explore
                </button>
              </Link>
            </div>
          </article>
        ))}
      </div>
      <GoToTop />
    </section>
  );
};

export default Explore;
