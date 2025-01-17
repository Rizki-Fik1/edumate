import React from "react";
import { useEffect } from "react";
import { FaBook,  FaChalkboardTeacher, FaBrain } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import "../AddItem.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BenefitCard({ icon, title, description, textColor }) {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="flex flex-col justify-center md:items-start w-36 h-32 md:w-56 md:h-40 bg-gradient-to-bl 
    from-neutral-800 to-neutral-900 rounded-2xl shadow-lg px-2 md:px-5 py-2" data-aos="fade-up">
      <div className={`${textColor} text-base md:text-3xl pb-1 md:pb-3`}>{icon}</div>
      <p className={`montserrat ${textColor} text-start text-xs md:text-base font-semibold`}>{title}</p>
      <p className="montserrat text-white text-start text-xs md:text-sm font-light">{description}</p>
    </div>
  );
}
