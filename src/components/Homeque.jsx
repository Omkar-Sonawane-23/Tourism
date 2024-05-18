import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import Data from "../../Data/Data.json";
import Pagination from "./Pagination";

const Homeque = () => {
    // const data = Data.destinations;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const [currentData, setCurrentData] = useState([]);
    const [pageSum, setPageSum] = useState(0);

    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollButton(window.pageYOffset > 100);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const showdetail = (index) => {
        console.log(index);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-2 justify-center items-center relative px-5">
                {currentData.map((destination, i) => (
                    <article
                        className="relative hover:drop-shadow-2xl hover:scale-[1.05] hover:border-slate-500 cursor-pointer hover:border-2 isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24 bg-gray-900/40 shadow-lg hover:shadow-2xl transition duration-500 ease-in-out transform"
                        key={pageSum + i}
                    >
                        <img
                            src={destination.image[currentImageIndex]}
                            className="absolute inset-0 h-full w-full object-cover"
                            alt={destination.name}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                        <h3 className="z-10 mt-3 text-4xl  font-bold  text-white text-center">
                            {destination.name}
                        </h3>
                        <div className="z-10 gap-y-1 pt-4 overflow-hidden text-center text-sm leading-6 text-gray-300">
                            {destination.description}
                        </div>

                        <div className="z-10 mt-4 justify-center text-center items-center">
                            <Link
                                to={`/detail/?id=${pageSum + i}`}
                                key={pageSum + i}
                            >
                                <button
                                    onClick={() => showdetail(pageSum + i)}
                                    className="w-[80px] h-[30px]  border-2 rounded-xl text-white backdrop-blur  cursor-pointer text-[white]  duration-[0.4s] mt-[5rem] hover:bg-[#f9a826] hover:text-[#1f2937] hover:shadow-lg hover:scale-105 transition duration-500 ease-in-out transform"
                                >
                                    Explore
                                </button>
                            </Link>
                        </div>
                    </article>
                ))}
                {showScrollButton && (
                    <button
                        className="fixed bottom-4 right-4 text-white py-2 px-4 rounded-full shadow bg-[#f97316] hover:bg-[#d75b03] transition duration-500 ease-in-out transform"
                        onClick={scrollToTop}
                    >
                        <FaArrowUp />
                    </button>
                )}
            </section>

            <div>
                <Pagination
                    setCurrentData={setCurrentData}
                    setPageSum={setPageSum}
                />
            </div>
        </>
    );
};

export default Homeque;
