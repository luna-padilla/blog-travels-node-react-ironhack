import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginPage, RegisterPage, HomePage, TravelsDetailPage } from "./pages";
import Navbar from "./components/ui/navbar/navbar";
import ProfilePage from "./pages/profile";
import PrivateRoute from "./components/guards/private-route";
import Footer from "./components/ui/footer/footer";
import MyTravels from "./pages/my-travels";
import TravelForm from "./components/travel/travel-form/travel-form";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/profile"
          element={
            <PrivateRoute role="user">
              <ProfilePage />
            </PrivateRoute>
          }
        />
        {/* <Route
          path="/admin"
          element={
            <PrivateRoute role="admin">
              <AdminPanel />
            </PrivateRoute>
          }
        /> */}

        {/* <Route path="/403" element={<Forbidden/>}/>
        <Route path="*" element={<NotFound/>}/> */}

        <Route path="/my-travels" element={<MyTravels />} />
        <Route path="/travels/new" element={<TravelForm />} />
        <Route path="/travels/edit/:id" element={<TravelForm />} />

        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/travels/:id" element={<TravelsDetailPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
