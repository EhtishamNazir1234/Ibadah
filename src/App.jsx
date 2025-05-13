import React, { useEffect, useState } from "react";
import Home from "./Components/Home";
import Admin from "./Components/Admin";
import Courses from "./Components/Courses";
import NotFoundPage from "./Components/NotFoundPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import About from "./Components/About";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import Modal from "./Components/Modal";
import ProtectedRoute from "./Components/ProtectedRoute";
import PrivateRoute from "./Components/PrivateRoute";
import { AuthProvider } from "./Contexts/AuthContext";
import Contact from "./Components/Contact";
function App() {
  const [role, setRole] = useState("");

  useEffect(() => {
    const userRole = localStorage.getItem("role");
    setRole(userRole);
  }, []);

  return (
    <AuthProvider>
      <Router>
        <div>
          <Routes>
            <Route
              path="/"
              element={role === "admin" ? <Navigate to="/admin" /> : <Home />}
            />
            <Route
              path="/admin"
              element={role === "admin" ? <Admin /> : <Navigate to="/" />}
            />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFoundPage />} />
            {/* <Route path="/Register" element={<Register />} /> */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/courses" element={<Courses />} />
            {/* <Route path="/login" element={<Login />} /> */}
            <Route element={<PrivateRoute />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
          
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
