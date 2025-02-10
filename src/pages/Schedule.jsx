import { useState } from "react";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Schedule.css";
import logo from "../assets/img/logoElia.png";


function Schedule() {
  const [date, setDate] = useState(new Date());
  const [showPopup, setShowPopup] = useState(false);
  const [eventName, setEventName] = useState("");

  const handleDayClick = (value) => {
    setDate(value);
    setShowPopup(true);
  };

  const handleSaveEvent = () => {
    alert(`Événement "${eventName}" ajouté pour le ${date.toLocaleDateString()}`);
    setShowPopup(false);
    setEventName("");
  };

  return (
    <div className="calendar-container">
      <Calendar onClickDay={handleDayClick} />

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <img src={logo} alt="Elia Logo" className="logo" />
            <p>Date sélectionnée : {date.toLocaleDateString()}</p>
            <button className="close-btn" onClick={() => setShowPopup(false)}>❌</button>
            <button className="popup-btn">Propose Your Service</button>
            <button className="popup-btn">Ask For A Switch</button>
            <button className="popup-btn">See All the Switch</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Schedule;

import { useNavigate } from "react-router-dom"; 
import { useTranslation } from "react-i18next"; 
import '../styles/tailwind-global.css';
import '../styles/custom.css';
import Navbar from "../components/Navbar";




function Schedule() {

    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState("EN");
    const navigate = useNavigate();
    
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);// Bascule entre "en" et "fr"
    };
  
    return (

        <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-100">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">

        {/* Navbar réutilisable */}
        <Navbar />

        <div className="bg-white py-2 px-6 shadow-md rounded-lg">

        <div className="min-h-screen bg-white flex flex-col items-center">
        
  
        {/* Buttons Section */}
        
        </div>
      </div>

      </div>
        </div>

            );
    }

export default Schedule;


