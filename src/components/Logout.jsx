import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:8000/user/logout", {
        method: "GET",
        credentials: "include", // Supprime le cookie de session
      });

      navigate("/"); 
    } catch (error) {
      console.error("Erreur lors de la déconnexion :", error);
      alert("Impossible de se déconnecter.");
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-gray-700 text-white px-2 py-1 rounded-lg border border-gray-500 shadow-md hover:bg-gray-600 active:opacity-80 transition-all duration-200"
    >
      Logout
    </button>
  );
};

export default Logout;
