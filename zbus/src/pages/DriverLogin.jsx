import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import DriverContext from "../context/DriverContext";


export const DriverLogin = (props) => {
  let { loginDriver } = useContext(DriverContext);
  
  
  return (
    <div>
      <form onSubmit={loginDriver}>
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
      
      </form>
        
    </div>
  );
};

        