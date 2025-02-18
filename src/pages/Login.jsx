import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ShiftCard from "../components/ShiftCard";
import IphoneContainer from "../components/IphoneContainer";

const Login = ({ onClose }) => {  
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8000/user/login", {
              method: "POST", 
              headers: {
                "Content-Type": "application/json",
              },
              credentials: "include", // ❗important c'est pour envoyé les coockies 🍪 de session. 
              body: JSON.stringify({ email: userId, passWord: password }), // Envoie les infos
            });
      
            const data = await response.json();
      
            if (response) {
              navigate("/schedule"); // Redirige vers Schedule
            } else {
              alert(data.error || "Identifiants incorrects");
            }
          } catch (error) {
            console.error("Erreur de connexion :", error);
            alert("Problème de connexion au serveur");
          }
        };

    return (
        <IphoneContainer className="flex max-h-full overflow-hidden" >
        <div className="flex items-center justify-center max-h-full">
            <div className="bg-gray-200 p-6 rounded-2xl shadow-lg w-96 text-center relative">
                
                <h2 className="text-orange-600 text-3xl font-bold mb-4">LOGIN</h2>
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