import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { LoginPage, RegisterPage, HomePage, TravelsDetailPage, SearchPage } from "./pages";
import Navbar from "./components/ui/navbar/navbar";
import ProfilePage from "./pages/profile";
import PrivateRoute from "./components/guards/private-route";
import Footer from "./components/ui/footer/footer";
import MyTravels from "./pages/my-travels";
import TravelForm from "./components/travel/travel-form/travel-form";

function App() {
  const location = useLocation();
  
  // Ocultar Navbar y Footer en Login y Register
  const hideNavAndFooter = ["/login", "/register"].includes(location.pathname);

  return (
    <>
      {!hideNavAndFooter && <Navbar />}
      
      <Routes>
        <Route
          path="/profile"
          element={
            <PrivateRoute role="user">
              <ProfilePage />
            </PrivateRoute>
          }
        />
        
        <Route path="/my-travels" element={<MyTravels />} />
        <Route path="/travels/new" element={<TravelForm />} />
        <Route path="/travels/edit/:id" element={<TravelForm />} />

        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/travels/:id" element={<TravelsDetailPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      
      {!hideNavAndFooter && <Footer />}
    </>
  );
}

export default App;
