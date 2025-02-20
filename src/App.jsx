import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./styles/tailwind-global.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Schedule from "./pages/Schedule";
import HomeAdmin from "./pages/HomeAdmin";
import CreateSchedule from "./pages/CreateSchedule";
// Importez le composant ShiftCard qui affiche les cartes complètes pour chaque switch
import ShiftCard from "./components/ShiftCard.jsx";
import ShiftCardUsers from "./pages/ShiftCardUsers";

function App() {
  // Vérification de session (utilisateur connecté ou non)
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <AppContent user={user} setUser={setUser} />
    </BrowserRouter>
  );
}

function AppContent({ user, setUser }) {
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/user/me", {
      credentials: "include", // Pour récupérer la session
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          console.log("Utilisateur non connecté");
        } else {
          setUser(data);
          console.log("Utilisateur connecté :", data);
        }
      })
      .catch((error) =>
        console.error("Erreur de vérification de session :", error)
      );
  }, [navigate, setUser]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <h1 className="text-3xl font-bold text-center">
            Bienvenue sur Elia GardManager
          </h1>
        }
      />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Schedule" element={<Schedule />} />
      <Route path="/HomeAdmin" element={<HomeAdmin />} />
      <Route path="/CreateSchedule" element={<CreateSchedule />} />
      {/* Pour la route /ShiftCardAdmin, on affiche le composant ShiftCard qui liste les cartes */}
      <Route path="/ShiftCardAdmin" element={<ShiftCard />} />
      <Route path="/ShiftCardUsers" element={<ShiftCardUsers />} />
    </Routes>
  );
}

export default App;
