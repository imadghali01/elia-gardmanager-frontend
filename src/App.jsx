import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/tailwind-global.css';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Schedule from "./pages/Schedule";
import HomeAdmin from "./pages/HomeAdmin";
import Schedule from "./pages/Schedule";


function App() {

  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
    <Routes>
    <Route path="/" element={<h1 className="text-3xl font-bold text-center">Bienvenue sur Elia GardManager</h1>} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Schedule" element={<Schedule />} />

      <Route path="/HomeAdmin" element={<HomeAdmin />} />
      <Route path="/Schedule" element={<Schedule />} />
    </Routes>
    </BrowserRouter> 
)


}

export default App
