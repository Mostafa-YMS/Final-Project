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
import { LinesStops } from './pages/Stations';

function App() {
  const [mode, setState] = useState("login");
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    const json = localStorage.getItem("site-dark-mode");
    const currentMode = JSON.parse(json);
    if (currentMode) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    const json = JSON.stringify(darkMode);
    localStorage.setItem("site-dark-mode", json);
  }, [darkMode]);

  return (
    <>
      <AuthProvider>
        <Navbar />
      <div>
        <h1>Header</h1>
      <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
      </div>
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
          <Route path="/" element={<Map />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/lines" element={<LinesStops />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
