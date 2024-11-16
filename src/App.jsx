import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register";
import UserDashboard from "./components/UserDashboard";
import { auth } from "./plugins/firebase";

const App = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUserId(user ? user.uid : null);
    });

    return unsubscribe;
  }, []);

  return (
    <Router
      future={{
        v7_startTransition: true, // Włącza startTransition dla zarządzania stanem
        v7_relativeSplatPath: true, // Nowy sposób rozwiązywania ścieżek dla tras typu "splat"
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/user/*" // Dodajemy "*" na końcu ścieżki
          element={userId ? <UserDashboard userId={userId} /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
