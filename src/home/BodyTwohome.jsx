import React from "react"
import { useEffect } from "react"
import Item from '../assets/item.png'
import Itemm from '../assets/itemm.png'
import ItemAI from '../assets/itemAI.png'
import ItemB from '../assets/itemB.png'
import ItemG from '../assets/itemG.png'
import ItemR from '../assets/itemR.png'
import ItemS from '../assets/itemS.png'
import ItemW from '../assets/itemW.png'

import AOS from "aos";
import "aos/dist/aos.css";

export default function BodyTwohome() {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return(
    <div className="pt-10">
      <div className="relative">
        <img 
        src={Item} 
        alt="logo-1" 
        className="absolute h-8 md:h-16 z-60 left-10 top-52 md:left-28 md:top-[400px]"
        data-aos="fade-up"/>

        <img 
        src={Itemm} 
        alt="logo-2" 
        className="absolute h-8 md:h-20 z-40 right-1 top-60 md:right-40 md:top-72"
        data-aos="fade-up"/>

        <img 
        src={ItemAI} 
        alt="logo-3" 
        className="absolute h-20 md:h-44 z-80 right-10 top-72 md:right-[450px] md:top-[350px]"
        data-aos="fade-up"/>

        <img 
        src={ItemB} 
        alt="logo-4" 
        className="absolute h-20 md:h-36 z-10 right-28 top-10 md:right-[45%]"
        data-aos="fade-up"/>

        <img 
        src={ItemG} 
        alt="logo-5" 
        className="absolute h-20 md:h-44 z-50 left-8 top-72 md:left-72 md:top-48"
        data-aos="fade-up"/>

        <img 
        src={ItemR} 
        alt="logo-6" 
        className="absolute h-20 md:h-44 z-70 left-28 top-96 md:left-[480px] md:top-96"
        data-aos="fade-up"/>

        <img 
        src={ItemS} 
        alt="logo-7" 
        className="absolute h-20 md:h-40 z-20 right-10 top-32 md:right-96 md:top-32"
        data-aos="fade-up"/>

        <img 
        src={ItemW}
        alt="logo-8" 
        className="absolute h-8 md:h-16 z-0 left-5 top-32 md:left-72 md:top-20"
        data-aos="fade-up"/>
      </div>
    </div>
  )
}