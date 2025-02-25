import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "../styles/tailwind-global.css";
import "../styles/custom.css";

function Navbar() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("EN");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const changeLanguage = (lng) => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative z-10">
      {/* Header */}
      <header className="w-full flex items-center justify-between bg-gradient-to-b from-white to-gray-100 shadow-lg rounded-b-lg p-4 relative z-20">
        {/* Logo */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="/src/assets/img/LogoElia.png"
            alt="Elia Logo"
            className="h-11"
          />
        </div>

        {/* Title */}
        <h1 className="text-lg font-bold mt-5 mr-6">eDuty</h1>

        {/* Language Switcher + Menu Burger */}
        <div className="flex items-center space-x-4">
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

          {/* Menu Burger */}
          <div className="cursor-pointer" onClick={toggleMenu}>
            <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-800"></div>
          </div>
        </div>
      </header>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div
          className="absolute top-0 left-47 w-350px h-full z-30"
          onClick={toggleMenu}
        >
          {/* Menu Content */}
          <div
            className="menuContent absolute top-[72px] left-1/2 transform -translate-x-1/2 w-[375px] h-[740px] rounded-b-[40px] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()} // Empêche la fermeture du menu lors d'un clic à l'intérieur
          >
            {/* Menu Items */}
            <ul className="p-4 space-y-4 flex-1 flex flex-col justify-center items-center mb-20">
              <li>
                <a href="/Schedule" className="text-white text-2xl">
                  Schedule
                </a>
              </li>
              <li>
                <a href="/shiftcardusers" className="text-white text-2xl">
                  See all the Switches
                </a>
              </li>

              <li>
                <a href="/HomeAdmin" className="text-white text-2xl">
                  HomeAdmin
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
