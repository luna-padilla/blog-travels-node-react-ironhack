import React from "react";
import {  Routes, Route } from "react-router-dom";
import {Travels, LoginPage} from "./pages";
import Navbar from "./components/ui/navbar/navbar";

function App() {
  return (
    <>
    <Navbar/>
        <Routes>
          <Route path="/" element={<Travels />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
    </>
  );
}

export default App;
