import Navbar from "../components/Navbar";
import "../styles/home.css";
import img from "../img/Main.svg";
import { useState } from "react";
import { Loginform } from "../components/Loginform";
import { RegisterForm } from "../components/Registerform";

export const Home = () => {
  const [mode, setMode] = useState('login');
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-6">
            {/* {mode ? (
              <RegisterForm setMode={setMode} />
            ) : (
              <Loginform setMode={setMode} />
            )}
            {mode === "register" && <RegisterForm setMode={handleMode} />} */}
          </div>
          <div className="col-6">
            <img src={img} className="imlink" />
          </div>
        </div>
      </div>
    </>
  );
};
