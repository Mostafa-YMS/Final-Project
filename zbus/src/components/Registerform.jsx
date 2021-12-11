import { useState } from "react";
import { Input } from "./Input";
import { useNavigate } from 'react-router-dom';


export const RegisterForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirm, setConfirm] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [photo, setPhoto] = useState("");
  const [birthday, setBirthday] = useState("");

  const navigate = useNavigate()
    const handleMode = ()=> {
      navigate("/")
    }

  return (
    <div id="register" style={{margin:"20px 0px"}}>
      <div>
        <form>
        <Input
            value={fname}
            setValue={setFname}
            label={"First Name"}
            type={"text"}
          />
          <Input
            value={lname}
            setValue={setLname}
            label={"Last Name"}
            type={"text"}
          />
          <Input
            value={birthday}
            setValue={setBirthday}
            label={"Birthday"}
            type={"date"}
          />
        <Input
            value={username}
            setValue={setUsername}
            label={"Username"}
            type={"text"}
          />
          <Input
            value={email}
            setValue={setEmail}
            label={"Email"}
            type={"email"}
          />
          <Input
            value={phone}
            setValue={setPhone}
            label={"Phone number"}
            type={"number"}
          />
          <Input
            value={password}
            setValue={setPassword}
            label={"Password"}
            type={"password"}
          />
          <Input
            value={confirm}
            setValue={setConfirm}
            label={"Confirm Password"}
            type={"password"}
          />
          <Input
            value={photo}
            setValue={setPhoto}
            label={"Profile Picture"}
            type={"file"}
            accept={"image/*"}
          />
          <button
            type="submit"
            className="btn btn-primary m-3"
          >
            Register
          </button>
        </form>
      </div>
      <div className="m-6">
        <p className="d-inline">
          Already have account ? 
        </p>
        <button type="button" className="btn btn-link" style={{fontSize:"14pt"}} onClick={handleMode} > Login</button>
      </div>
    </div>
  );
};
