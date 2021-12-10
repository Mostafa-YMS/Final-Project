import { Route, Routes, Redirect } from "react-router-dom";
import { Home } from "./pages";
import { Navbar } from './components/Navbar';
import { useState } from "react";
import { Loginform, RegisterForm } from "./components";


function App() {

  const [mode, setState] = useState('login');


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home mode={<Loginform/>}/>}></Route>
        <Route path="/register" element={<Home mode={<RegisterForm/>}/>}></Route>
      </Routes>
    </>
    
  );
}

export default App;
