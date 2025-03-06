import React from "react";
import {  Routes, Route } from "react-router-dom";
import {TravelsPage, LoginPage, RegisterPage} from "./pages";
import Navbar from "./components/ui/navbar/navbar";

function App() {
  return (
    <>
    <Navbar/>
        <Routes>
          <Route path="/" element={<TravelsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
    </>
  );
}

export default App;
