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
        console.log(id);
        return id ? parseInt(id, 10) : null;
    }

    return (
        <section>
            {data && (
                <div className=''>
                    <img src={data.image} className='w-[100vw] h-[100vh] fixed' />
                    <div className='absolute z-[2] text-center w-[70vw] flex justify-center items-center flex-col top-[15rem] left-[15rem]' >
                        <h1 className='top-[250px] left-[40vw] text-[80px] font-roboto leading-[6rem] font-bold'>{data.name}</h1>
                        <p className='font-bold'>{data.location}</p>
                        <p className='text-[1.5rem] italic'>{data.description}</p>
                        <div className='backdrop-blur-lg bg-white opacity-60 rounded-[20px] w-[75rem] h-[170px] mt-[5rem] grid grid-cols-2'>
                            <h1 className='text-[1.25rem] m-5'><a className='font-bold'>Category :</a> {data.category}</h1>
                            <h1 className='text-[1.25rem] m-5'><a className='font-bold'>Best Time to Visit :</a> {data.bestTimeToVisit}</h1>
                            <div className='grid grid-rows-3 leading-[1rem] m-5'>
                                <h1 className='text-[1.25rem]'><a className='font-bold leading-5'>popular activities :</a></h1>
                                {data.popularActivities.map((activity, index) => {
                                    return <li key={index} className=' text-left ml-[15rem]'><a>{activity}</a></li>;
                                })}
                            </div>
                            <div className='grid grid-rows-3 leading-[1rem] m-5'>
                                <h1 className='text-[1.25rem]'><a className='font-bold leading-5'>Nearby Attraction :</a></h1>
                                {data.nearbyAttractions.map((attraction, index) => {
                                    return <li key={index} className=' text-left ml-[15rem]'><a>{attraction}</a></li>;
                                })}
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
