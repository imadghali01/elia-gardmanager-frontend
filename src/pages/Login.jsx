import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import IphoneContainer from "../components/IphoneContainer";

const Login = ({ onClose }) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // envoyé les coockies de session.
        body: JSON.stringify({ email: userId, passWord: password }),
      });

      const data = await response.json();
      globalThis.currentUser = [
        "data.userId",
        data.role,
      ]; /* id de lutilisateur recuperer */

      if (response && currentUser[1] == "user") {
        navigate("/schedule");
      } else if (response && currentUser[1] == "admin") {
        navigate("/HomeAdmin");
      } else {
        alert(data.error || "Identifiants incorrects");
      }
    } catch (error) {
      console.error("Erreur de connexion :", error);
      alert("Problème de connexion au serveur");
    }
  };

  return (
    <IphoneContainer className="flex max-h-full overflow-hidden">
      <div className="flex items-center justify-center max-h-full">
        <div className="formLogin p-6 rounded-2xl shadow-lg w-96 text-center relative mt-40">
          <h2 className="logintitle text-orange-600 text-3xl font-bold mb-4">
            LOGIN
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="ID utilisateur"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="w-full p-2 border border-gray-400 rounded-lg"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-400 rounded-lg"
            />
            <button
              type="submit"
              className="bg-orange-600 text-white py-2 px-4 rounded-lg w-full"
            >
              SUBMIT
            </button>
          </form>
          <a href="#" className="text-orange-600 text-sm mt-2 inline-block">
            Forgot Password?
          </a>
        </div>
      </div>
    </IphoneContainer>
  );
};

export default Login;
