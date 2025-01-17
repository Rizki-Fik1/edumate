import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/CHART.png';

export default function Navbarlogin() {
  return (
    <Link to="/" className="flex flex-row items-center gap-x-5 px-5 py-4 bg-zinc-900">
      <img src={Logo} className="h-12 sm:h-16" alt="Logo" />
      <p className="montserrat text-lg sm:text-xl md:text-2xl text-white font-semibold">Edumate.</p>
    </Link>
  );
}