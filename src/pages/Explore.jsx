import { React, useState, useEffect } from "react";
import Data from "../../Data/Detailed.json";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import GoToTop from "./GoToTop";
import Footer from "./Footer";

const data = Data.destinations;

const filterByState = (location) => {
  return data.filter((place) => place.location.includes(location));
};


const filterByCategory = (category) => {
  return data.filter((place) => place.category.includes(category));
};

const categories = [...new Set(data.map((item) => item.category))];
// console.log(categories);

const places = [...new Set(data.map((item) => item.location))];

const Explore = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [colors,setcolor]=useState("white");

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
    setcolor('yellow');
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setcolor('yellow');
  };

  return (
    <>

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
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
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
            <option value="Historical">Historical</option>
            <option value="Beaches">Beaches</option>
            <option value="Nature">Nature</option>
            <option value="Spiritual">Spiritual</option>
            <option value="City">City</option>
            <option value="Adventure">Adventure</option>
            <option value="Islands">Islands</option>
            <option value="Heritage">Heritage</option>
            <option value="Hill Station">Hill Station</option>
            <option value="Metropolitan">Metropolitan</option>
            <option value="Cultural and Culinary">Cultural and Culinary</option>
            <option value="Spiritual and Beach">Spiritual and Beach</option>
            <option value="Scenic Beauty and Lakes">
              Scenic Beauty and Lakes
            </option>
            <option value="Hill Station and Tea Gardens">
              Hill Station and Tea Gardens
            </option>
            <option value="Metropolitan and Cultural Hub">
              Metropolitan and Cultural Hub
            </option>
          </select>
        </div>
      </div>

      <h2 className="text-lg font-bold mb-2">Popular Categories</h2>
      <div className="flex flex-wrap gap-2">
        {categories.map((category, index) => (
          <button
            value={category}
            key={index}
            className="px-4 py-2 bg-gray-200 rounded-md hover:bg-yellow-200"
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
            className="px-4 py-2 bg-gray-200 rounded-md hover:bg-yellow-200"
            onClick={handleStateChange}
            style={{backgroundColor:{colors}}}
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
                  onClick={() => showdetail(index)}
                  className="w-[80px] h-[30px]  border-2 rounded-xl text-white backdrop-blur  cursor-pointer  duration-[0.4s] mt-[5rem] hover:bg-[#f9a826] hover:text-[#1f2937] hover:shadow-lg hover:scale-105 transition  ease-in-out transform
              "
                >
                  Explore
                </button>
              </Link>
            </div>
          </article>
        ))}
      </div>
      <GoToTop/>
    </section>
    <Footer />
    </>
    
  );
};

export default Explore;
