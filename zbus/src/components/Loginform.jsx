import { useState } from "react";
import { Input } from "./Input";

export const Loginform = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
            Login
          </button>
        </form>
      </div>
      <div className="p-20 m-6 card col-9">
        <span className="d-flex justify-content-center">
          New to Ubus ?  <a href=""> Create an account</a>
        </span>
      </div>
    </div>
  );
};
