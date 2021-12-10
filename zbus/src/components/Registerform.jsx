import { useState } from "react";
import { Input } from "./Input";

export const RegisterForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div id="register" style={{marginTop:'30%'}}>
      <div>
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
            className="btn btn-primary m-3"
          >
            Register
          </button>
        </form>
      </div>
      <div className="p-20 m-6">
        <span className="d-flex justify-content-center">
          Already have account ?  <a href="/" > Login</a>
        </span>
      </div>
    </div>
  );
};
