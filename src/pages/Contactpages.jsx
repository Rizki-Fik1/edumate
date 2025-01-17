import React from "react";
import Navbar from "../phone/Navbar";
import Headerphone from "../phone/Headerphone";
import Footerphone from "../phone/Footerphone";
import FooterExtraphone from "../phone/FooterExtraphone";

export default function Contactpages() {

  return(
    <> 
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 h-screen">
        <Navbar/>
        <Headerphone/>
      </div>

      <div className="bg-gradient-to-b from-gray-900 to-gray-950">
        <Footerphone/>
        <FooterExtraphone/>
      </div>
    </>
  )
}