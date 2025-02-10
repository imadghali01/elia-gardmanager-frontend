import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/tailwind-global.css';
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomeAdmin from "./pages/HomeAdmin";
import CreateSchedule from './pages/CreateSchedule';


function App() {

  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
    <Routes>
    <Route path="/" element={<h1 className="text-3xl font-bold text-center">Bienvenue sur Elia GardManager</h1>} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/HomeAdmin" element={<HomeAdmin />} />
      <Route path="/CreateSchedule" element={<CreateSchedule />} />
    </Routes>
    </BrowserRouter> 
)


}

export default App
