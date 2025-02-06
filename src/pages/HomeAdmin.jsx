import { useState } from "react";
import '../styles/tailwind-global.css';
import '../styles/custom.css';




function HomeAdmin() {

    const [language, setLanguage] = useState("EN");

    return (

        <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-100">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-10 px-6 shadow-md rounded-lg">

        <div className="min-h-screen bg-white flex flex-col items-center">
        {/* Header */}
        <header className="w-full flex items-center justify-between bg-white border-b shadow-md p-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/src/assets/img/LogoElia.png" alt="Elia Logo" className="h-13" /> 
          </div>
  
          {/* Title */}
          <h1 className="text-xl font-bold text-gray-800">eDuty</h1>
  
          {/* Language Switcher */}
          <div className="flex space-x-2">
            <button
              onClick={() => setLanguage("EN")}
              className={`p-1 rounded ${
                language === "EN" ? "border-2 border-gray-800" : ""
              }`}
            >
              🇬🇧
            </button>
            <button
              onClick={() => setLanguage("FR")}
              className={`p-1 rounded ${
                language === "FR" ? "border-2 border-gray-800" : ""
              }`}
            >
              🇫🇷
            </button>
          </div>
        </header>
  
        {/* Buttons Section */}
        <div className="w-full max-w-sm mt-20 space-y-4">
          <button
            type="button"
            className="w-full rounded-md bg-orange-500 px-4 py-3 text-white font-semibold shadow hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            Create a New User
          </button>
  
          <button
            type="button"
            className="w-full rounded-md bg-orange-500 px-4 py-3 text-white font-semibold shadow hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            See the Current and Finished Switches
          </button>
  
          <button
            type="button"
            className="w-full rounded-md bg-orange-500 px-4 py-3 text-white font-semibold shadow hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            Create the Schedule
          </button>
        </div>
      </div>

      </div>
        </div>
        </div>

            );
    }

export default HomeAdmin;

