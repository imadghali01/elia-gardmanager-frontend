import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Traductions
const resources = {
  en: {
    translation: {
      createUser: "Create a New User",
      seeSwitches: "See the Current and Finished Switches",
      createSchedule: "Create the Schedule",
      appTitle: "eDuty",
    },
  },
  fr: {
    translation: {
      createUser: "Créer un nouvel utilisateur",
      seeSwitches: "Voir les commutations en cours et terminées",
      createSchedule: "Créer le planning",
      appTitle: "eDuty",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Langue par défaut
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
