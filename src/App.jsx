import { useEffect, useState} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/tailwind-global.css';
import Login from "./pages/Login";
import Register from "./pages/Register";

import Schedule from "./pages/Schedule";

import HomeAdmin from "./pages/HomeAdmin";
import CreateSchedule from './pages/CreateSchedule';
import ShiftCardAdmin from './pages/ShiftCardAdmin';


import { useNavigate } from "react-router-dom";



function App() {

  //Vérification automatique de la session au chargement de l'application
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <AppContent user={user} setUser={setUser} />
    </BrowserRouter>
  );
}

  function AppContent({ user, setUser }) {
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8000/user/me", {
            credentials: "include", // ❗ Nécessaire pour récupérer la session.
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                console.log("Utilisateur non connecté");
            } else {
                setUser(data);
                console.log("Utilisateur connecté :", data);
                navigate("/schedule"); // Redirige vers Schedule si connecté
            }
        })
        .catch(error => console.error("Erreur de vérification de session :", error));
    }, []);


    return (
      <Routes>
      <Route path="/" element={<h1 className="text-3xl font-bold text-center">Bienvenue sur Elia GardManager</h1>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
    
        <Route path="/Schedule" element={<Schedule />} />
        <Route path="/HomeAdmin" element={<HomeAdmin />} />
    
        <Route path="/CreateSchedule" element={<CreateSchedule />} />
        <Route path="/ShiftCardAdmin" element={<ShiftCardAdmin />} />

    
      </Routes>
  );

}

export default App;