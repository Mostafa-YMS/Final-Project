import { Route, Routes } from "react-router-dom";
import { Loginform, RegisterForm, Driver, Navbar} from "./components";
import Home from "./pages/Home";
import PrivateRoute from "./utils/PrivateRoute";
import { LocationGet } from "./context/BusesContext";
import { Map, Profile, Lines_Stations, LoginRegister, Buses,ViewBus} from "./pages";
import LoginRoute from "./utils/LoginRoute";
import React, { useContext } from "react";
import AuthContext from "./context/AuthContext";
import "./styles/App.css";





function App() {
 
  
  let { user, logOut } = useContext(AuthContext);
  

  return (
    <>
      <LocationGet>
      {user ? <Navbar /> : ""}
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
          {/* <Route path="/lines" element={<PrivateRoute child={<LinesStops/>} />} /> */}
          <Route path="/lines" element={<Lines_Stations/>} />
          ######
          {/* <Route path="/viewbus" element={<ViewBus />} /> */}
          <Route path="/driver" element={<Driver />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        </LocationGet> 
    </>
  );
}

export default App;
