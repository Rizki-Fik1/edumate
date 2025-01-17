import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchUserProfile } from "../admin/utils/firebaseUtils";
import { auth } from "../admin/auth/firebaseConfig";
import Icon from "../assets/CHART.png";
import "../AddItem.css";

export default function Navbar() {
  const [photoURL, setPhotoURL] = useState("");
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    if (auth.currentUser?.uid) {
      fetchUserProfile(auth.currentUser.uid)
        .then((data) => {
          if (data) setPhotoURL(data.photoURL);
        })
        .catch((error) => console.error("Failed to fetch profile:", error))
        .finally(() => setLoading(false)); 
    } else {
      setLoading(false); 
    }
  }, []);

  return (
    <div id="header" className="flex flex-row justify-between items-center px-2 md:px-12 pt-5">
      <ul className="flex flex-row items-center justify-center gap-x-2 md:gap-x-5">
        <img src={Icon} className="h-8 md:h-20" alt="App Icon" />
      </ul>

      <ul className="flex text-xs md:text-xl font-normal gap-x-3 md:gap-x-14">
        <Link to="/home" className="md:text-xl font-normal montserrat text-slate-300 hover:text-white">
          Edumate
        </Link>
        <Link to="/mate-ai" className="text-slate-300 hover:text-white">
          Mate AI
        </Link>
        <Link to="/to-do" className="text-slate-300 hover:text-white">
          To-do
        </Link>
        <Link to="/contact" className="text-slate-300 hover:text-white">
          Contact
        </Link>
      </ul>

      <Link to="/profile">
        {loading ? (
          <div className="spinner bg-white w-[20px] h-[20px] md:w-[70px] md:h-[70px] rounded-full shadow-lg flex items-center justify-center">
            <div className="w-4 h-4 md:w-8 md:h-8 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
          </div>
        ) : (
          <img
            src={photoURL || "/default-avatar.png"}
            alt="Profile"
            className="bg-white w-[20px] h-[20px] md:w-[70px] md:h-[70px] rounded-full shadow-lg object-cover"
          />
        )}
      </Link>
    </div>
  );
}
