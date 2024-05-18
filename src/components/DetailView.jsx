import React, { useEffect, useState } from "react";
import Details from "./Details";
import Detailed from "../../Data/Detailed.json";

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
    <section className="flex flex-col mt-20 items-center justify-center w-full h-full">
      {data && (
        <div className="flex flex-col items-center  justify-center w-11/12 h-full">
          <img src={data.image} alt={data.title} />
          <h1 className="text-4xl font-bold mt-5">{data.name}</h1>
          <h3 className="text-xl font-semibold mt-4">{data.location}</h3>
          <p className="text-lg sm:text-lg md:text-xl mt-5 text-justify">{data.description}</p>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4  gap-5 gap-y-4 mt-5 w-full"
          style={{alignItems:'flex-start'}}
          >
            <div className="flex flex-col p-4">
              <h2 className="text-lg sm:text-lg md:text-xl font-bold">Category</h2>
              <p className="text-lg sm:text-lg md:text-xl mt-2">{data.category}</p>
            </div>
            <div className="flex flex-col  p-4">
              <h2 className="text-xl font-bold">Best time to visit</h2>
              <p className="text-lg sm:text-lg md:text-xl mt-2">{data.bestTimeToVisit}</p>
            </div>
            <div className="flex flex-col  p-4">
              <h2 className="text-xl font-bold">Popular activities</h2>
              <ul className="list-disc text-justify">
              {data.popularActivities.map((activity, index) => (
                <li key={index} className="text-lg sm:text-lg md:text-xl mt-2">
                  {activity}
                </li>
              ))}
              </ul>
            </div>
            <div className="flex flex-col  p-4">
              <h2 className="text-xl font-bold">Nearby attractions</h2>
              <ul className="list-disc text-justify">

              {data.nearbyAttractions.map((attraction, index) => (
                <li key={index} className="text-lg sm:text-lg md:text-xl mt-2">
                  {attraction}
                </li>
              ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <Details />
    </section>
  );
};

export default DetailView;
