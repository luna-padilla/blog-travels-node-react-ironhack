import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Travels from "./components/Travels";
// Importa otros componentes según necesites

function App() {
  return (
    <Router>
      <div>
        <h1>Mi App de Viajes</h1>
        <Routes>
          <Route path="/" element={<Travels />} />
          <Route path="/login" element={<Login />} />
          {/* Agrega más rutas según sea necesario */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
