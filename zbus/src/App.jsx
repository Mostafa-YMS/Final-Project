import { Route, Routes, Redirect } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { useState } from "react";
import { Loginform, RegisterForm } from "./components";
import { LoginRegister } from "./pages/LoginRegister";
// import { Home } from "./pages/Home";
import Home from "./pages/Home";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import { Map, Profile } from "./pages";
import LoginRoute from "./utils/LoginRoute";
import React from "react";
import "./styles/App.css";
import { LinesStops } from './pages/LinesStops';

function App() {
  const [mode, setState] = useState("login");
 

  return (
    <>
      <AuthProvider>
        <Navbar />
        <div className="container">
        <Routes>
          <Route
            path="/login"
            element={
              <LoginRoute child={<LoginRegister mode={<Loginform />} />} />
            }
          />
          <Route
            path="/register"
            element={
              <LoginRoute child={<LoginRegister mode={<RegisterForm />} />} />
            }
          />
          <Route path="/test" element={<PrivateRoute child={<Home />} />} />
          <Route path="/" element={<PrivateRoute child={<Map/>} />} />
          <Route path="/profile" element={<PrivateRoute child={<Profile/>} />} />
          <Route path="/lines" element={<PrivateRoute child={<LinesStops/>} />} />
        </Routes>
        </div>
      </AuthProvider>
    </>
  );
}

export default App;
