import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import '../../AddItem.css';

export default function Footerlanding() {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="flex justify-center relative top-7 md:top-52 px-5 mb-16 md:mb-0">
      <div className="footer-button flex flex-row justify-center items-center gap-x-3 md:gap-x-5 bg-white 
      py-2 px-4 md:py-3 md:px-5 rounded-3xl cursor-pointer shadow-lg transition-all duration-100 hover:bg-gradient-to-r hover:from-[#FF635A] hover:to-[#952A25] group">
        
        <Link to="/login" className="footer-text montserrat text-sm md:text-2xl text-black font-semibold transition-all group-hover:text-white">
          Get Started
        </Link>
      </div>
    </div>
  );
}
