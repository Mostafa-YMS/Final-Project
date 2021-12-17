import { Route, Routes, Redirect } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { useState } from "react";
import { Loginform, RegisterForm } from "./components";
import { LoginRegister } from './pages/LoginRegister';
// import { Home } from "./pages/Home";
import Home from './pages/Home'
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext'
import { Map } from './pages';
import LoginRoute from './utils/LoginRoute';

function App() {

  const [mode, setState] = useState('login');


  return (
    <>
      
             
      <AuthProvider> 
              <Navbar/>      
             <Routes>
               <Route path="/home" element={<PrivateRoute child={<Home/>} />}/>
               <Route path="/map" element={<Map/>}/>
               <Route path="/" element={<LoginRoute child={<LoginRegister mode={<Loginform/>}/>}/>}/>
               <Route path="/register" element={<LoginRoute child={<LoginRegister mode={<RegisterForm/>}/>}/>}/>
             </Routes>
      </AuthProvider>
    </>
    
  );
}

export default App;