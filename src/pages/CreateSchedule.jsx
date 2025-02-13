import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { useTranslation } from "react-i18next"; 
import '../styles/tailwind-global.css';
import '../styles/custom.css';
import Navbar from "../components/Navbar";




function CreateSchedule() {

    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState("EN");
    const navigate = useNavigate();
    
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);// Bascule entre "en" et "fr"
    };

     // Gestion des champs de saisie avec useState
    const [formData, setFormData] = useState({
      email: "",
      password: "",
      });
  
      // Gestion des changements de champs
      const handleChange = (e) => {
      setFormData({
          ...formData,
          [e.target.name]: e.target.value,
          });
      };
  
      // Gestion de la soumission du formulaire
      const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Données soumises :", formData);
      // Ici, tu peux appeler une API pour envoyer les données à ton backend
      };
  
  
    return (

        <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-100">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">

        {/* Navbar réutilisable */}
        <Navbar />

        <div className="bg-white py-2 px-6 shadow-md rounded-lg">

        <div className="min-h-screen bg-white flex flex-col items-center">

        <h1 className="text-xl">Create schedule</h1>    
        
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Champ Full Name */}
            <div className="flex space-x-4 w-full">
            <div className="flex-1">
                <label htmlFor="FullName" className="block text-sm font-medium text-gray-700">
                Full Name
                </label>
                <input
                id="FullName"
                name="FullName"
                placeholder="Full Name"
                type="text"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            </div>

            <div className="flex space-x-4">

            {/* Champ StartDate */}
            <div className="w-3/4">
                <label htmlFor="Date" className="block text-sm font-medium text-gray-700">
                
                </label>
                <input
                id="Date"
                name="Date"
                placeholder="02/01/2020"
                type="text"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>

            {/* Champ StartHours */}
            <div className="w-2/4">
                <label htmlFor="Hours" className="block text-sm font-medium text-gray-700">
                
                </label>
                <input
                id="Hours"
                name="Hours"
                placeholder="12:00 AM"
                type="text"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>

            

            </div>

            <div className="flex space-x-4">

            {/* Champ EndDate */}
            <div className="w-3/4">
                <label htmlFor="Date" className="block text-sm font-medium text-gray-700">
                
                </label>
                <input
                id="Date"
                name="Date"
                placeholder="02/01/2020"
                type="text"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>    

            {/* Champ EndHours */}
            <div className="w-2/4">
                <label htmlFor="Hours" className="block text-sm font-medium text-gray-700">
                
                </label>
                <input
                id="Hours"
                name="Hours"
                placeholder="12:00 AM"
                type="text"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
        </div>

            {/* Bouton de soumission */}
            <div>
                <button
                type="submit"
                className="w-full flex justify-center rounded-md bg-orange-500 px-4 py-2 text-white font-semibold shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                Create Schedule
                </button>
            </div>
          </form>
        
        </div>
      </div>

      </div>
        </div>

            );
    }

export default CreateSchedule;

