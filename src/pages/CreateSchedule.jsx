'use client';

import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom"; 
import { useTranslation } from "react-i18next"; 
import '../styles/tailwind-global.css';
import '../styles/custom.css';
import Navbar from "../components/Navbar";
import ExampleListUsers from "../components/ExempleListUsers";
import ExampleListShifts from "../components/ExempleListShifts";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import IphoneContainer from "../components/IphoneContainer";


function CreateSchedule() {

    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState("EN");
    const navigate = useNavigate();
    
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);// Bascule entre "en" et "fr"
    };

    const [startDate, setStartDate] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);
    const [selectedShift, setSelectedShift] = useState("");
    const [registeredShifts, setRegisteredShifts] = useState([]);
    const [isReadyToSubmit, setIsReadyToSubmit] = useState(false);
    

    const shifts = ["shift1", "shift2", "shift3", "shift4", "shift5", "shift6"];
    const weekDays = ["Jeudi", "Vendredi", "Samedi", "Dimanche", "Lundi", "Mardi", "Mercredi"];

    useEffect(() => {
        setIsReadyToSubmit(registeredShifts.length === 6 && startDate !== null);
    }, [registeredShifts, startDate]);

    const handleUserSelect = (user) => {
        console.log("Utilisateur sélectionné :", user);
        setSelectedUser(user);
    };

    const handleShiftSelect = (shift) => {
        console.log("Shift sélectionné :", shift);
        setSelectedShift(shift);
    };


    const registerShift = () => {
        console.log("Tentative d'enregistrement :", { selectedUser, selectedShift });

        if (!startDate) {
            alert("Veuillez d'abord sélectionner une date de début !");
            return;
        }
        if (!selectedUser || !selectedUser.id) {
            alert("Veuillez sélectionner un utilisateur !");
            return;
        }
        if (!selectedShift) {
            alert("Veuillez sélectionner un shift !");
            return;
        }
        if (registeredShifts.find(shift => shift.shift === selectedShift)) {
            alert("Ce shift est déjà enregistré !");
            return;
        }

        setRegisteredShifts(prev => [...prev, { shift: selectedShift, user: selectedUser }]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!startDate) {
            alert("Veuillez sélectionner une date de début !");
            return;
        }

        const formattedShifts = {};
        registeredShifts.forEach(({ shift, user }, index) => {
            const shiftSchedule = {};
            weekDays.forEach((day, i) => {
                const date = new Date(startDate);
                date.setDate(date.getDate() + (index * 7) + i); // Ajoute 7 jours pour chaque shift 
                shiftSchedule[day] = [date.toISOString().split("T")[0], user.id, user.statusId];
            });
            formattedShifts[shift] = shiftSchedule;
        });

        console.log("📤 Données envoyées :", JSON.stringify({ shifts: formattedShifts, user: selectedUser?.id }, null, 2));

        try {
            const response = await fetch("http://localhost:8000/schedule", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({  shifts: formattedShifts, user: selectedUser.id })
            });

            if (!response.ok) {
                throw new Error(`Erreur API: ${response.status} ${response.statusText}`);
            }

            alert("Planning enregistré avec succès !");
            navigate("/schedule");

        } catch (error) {
            console.error("❌ Erreur lors de l'enregistrement :", error);
            alert("Une erreur est survenue !");
        }
    };

    return (
        <IphoneContainer>
        <div className="flex flex-col h-full">
            <div className="flex-1 flex items-center justify-cente">
                <div className="bg-white py-2 px-6 shadow-md rounded-lg">
                    <div className="min-h-screen bg-white flex flex-col items-center justify-items-center">
                        <h1 className="text-xl font-bold mb-30 mt-5">Créer un Horaire</h1>    
                        {/* Sélection de la date de départ */}
                        <div className="flex flex-col items-center">
                            <label className="block text-sm font-medium text-gray-900">Sélectionnez une date de départ ( un jeudi )  </label>
                            <DatePicker 
                                selected={startDate} 
                                onChange={(date) => setStartDate(date)} 
                                className="mt-2 p-2 border rounded-md" 
                                disabled={registeredShifts.length > 0} // Bloque le DatePicker après l'enregistrement d'un shift
                            />


                        </div>

                        {/* Sélection utilisateur + shift */}
                        <div className="flex flex-col items-center mt-4">
                            <label className="block text-sm font-medium text-gray-900"> </label>
                            <ExampleListUsers 
                                onSelect={handleUserSelect}
                                selectedUser={selectedUser}
                            />

                        </div>

                        <div className="flex flex-col items-center mt-4">
                            <label className="block text-sm font-medium text-gray-900"> </label>
                            <ExampleListShifts onSelect={handleShiftSelect} />
                        </div>

                        <button 
                            className="mt-2 p-2 bg-green-500 text-white rounded-md" 
                            onClick={registerShift}
                        >
                            Register the Shift
                        </button>

                        {/* Affichage des shifts enregistrés */}
                        {registeredShifts.length > 0 && (
                            <div className="mt-6">
                                <h2 className="text-lg font-bold">Shifts enregistrés :</h2>
                                <ul className="list-disc pl-4">
                                    {registeredShifts.map(({ shift, user }) => (
                                        <li key={shift} className="text-gray-800">
                                            {shift} → {user.name} (ID: {user.id}, StatusID: {user.statusId})
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Bouton de soumission */}
                        <button
                            type="submit"
                            className={`mt-6 p-2 text-white rounded-md ${
                                isReadyToSubmit ? "bg-orange-500 hover:bg-indigo-500" : "bg-gray-300 cursor-not-allowed"
                            }`}
                            onClick={handleSubmit}
                            disabled={!isReadyToSubmit}
                        >
                            Enregistrer le planning
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </IphoneContainer>
            );
}

export default CreateSchedule;

