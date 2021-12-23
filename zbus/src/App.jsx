import { Route, Routes } from "react-router-dom";
import { Loginform, RegisterForm, Driver, Navbar} from "./components";
import Home from "./pages/Home";
import PrivateRoute from "./utils/PrivateRoute";
import { LocationGet } from "./context/BusesContext";
import { Map, Profile, Lines_Stations, LoginRegister, DriverLogin, DriverHome }from "./pages";
import LoginRoute from "./utils/LoginRoute";
import React, { useContext } from "react";
import AuthContext from "./context/AuthContext";
import { useState } from "react";
import { Driverprovider} from "./context/DriverContext";
import "./styles/App.css";



function App() {
  const [active , setactive] = useState (null);


  let { user, logOut } = useContext(AuthContext);
  
  return (
    <>
      <LocationGet>
      <Driverprovider>
      {user ? <Navbar active={active} /> : ""}
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
          <Route path="/home" element={<Home />}  />
          <Route path="/" element={<PrivateRoute child={<Map setactive={setactive}/>} />} />
          <Route path="/profile" element={<PrivateRoute child={<Profile setactive={setactive}/>} />} />
          {/* <Route path="/lines" element={<PrivateRoute child={<Lines_Stations/>} />} /> */}
          <Route path="/lines" element={<Lines_Stations setactive={setactive}/>} />
          #####
          <Route path="/driver" element={<Driver />} />
      
        <Route path="/driverlogin" element={<LoginRegister mode={<DriverLogin />}/>} />
        <Route path="/driverhome" element={<DriverHome />} />

        </Routes>
        </Driverprovider>
        </LocationGet> 
    </>
  );
}

export default App;
