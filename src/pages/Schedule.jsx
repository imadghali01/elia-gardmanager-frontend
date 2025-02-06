import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Schedule.css"; // Ajoute ce fichier pour le style

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
        <div className="popup">
          <div className="popup-content">
            <h3>Ajouter un événement</h3>
            <p>Date sélectionnée : {date.toLocaleDateString()}</p>
            <input
              type="text"
              placeholder="Nom de l'événement"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
            <div className="popup-buttons">
              <button onClick={handleSaveEvent}>Enregistrer</button>
              <button onClick={() => setShowPopup(false)}>Annuler</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Schedule;
