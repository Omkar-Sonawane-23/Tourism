import React from "react";
import { Link } from "react-router-dom";
import Detailed from "../../Data/Detailed.json";

const Details = () => {
  function extractIdFromPathname() {
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get("id");
    console.log(id);
    return id ? parseInt(id, 10) : null;
  }

  const id = extractIdFromPathname();
  console.log(id);
  const data = Detailed.destinations;
  const eventDetails = id !== null ? data[id].happeningEvents : [];

  return (
    <div className="absolute top-[100vh] flex justify-center items-center flex-col w-screen">
      <h1 className="m-auto text-3xl bg-gray-900 text-white px-20 py-5 rounded-3xl bg-opacity-60 font-bold text-center">
        Checkout Latest Events
      </h1>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center items-center">
            {eventDetails.map((event, index) => (
              <div className="p-4 md:w-1/3" key={index}>
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={event.image}
                    alt="blog"
                  />
                  <div className="p-6 bg-gray-900 bg-opacity-90">
                    <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1">
                      {event.date}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-300 mb-3">
                      {event.eventName}
                    </h1>
                    <p className="leading-relaxed mb-3 text-gray-200">
                      {event.description}
                    </p>
                    <div className="flex items-center flex-wrap">
                      <a
                        href={event.exploreLink}
                        className="text-white text-lg p-2 rounded-lg font-semibold px-2 bg-blue-500 inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        Explore
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="backdrop-blur-lg bg-black bg-opacity-60 rounded-[20px] w-full h-[170px] mt-[5rem] flex justify-center items-center">
              <h1 className="text-center text-6xl text-[white] m-20">
                Travel Tips {" "}
              </h1>
              <div className="flex flex-col justify-right items-right m-10">
                {data[0].travelTips.map((tip, index) => (
                  <li className="text-xl text-[white] font-semibold">
                    <a target="_blank" rel="noopener noreferrer">
                      {tip}
                    </a>
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
