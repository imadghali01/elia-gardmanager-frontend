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
  <div className="body">
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
  </div>
  );
}

export default Schedule;
