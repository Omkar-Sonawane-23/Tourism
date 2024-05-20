import React from "react";
import { Link } from "react-router-dom";
import Detailed from "../../Data/Detailed.json";
import { useSelector } from "react-redux";

const Details = () => {
  const theme = useSelector((state) => state.theme.theme);

  function extractIdFromPathname() {
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get("id");
    return id ? parseInt(id, 10) : null;
  }

  const id = extractIdFromPathname();
  const data = Detailed.destinations;

  const isValidId = id !== null && id >= 0 && id < data.length;

  const eventDetails = isValidId ? data[id].happeningEvents : [];
  const travelTips = isValidId ? data[id].travelTips : [];

  return (
    <div className="pt-20 flex flex-col items-center"
    style={{
      backgroundColor: theme === "dark" ? "#1f2937" : "#f3f4f6",
      color: theme === "dark" ? "#f3f4f6" : "#1f2937",
    }}
    >
      <h1 className="text-3xl sm:text-4xl mb-8 text-center font-bold">
        Discover Latest Events
      </h1>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventDetails.map((event, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition duration-300"
              >
                <img
                  className="w-full h-48 object-cover object-center rounded-t-lg"
                  src={event.image}
                  alt="event"
                />
                <div className="p-6 ">
                  <h2 className="text-sm font-medium text-gray-400 mb-1">
                    {event.date}
                  </h2>
                  <h1 className={`text-lg font-semibold ${theme==="light"?"text-gray-900":"text-white"}  mb-3`}>
                    {event.eventName}
                  </h1>
                  <p className={`leading-relaxed mb-3 ${theme==="light"?"text-gray-700":"text-white"}`}>
                    {event.description}
                  </p>
                  <Link
                    to={event.exploreLink}
                    className="text-indigo-600 inline-flex items-center hover:text-indigo-800 transition-colors duration-300"
                  >
                    Explore More
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
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="border border-gray-200 hover:shadow-xl rounded-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mt-8 p-6 shadow-lg"
          style={{
            backgroundColor: theme === "dark" ? "#1f2937" : "#f3f4f6",
            color: theme === "dark" ? "#f3f4f6" : "#1f2937",
          }}
          >
            <h1 className="text-3xl font-bold mb-4 text-center">
              Travel Tips:
            </h1>
            <ul className="text-lg  list-disc pl-5">
              {travelTips.map((tip, index) => (
                <li
                  key={index}
                  className="mb-1 p-3 hover:bg-gray-10 transition-colors duration-300"
                >
                  <span className="hover:text-indigo-600 transition-colors duration-300">
                    {tip}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
