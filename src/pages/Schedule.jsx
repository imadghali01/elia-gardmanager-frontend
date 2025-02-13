import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Schedule.css";
import logo from "../assets/img/logoElia.png";
import { Container } from "postcss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";




function Schedule() {
  const [date, setDate] = useState(new Date());
  const [showPopup, setShowPopup] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [showSwitchForm, setShowSwitchForm] = useState(false);
  const [startDate, setStartDate] = useState(new Date());


  

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
        <div className="sm:mx-auto sm:w-full sm:max-w-md mb-10 mt-5">
        <img
            alt="Your Company"
            src="/src/assets/img/LogoElia.png"
            className="mx-auto h-20 w-auto"
        />
        </div>
        <div className="px-6 rounded-lg mt-15 sm:mx-auto sm:w-full sm:max-w-md">
  <div className="calendar-container">
    <Calendar onClickDay={handleDayClick} />
    
    {/* Légende des couleurs */}
    <div className="flex justify-center gap-4 mt-8">
      <div className="flex flex-col items-center">
        <div className="w-10 h-6 rounded" style={{ backgroundColor: "rgb(200, 80, 80)" }}></div>
        <span className="text-xs ">Name1</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-10 h-6 rounded" style={{ backgroundColor: "rgb(130, 180, 90)" }}></div>
        <span className="text-xs ">Name2</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-10 h-6 rounded" style={{ backgroundColor: "rgb(100, 150, 220)" }}></div>
        <span className="text-xs ">Name3</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-10 h-6 rounded" style={{ backgroundColor: "rgb(230, 200, 120)" }}></div>
        <span className="text-xs ">Name4</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-10 h-6 rounded" style={{ backgroundColor: "rgb(120, 160, 180)" }}></div>
        <span className="text-xs ">Name5</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-10 h-6 rounded" style={{ backgroundColor: "rgb(180, 140, 200)" }}></div>
        <span className="text-xs ">Name6</span>
      </div>
    </div>

     {/* Popup */}
     {showPopup && (
                <div className="popup-overlay">
                  <div className="popup-content">
                    <img src={logo} alt="Elia Logo" className="mx-auto h-15 w-auto mb-5" />
                    <p className="mb-2">Date sélectionnée : {date.toLocaleDateString()}</p>
                    <button className="close-btn" onClick={() => setShowPopup(false)}>❌</button>

                    {/* Formulaire "Propose Your Service" */}
<button className="popup-btn" onClick={() => setShowServiceForm(!showServiceForm)}>
  Propose Your Service
</button>
{showServiceForm && (
  <div className=" p-3 border rounded bg-gray-100">
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      dateFormat="Pp"
      className="custom-datepicker"
    />  
    <button className="bg-white text-black text-lg border-orange-400 border-4 py-2 w-50 my-2 rounded-lg cursor-pointer hover:bg-orange-400">Save</button>
    </div>
)}

{/* Formulaire "Ask For A Switch" */}
<button className="popup-btn" onClick={() => setShowSwitchForm(!showSwitchForm)}>
  Ask For A Switch
</button>
{showSwitchForm && (
  <div className=" p-3 border rounded bg-gray-100">
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      dateFormat="Pp"
      className="custom-datepicker"
    />    
      <div className="text-left ml-11 pt-2">
      <label><input type="radio" name="reason" value="duration" /> Duration days</label><br />
      <label><input type="radio" name="reason" value="other" /> Other</label><br />
      <label className=""><input type="radio" name="reason" value="invalid"/> Invalid</label>
      <div></div>
    </div>
      <button className="bg-white text-black text-lg border-orange-400 border-4 py-2 w-50 my-2 rounded-lg cursor-pointer hover:bg-orange-400">Save</button>
  </div>
)}


                    {/* Bouton "See All the Switch" */}
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
