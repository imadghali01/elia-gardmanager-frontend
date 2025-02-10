import { useState } from "react";
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
        
        <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex">
        {/* Champ Full Name */}
        <div className="w-2/3">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Full Name
                </label>
                <input
                id="email"
                name="email"
                placeholder="Full Name"
                type="email"
                required
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            {/* Champ contract */}
            <div className="w-1/3 ml-4"> 
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                N° de contract
                </label>
                <input
                id="email"
                name="email"
                placeholder="487690"
                type="email"
                required
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
        </div>
          </form>
        
        </div>
      </div>

      </div>
        </div>

            );
    }

export default Schedule;

