import { Route, Routes, Redirect } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { useState } from "react";
import { Loginform, RegisterForm ,Driver} from "./components";
import { LoginRegister } from "./pages/LoginRegister";
// import { Home } from "./pages/Home";
import Home from "./pages/Home";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import { LocationGet } from "./context/BusesContext";
import { BusLocation } from "./components/BusLocation";
import { Map, Profile ,Buses,ViewBus} from "./pages";
import LoginRoute from "./utils/LoginRoute";

function App() {
  const [mode, setState] = useState("login");

  return (
    <>
      <AuthProvider>
      <LocationGet>
        <Navbar />
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
          <Route path="/buses" element={<Buses />} />
          <Route path="/location" element={<BusLocation />} />
          <Route path="/driver" element={<Driver />} />
          <Route path="/viewbus" element={<ViewBus />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        </LocationGet> 
      </AuthProvider>
    </>
  );
}

export default App;
