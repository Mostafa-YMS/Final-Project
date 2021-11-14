<<<<<<< HEAD
import './App.css';
import Home from './Home';
function App() {
  //ToDo
  return (
    <div className="App">
       <div className="content">
         <Home />
       </div>
    </div>
=======
import { Route, Routes, Redirect } from "react-router-dom";
import { LoginRegister } from "./pages/LoginRegister";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginRegister />}></Route>
    </Routes>
>>>>>>> af51be598e3a88fa70e327ddf787d77448b2815d
  );
}

export default App;
