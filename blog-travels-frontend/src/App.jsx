import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Travels from "./components/travels";
// Importa otros componentes según necesites

function App() {
  return (
    <Router>
      <div>
        <h1>Mi App de Viajes</h1>
        <Routes>
          <Route path="/" element={<Travels />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
