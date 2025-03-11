import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginPage, RegisterPage, HomePage, TravelsDetailPage } from "./pages";
import Navbar from "./components/ui/navbar/navbar";
import ProfilePage from "./pages/profile";
import PrivateRoute from "./components/guards/private-route";
import Footer from "./components/ui/footer/footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/create-event"
          element={
            <PrivateRoute role="admin">
              <ProfilePage />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/travels/:id" element={<TravelsDetailPage />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
