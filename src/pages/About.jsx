
import React from 'react';
import AboutBg from "../assets/AboutBg1.jpg";

const About = () => {
  return (
    <section className="relative">
      <img src={AboutBg} className="w-full h-screen object-cover" alt="" />
      <div className="absolute inset-0 flex items-center justify-between  m-4 ">
        <div className="max-w-lg mr-10 m-10">
          <div className="text-right  ">
            <h1 className="text-4xl  font-secondary font-semibold leading-tight mb-6 underline  text-center">About Us</h1>
          </div>
          <div className="font-tertiary text-[14px] sm:text-[18px] text-center mx-auto">
            <p className="mb-6">Bharat Yatra Travel is your gateway to unforgettable adventures across the diverse and enchanting landscapes of India.</p>
            <p className="mb-6">With a deep passion for exploration and a commitment to excellence, we curate bespoke travel experiences that immerse you in the rich tapestry of India's culture, heritage, and natural beauty.</p>
            <p>Whether you seek the tranquility of the Himalayas, the vibrant colors of Rajasthan, or the serene backwaters of Kerala, our dedicated team of travel experts ensures every detail of your journey is meticulously planned and seamlessly executed. Embark on a journey of discovery with Bharat Yatra Travel and create memories that last a lifetime.</p>
            <div className="m-4">

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Learn More
            </button>
            </div>
            </div>
         
         
       
        </div>

      </div>
    </section>
  );
}

export default About;
