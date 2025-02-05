import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/tailwind-global.css';
import Register from "./pages/Register";

function App() {

  return (
      <BrowserRouter future={{ v7_startTransition: true }}>
      <Routes>
      <Route path="/" element={<h1 className="text-3xl font-bold text-center">Bienvenue sur Elia GardManager</h1>} />
        <Route path="/register" element={<Register />} />
      </Routes>
      </BrowserRouter>
  )
}

export default App
