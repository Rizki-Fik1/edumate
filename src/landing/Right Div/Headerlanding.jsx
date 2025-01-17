import React from "react"
import '../../AddItem.css';
import Image from '../../assets/bg-landing.png'

export default function Headerlanding() {

  return(
<div className="flex justify-center items-center relative top-[10%] md:top-[15%] px-5">
  <img src={Image} className="w-full max-w-md md:max-w-lg" />
</div>
  )
}