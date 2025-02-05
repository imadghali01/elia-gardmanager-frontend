import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/tailwind-global.css';
import Login from "./pages/Login";


function App() {

  return (
    <div>
    <Login />
  </div>
  )
}

export default App
