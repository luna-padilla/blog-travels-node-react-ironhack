import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginPage, RegisterPage, HomePage, TravelsDetailPage } from "./pages";
import Navbar from "./components/ui/navbar/navbar";
// comment
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/travels/:id" element={<TravelsDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
