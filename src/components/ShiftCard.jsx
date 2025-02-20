import React, { useEffect, useState } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { getSwitchesAndUsers } from "../pages/ShiftCardAdmin";

export default function ShiftCard() {
  const [availableShifts, setAvailableShifts] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [finishedShifts, setFinishedShifts] = useState([]);
  const [selectedShift, setSelectedShift] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { available, pending, finished } = await getSwitchesAndUsers();

        const transformData = (shifts) =>
          shifts.map((sw) => ({
            ...sw,
            name: sw.fullName,
            date: sw.createdAt,
            time: `${sw.dateOut} -> ${sw.dateIn}`,
            reason: sw.reason || "confort",
          }));

        setAvailableShifts(transformData(available));
        setPendingRequests(transformData(pending));
        setFinishedShifts(transformData(finished));
      } catch (error) {
        console.error("Erreur lors du fetch:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="flex-1 space-y-6 overflow-y-auto min-h-0 scrollbar-hide">
      <div className="h-[calc(100%-4rem)] p-4 space-y-6 overflow-y-auto scrollbar-hide">
        {/* Available Shifts */}
        <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">
          Available Shifts
        </h3>
        {availableShifts.length > 0 ? (
          availableShifts.map((shift, index) => (
            <ShiftCardItem
              key={index}
              shift={shift}
              status="Available"
              onTakeShift={setSelectedShift}
            />
          ))
        ) : (
          <p className="text-sm text-gray-500">No available shifts.</p>
        )}

        {/* Pending Requests */}
        <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">
          Pending Requests
        </h3>
        {pendingRequests.length > 0 ? (
          pendingRequests.map((shift, index) => (
            <ShiftCardItem key={index} shift={shift} status="Pending" />
          ))
        ) : (
          <p className="text-sm text-gray-500">No pending requests.</p>
        )}

        {/* Finished Shifts */}
        <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">
          Finished Shifts
        </h3>
        {finishedShifts.length > 0 ? (
          finishedShifts.map((shift, index) => (
            <ShiftCardItem key={index} shift={shift} status="Finished" />
          ))
        ) : (
          <p className="text-sm text-gray-500">No finished shifts.</p>
        )}

        <div className="h-12" />
      </div>

      {selectedShift && (
        <ShiftPopup
          shift={selectedShift}
          onClose={() => setSelectedShift(null)}
        />
      )}
    </div>
  );
}

function ShiftCardItem({ shift, status, onTakeShift }) {
  return (
    <div className="border border-gray-300 p-4 rounded-lg shadow-sm bg-gray-100 relative snap-start">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span
            className={`text-sm font-bold px-2 py-1 rounded-full ${
              shift.score >= 0
                ? "bg-green-200 text-green-700"
                : "bg-red-200 text-red-700"
            }`}
          >
            {shift.score}
          </span>
          <h4 className="text-md font-medium text-gray-900">{shift.name}</h4>
        </div>
        <span className="text-xs text-gray-600">{shift.date}</span>
      </div>
      <p className="text-sm text-gray-700 mt-1 font-medium">{shift.time}</p>
      {shift.reason && (
        <p className="text-xs text-gray-600 mt-1">
          <span className="font-semibold">Reason: </span>
          {shift.reason}
        </p>
      )}
      <div className="mt-3 flex items-center justify-between text-sm text-gray-700">
        <span className="flex items-center space-x-2">
          <FaEnvelope className="text-gray-500" />
          <span>{shift.email}</span>
        </span>
        <span className="flex items-center space-x-2 font-semibold">
          <FaPhone className="text-gray-500" />
          <span>{shift.phone}</span>
        </span>
      </div>
      <div className="mt-3">
        {status === "Available" && (
          <button
            className="w-full text-center py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 transition"
            onClick={() => onTakeShift(shift)}
          >
            Ask for a switch
          </button>
        )}
      </div>
    </div>
  );
}

function ShiftPopup({ shift, onClose }) {
  async function handleConfirm() {
    try {
      const [userId] = currentUser.userId;
      // Mise à jour du switch : on remplit userTwo avec currentUser.userId
      const switchResponse = await fetch(
        `http://localhost:8000/switch/${shift._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userTwo: userId }),
        }
      );

      if (switchResponse.ok) {
        // Récupération du switch mis à jour complet
        const updatedSwitch = await switchResponse.json();
        alert(`Switch confirmé pour ${shift.name}`);

        // Requête PUT pour mettre à jour les schedules avec l'objet updatedSwitch
        const scheduleResponse = await fetch("http://localhost:8000/schedule", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedSwitch),
        });

        if (!scheduleResponse.ok) {
          throw new Error("Erreur lors de la mise à jour des schedules");
        }

        const scheduleResult = await scheduleResponse.json();
        console.log("Schedule mis à jour :", scheduleResult);
      } else {
        alert("Erreur lors de la confirmation du switch");
      }
    } catch (error) {
      console.error("Erreur lors de la confirmation du switch:", error);
      alert("Erreur lors de la confirmation du switch");
    }
    onClose();
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-80 text-center">
        <h2 className="text-lg font-semibold">
          Voulez-vous prendre le switch de {shift.name} ?
        </h2>
        <div className="flex justify-between mt-4">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={handleConfirm}
          >
            Confirmer
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
}
