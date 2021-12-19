// import { useState } from "react";
// import { Input } from "./Input";
// import { useNavigate } from 'react-router-dom';

// export const Loginform = (props) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate()
//   const handleMode = ()=> {
//     navigate("/register")
//   }

//   return (
//     <>
//       <div>
//         <form>
//           <Input
//             value={username}
//             setValue={setUsername}
//             label={"Username"}
//             type={"text"}
//           />
//           <Input
//             value={password}
//             setValue={setPassword}
//             label={"Password"}
//             type={"password"}
//           />
//           <button
//             type="submit"
//             className="btn btn-primary m-3"
//             style={{width:'94%'}}
//           >
//             Login
//           </button>
//         </form>
//       </div>
//       <div className="p-20 m-6">
//         <p className="d-inline">
//           New to Ubus ?
//         </p>
//         <button type="button" className="btn btn-link" style={{fontSize:"14pt"}} onClick={handleMode} > Create an account</button>
//       </div>
//     </>
//   );
// };
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { GoogleLog } from './GoogleLog';

export const Loginform = (props) => {
  let { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleMode = () => {
    navigate("/register");
  };
  return (
    <div>
      <form onSubmit={loginUser}>
        <div className="form-group m-3">
          <label>{props.label}</label>
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="Enter Username"
          />
        </div>
        <div className="form-group m-3">
          <label>{props.label}</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter Password"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary m-3"
          style={{ width: "94%" }}
        >
          Login
        </button>
        <GoogleLog></GoogleLog>
      </form>
      <div className="p-20 m-6">
        <p className="d-inline">New to Ubus ?</p>
        <button
          type="button"
          className="btn btn-link"
          style={{ fontSize: "14pt" }}
          onClick={handleMode}
        >
          Create an account
        </button>
      </div>
    </div>
  );
};
