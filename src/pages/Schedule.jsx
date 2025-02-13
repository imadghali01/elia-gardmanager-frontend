import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Schedule.css";
import logo from "../assets/img/logoElia.png";
import { Container } from "postcss";
import Logout from "../components/Logout";



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
    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-100">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-10 px-6 shadow-md rounded-lg">
        <Logout/>
        <div className="sm:mx-auto sm:w-full sm:max-w-md mb-10 mt-5">
        <img
            alt="Your Company"
            src="/src/assets/img/LogoElia.png"
            className="mx-auto h-20 w-auto"
        />
        </div>
  <div className="  px-6  rounded-lg mt-15 sm:mx-auto sm:w-full sm:max-w-md ">
    <div className="calendar-container">
      <Calendar onClickDay={handleDayClick} />
      <div className="flex justify-center gap-2 mt-8 ">
  <div className="w-15 h-8 rounded" style={{ backgroundColor: "rgb(200, 80, 80)" }}></div>
  <div className="w-15 h-8 rounded" style={{ backgroundColor: "rgb(130, 180, 90)" }}></div>
  <div className="w-15 h-8 rounded" style={{ backgroundColor: "rgb(100, 150, 220)" }}></div>
  <div className="w-15 h-8 rounded" style={{ backgroundColor: "rgb(230, 200, 120)" }}></div>
  <div className="w-15 h-8 rounded" style={{ backgroundColor: "rgb(120, 160, 180)" }}></div>
  <div className="w-15 h-8 rounded" style={{ backgroundColor: "rgb(180, 140, 200)" }}></div>
</div>

      

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <img src={logo} alt="Elia Logo" className="mx-auto h-15 w-auto mb-5" />
            <p className=" mb-2">Date sélectionnée : {date.toLocaleDateString()}</p>
            <button className="close-btn" onClick={() => setShowPopup(false)}>❌</button>
            <button className="popup-btn">Propose Your Service</button>
            <button className="popup-btn">Ask For A Switch</button>
            <button className="popup-btn">See All the Switch</button>
          </div>
        </div>
      )}
    </div>
  </div>
  </div>
  </div>
  </div>
  );
}

export default Schedule;
