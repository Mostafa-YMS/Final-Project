import { useState } from "react";
import { Input } from "./Input";

export const RegisterForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleMode = (mode) => {
    props.setMode(mode)
  }
  return (
    <div className="container">
      <div className="card col-9">
        <form>
          <Input
            value={email}
            setValue={setEmail}
            label={"Email"}
            type={"email"}
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
            Register
          </button>
        </form>
      </div>
      <div className="p-20 m-6 card col-9">
        <span className="d-flex justify-content-center">
          Already have account ?  <a href="" onClick={handleMode(false)}> Login</a>
        </span>
      </div>
    </div>
  );
};
