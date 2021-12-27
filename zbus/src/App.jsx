import { Route, Routes } from "react-router-dom";
import { Loginform, RegisterForm, Navbar} from "./components";
import Home from "./pages/Home";
import PrivateRoute from "./utils/PrivateRoute";
import { Map, Profile, Lines_Stations, LoginRegister, DriverLogin, DriverHome , Chat}from "./pages";
import LoginRoute from "./utils/LoginRoute";
import {DriverRoute,DriverLoginRoute} from "./utils/DriverRoute";
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
      <Driverprovider>
      {user ? <Navbar/> : ""}
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
          <Route path="/" element={<LoginRoute child={<Home />} />}  />
          <Route path="/home" element={<PrivateRoute child={<Map/>} />} />
          <Route path="/profile" element={<PrivateRoute child={<Profile/>} />} />
          <Route path="/lines" element={<PrivateRoute child={<Lines_Stations/>} />} />
          {/* <Route path="/lines" element={<Lines_Stations/>} /> */}
          #####
        <Route path="/driverlogin" element={<LoginRegister mode={<DriverLogin />}/>} />
        <Route path="/driverhome" element={<DriverHome />} />
        <Route path="/chat" element={<Chat />} />

        </Routes>
        </Driverprovider>
        
    </>
  );
}

export default App;
