import React, { useEffect, useState } from "react";
import "../style/index.css";
import { NavBar } from "./NavBar";
import { Route } from "react-router-dom";
import { AuthProvider } from "./Auth";
import { Routes } from "./Routes";
import { Profile } from "./Profile";
import { Login } from "./Login";

function App() {
  return (
    <AuthProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
