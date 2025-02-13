import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { useTranslation } from "react-i18next"; 
import '../styles/tailwind-global.css';
import '../styles/custom.css';
import Navbar from "../components/Navbar";




function HomeAdmin() {

    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState("EN");
    const navigate = useNavigate();
    
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);// Bascule entre "en" et "fr"
    };
  
    return (

        <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-100">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">

        {/* Navbar réutilisable */}
        <Navbar />

        <div className="bg-white py-2 px-6 shadow-md rounded-lg">

        <div className="min-h-screen bg-white flex flex-col items-center">
        {/* Buttons Section */}
        <div className="w-full max-w-sm mt-80 space-y-4">
          <button
            type="button"
            className="w-full rounded-md bg-orange-500 px-4 py-3 text-white font-semibold shadow hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            onClick={() => navigate("/register")} 
          >
            {t("createUser")}
          </button>
  
          <button
            type="button"
            className="w-full rounded-md bg-orange-500 px-4 py-3 text-white font-semibold shadow hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            {t("seeSwitches")}
          </button>
  
          <button
            type="button"
            className="w-full rounded-md bg-orange-500 px-4 py-3 text-white font-semibold shadow hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            onClick={() => navigate("/createschedule")} 
          >
            {t("createSchedule")}
          </button>
        </div>
      </div>

      </div>
        </div>
        </div>

            );
    }

export default HomeAdmin;

