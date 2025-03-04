import React from "react";
import {  Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Travels from "./pages/travels";
import Navbar from "./components/ui/navbar/navbar";
// Importa otros componentes según necesites

function App() {
  return (
    <>
    <Navbar/>
      
        <Routes>
          <Route path="/" element={<Travels />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      
    </>
  );
}

export default App;
