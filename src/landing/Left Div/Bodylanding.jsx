import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import '../../AddItem.css';

export default function Bodylanding() {

    useEffect(() => {
      AOS.init({ duration: 2000 });
    }, []);

  return(
<div className="w-full flex flex-col relative top-[20%] px-5">
  {/* Title One */}
  <div className="text-center pb-5 md:pb-7">
    <p className="montserrat text-white text-2xl md:text-3xl font-semibold" data-aos="fade-up">
      Edumate
    </p>
  </div>

  {/* Title Two */}
  <div className="w-full flex flex-col justify-center items-center pb-4 md:pb-5">
    <p className="montserrat text-white text-2xl md:text-6xl font-normal text-center" data-aos="fade-up">
      A Friend in Learning
    </p>
    <p className="montserrat text-white text-2xl md:text-6xl font-normal text-center" data-aos="fade-up">
      A Partner in Growing
    </p>
  </div>

  {/* Desc Title */}
  <div className="text-center">
    <p className="montserrat text-white text-lg md:text-xl font-light" data-aos="fade-up">
      Discover the joy of learning without limits.
    </p>
  </div> 
</div>

  )
}