import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-10 lg:px-20">
        <div className="flex flex-col items-center text-center md:text-left md:items-start mb-5 md:mb-0">
          <h2 className="text-2xl font-bold mb-3">Bharat Yatra</h2>
          <p className="text-sm max-w-md">
            Bharat Yatra is a tourist app that provides descriptions about
            different tourist destinations in India. This project is built using
            React and Vite, offering a fast and modern development experience.
          </p>
        </div>
        
        <div className="text-center md:text-left mb-5 md:mb-0">
          <h3 className="font-semibold">Contact Us</h3>
          <p>123 Tourism Street, Jahanpanah, New Delhi, India</p>
          <p>Phone: +91-123-456-7890</p>
          <p>Email: info@citytourism.com</p>
        

        <div className="flex space-x-5 mb-5 md:mb-0">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:animate-shake">
            <FacebookIcon />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:animate-shake">
            <Twitter />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:animate-shake">
            <InstagramIcon />
          </a>
        </div>
</div>
        <div className="text-center md:text-left">
          <h3 className="font-semibold mb-1">Tourist Helpline</h3>
          <p>For any emergencies, please call: +91-112-123-4567</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
