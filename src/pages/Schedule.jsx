import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Schedule.css";
import logo from "../assets/img/logoElia.png";
import { Container } from "postcss";
import Logout from "../components/Logout";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../components/Navbar";
import IphoneContainer from "../components/IphoneContainer";



function Schedule() {
  const [date, setDate] = useState(new Date());
  const [showPopup, setShowPopup] = useState(false);
  const [eventName, setEventName] = useState("");

  const handleDayClick = (value) => {
    setDate(value);
    setShowPopup(true);
  };

  return (
    <IphoneContainer className="">
    <div className="flex-1  space-y-6 min-h-0  scroll-smooth overflow-hidden">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-2 ">
        <Logout/>
        <div className="sm:mx-auto sm:w-full sm:max-w-md mb-10 mt-5">
        <img
            alt="Your Company"
            src="/src/assets/img/LogoElia.png"
            className="mx-auto h-20 w-auto"
        />
        </div>
  <div className=" px-4 mt-6 w-[90%] w-full max-w-sm mx-auto overflow-hidden ">
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
  </IphoneContainer>
  );
}

export default Schedule;