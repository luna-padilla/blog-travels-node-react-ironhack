import React from "react";
import {  Routes, Route } from "react-router-dom";
import Login from "./components/users/login/login-form";
import Travels from "./pages/travels";
import Navbar from "./components/ui/navbar/navbar";

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
