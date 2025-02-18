import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "../styles/tailwind-global.css";
import "../styles/custom.css";

function Navbar() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("EN");
  const navigate = useNavigate();

  const changeLanguage = (lng) => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
  };

  return (
    <header className="w-90 flex items-center justify-between bg-white border-b p-4">
      {/* Logo */}
      <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate("/")}> 
        <img src="/src/assets/img/LogoElia.png" alt="Elia Logo" className="h-11" />
      </div>

      {/* Title */}
      <h1 className="text-lg font-bold pr-10 pt-3">eDuty</h1>

      {/* Language Switcher */}
      <div className="flex space-x-2">
        <button
          onClick={() => changeLanguage("en")}
          className={`p-1 rounded ${
            language === "EN" ? "border-2 border-gray-800" : ""
          }`}
        >
          🇬🇧
        </button>
        <button
          onClick={() => changeLanguage("fr")}
          className={`p-1 rounded ${
            language === "FR" ? "border-2 border-gray-800" : ""
          }`}
        >
          🇫🇷
        </button>
      </div>
    </header>
  );
}

export default Navbar;
