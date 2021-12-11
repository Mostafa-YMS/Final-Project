import { Route, Routes, Redirect } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { useState } from "react";
import { Loginform, RegisterForm } from "./components";
import { LoginRegister } from './pages/LoginRegister';


function App() {

  const [mode, setState] = useState('login');


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LoginRegister mode={<Loginform/>}/>}></Route>
        <Route path="/register" element={<LoginRegister mode={<RegisterForm/>}/>}></Route>
      </Routes>
    </>
    
  );
}

export default App;
