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
    console.log(id);
    return id ? parseInt(id, 10) : null;
  }

  return (
    <section>
      {data && (
        <div className="">
          <img src={data.image} className="w-full h-full object-cover z-0 fixed" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-black">
            <h1 className="text-6xl mt-28 font-bold mb-4">{data.name}</h1>
            <p className="text-xl font-semibold mb-2">{data.location}</p>
            <p className="text-lg italic mb-10 px-4 text-center max-w-3xl">{data.description}</p>
            <div className="bg-black mt-10 text-white bg-opacity-40 backdrop-blur-lg rounded-lg p-8 max-w-3xl">
              <div className="grid grid-cols-2 gap-20">
                <div>
                  <h2 className="text-xl font-bold mb-4">Category:</h2>
                  <p>{data.category}</p>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-4">Best Time to Visit:</h2>
                  <p>{data.bestTimeToVisit}</p>
                </div>
              </div>
              <div className="mt-6">
                <h2 className="text-xl font-bold mb-4">Popular Activities:</h2>
                <ul>
                  {data.popularActivities.map((activity, index) => (
                    <li key={index}>{activity}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <h2 className="text-xl font-bold mb-4">Nearby Attractions:</h2>
                <ul>
                  {data.nearbyAttractions.map((attraction, index) => (
                    <li key={index}>{attraction}</li>
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
};

export default DetailView;