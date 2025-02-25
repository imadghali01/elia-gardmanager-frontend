import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/tailwind-global.css";
import "../styles/custom.css";
import Navbar from "../components/Navbar";
import IphoneContainer from "../components/IphoneContainer";
import Logout from "../components/Logout";

function HomeAdmin() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("EN");
  const navigate = useNavigate();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Bascule entre "en" et "fr"
  };

  return (
    <IphoneContainer>
      <div className="flex min-h-screen flex-1 flex-col justify-center lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-2 px-6">
            <Logout />
            <div className="min-h-screen bg-white flex flex-col items-center">
              {/* Buttons Section */}
              <div className="w-full max-w-sm mt-50 space-y-4">
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
                  onClick={() => navigate("/shiftcardusers")}
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
    </IphoneContainer>
  );
}

export default HomeAdmin;
