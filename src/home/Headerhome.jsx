import React from "react"
import '../AddItem.css';
import StatsOne from '../assets/stats1.png';
import StatsTwo from '../assets/stats2.png';
import StatsThree from '../assets/stats3.png';

export default function Headerhome() {
  return(
    <div className="pt-12">
      <div className="flex flex-col justify-center items-center">
        <p className="montserrat text-3xl md:text-7xl font-semibold text-white text-center md:px-60">
          Transforming Education
        </p>

        <p className="montserrat flex gap-2 md:gap-5 text-3xl md:text-7xl font-semibold text-white text-center md:px-60">
          with <section className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">Edumate.</section>
        </p>

        <div className="relative w-full">
          <img src={StatsOne} className="absolute left-5 md:left-auto md:right-[700px] md:-bottom-[375px] z-30 h-[250px] md:h-[430px]"/>
          <img src={StatsTwo} className="absolute left-16 md:left-auto md:right-[580px] -bottom-[250px] md:-bottom-[375px] z-20 h-[220px] md:h-[400px]"/>
          <img src={StatsThree} className="absolute left-28 md:left-auto md:right-[485px] -bottom-72 md:-bottom-[440px] z-10 h-[220px] md:h-[400px]"/>
        </div>
      </div>
    </div>   
  )
}