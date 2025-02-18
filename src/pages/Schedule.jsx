import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Schedule.css";
import logo from "../assets/img/logoElia.png";
import { Container } from "postcss";
import Logout from "../components/Logout";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Schedule() {
  const [date, setDate] = useState(new Date());
  const [showPopup, setShowPopup] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [showSwitchForm, setShowSwitchForm] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const [shifts, setShifts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/schedule")
      .then((response) => response.json())
      .then((data) => {
        if (!data || !Array.isArray(data)) {
          console.error("Format inattendu des données !");
          return;
        }

        // Extraire et reformater les shifts
        const formattedShifts = data.flatMap((entry) =>
          Object.entries(entry.shifts || {}).flatMap(([shiftKey, days]) =>
            Object.entries(days).map(([day, shiftDetails]) => ({
              date: shiftDetails[0], // Première valeur du tableau
              userId: shiftDetails[1], // Deuxième valeur
              extraInfo: shiftDetails[2], // Troisième valeur (peut être null)
              type: shiftKey, // shift1, shift2, etc.
              day: day, // Lundi, Mardi, etc.
            }))
          )
        );

        console.log("Shifts formatés :", formattedShifts);
        setShifts(formattedShifts);
      })
      .catch((error) =>
        console.error("Erreur lors du chargement des shifts:", error)
      );
  }, []);
  

  const handleDayClick = (value) => {
    setDate(value);
    setShowPopup(true);
  };

  const handleSaveEvent = () => {
    alert(
      `Événement "${eventName}" ajouté pour le ${date.toLocaleDateString()}`
    );
    setShowPopup(false);
    setEventName("");
  };

  const handleSaveSwitch = async () => {
    try {
      const response = await fetch("http://localhost:8000/switch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userOne: "65a123456abcde789fghi012", // ID de l'utilisateur actuel
          userTwo: null, // Optionnel
          type: "request", // ou "offer" selon le formulaire
          dateIn: startDate, // Date sélectionnée dans le DatePicker
          dateOut: null, // Optionnel
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Switch enregistré avec succès !");
      } else {
        alert("Erreur : " + data.message);
      }
    } catch (error) {
      console.error("Erreur lors de l'enregistrement :", error);
    }
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
        <div className="px-6 rounded-lg mt-15 sm:mx-auto sm:w-full sm:max-w-md">
  <div className="calendar-container">
  <Calendar
  onClickDay={handleDayClick}
  tileClassName={({ date, view }) => {
    if (view !== "month") return "";
  
    const dateString = date.toISOString().split("T")[0]; // Format "YYYY-MM-DD"
  
    const shiftFound = shifts.find((schedule) => schedule.date === dateString);
  
    if (shiftFound) {
      switch (shiftFound.type) {
        case "shift1":
          return "react-calendar__tile red";
        case "shift2":
          return "react-calendar__tile blue";
        case "shift3":
          return "react-calendar__tile green";
        case "shift4":
          return "react-calendar__tile  yellow";
        case "shift5":
          return "react-calendar__tile light-black";
        case "shift6":
          return "react-calendar__tile purple";
        default:
          return "";
      }
    }
  
    return "";
  }}
  

  
/>

    
    {/* Légende des couleurs */}
    <div className="flex justify-center gap-4 mt-8">
      <div className="flex flex-col items-center">
        <div className="w-10 h-6 rounded" style={{ backgroundColor: "#a57204" }}></div>
        <span className="text-xs ">Name1</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-10 h-6 rounded" style={{ backgroundColor: "#005148" }}></div>
        <span className="text-xs ">Name2</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-10 h-6 rounded" style={{ backgroundColor: "#5B584F" }}></div>
        <span className="text-xs ">Name3</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-10 h-6 rounded" style={{ backgroundColor: "#0F353D" }}></div>
        <span className="text-xs ">Name4</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-10 h-6 rounded" style={{ backgroundColor: "#634A00" }}></div>
        <span className="text-xs ">Name5</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-10 h-6 rounded" style={{ backgroundColor: "#383456" }}></div>
        <span className="text-xs ">Name6</span>
      </div>
    </div>

              {/* Popup */}
              {showPopup && (
                <div className="popup-overlay">
                  <div className="popup-content">
                    <img
                      src={logo}
                      alt="Elia Logo"
                      className="mx-auto h-15 w-auto mb-5"
                    />
                    <p className="mb-2">
                      Date sélectionnée : {date.toLocaleDateString()}
                    </p>
                    <button
                      className="close-btn"
                      onClick={() => setShowPopup(false)}
                    >
                      ❌
                    </button>

                    {/* Formulaire "Propose Your Service" */}
                    <button
                      className="popup-btn"
                      onClick={() => setShowServiceForm(!showServiceForm)}
                    >
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
                          value={
                            FormData.dateIn
                          } /* <<<<<<<<<<<<<<<<<<<<<<< la veuleur enregistrer dans le back end pas sur si cest la bonne valuer>>>>>>>>>>>>>>>>>>>>>>>>< */
                        />
                        <button
                          onClick={handleSaveSwitch}
                          className="bg-white text-black text-lg border-orange-400 border-4 py-2 w-50 my-2 rounded-lg cursor-pointer hover:bg-orange-400"
                        >
                          Save
                        </button>
                      </div>
                    )}

                    {/* Formulaire "Ask For A Switch" */}
                    <button
                      className="popup-btn"
                      onClick={() => setShowSwitchForm(!showSwitchForm)}
                    >
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
                          value={
                            FormData.dateIn
                          } /* <<<<<<<<<<<<<<<<<<<<<<< la veuleur enregistrer yrytfytèdans le back end pas sur si cest la bonne valuer>>>>>>>>>>>>>>>>>>>>>>>>< */
                        />
                        <div className="text-left ml-11 pt-2">
                          <label>
                            <input
                              type="radio"
                              name="reason"
                              value="holidays"
                            />{" "}
                            Holidays
                          </label>
                          <br />
                          <label>
                            <input type="radio" name="reason" value="other" />{" "}
                            Other
                          </label>
                          <br />
                          <label className="">
                            <input type="radio" name="reason" value="invalid" />{" "}
                            Invalid
                          </label>
                          <div></div>
                        </div>
                        <button
                          onClick={handleSaveSwitch}
                          className="bg-white text-black text-lg border-orange-400 border-4 py-2 w-50 my-2 rounded-lg cursor-pointer hover:bg-orange-400"
                        >
                          Save
                        </button>{" "}
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
