import { useState } from "react";
import { Input } from "./Input";
import { useNavigate } from 'react-router-dom';


export const Loginform = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate()
  const handleMode = ()=> {
    navigate("/register")
  }

  return (
    <>
      <div>
        <form>
          <Input
            value={username}
            setValue={setUsername}
            label={"Username"}
            type={"text"}
          />
          <Input
            value={password}
            setValue={setPassword}
            label={"Password"}
            type={"password"}
          />
          <button
            type="submit"
            className="btn btn-primary m-3 d-flex justify-content-center"
          >
            Login
          </button>
        </form>
      </div>
      <div className="p-20 m-6">
        <p className="d-inline">
          New to Ubus ?
        </p>
        <button type="button" className="btn btn-link" style={{fontSize:"14pt"}} onClick={handleMode} > Create an account</button>
      </div>
    </>
  );
};
