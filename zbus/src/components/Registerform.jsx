import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export const RegisterForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [first_name, setFname] = useState("");
  const [last_name, setLname] = useState("");
  const [birth_date, setBirthday] = useState("");
  
  const navigate = useNavigate()
     const handleMode = ()=> {
       navigate("/login")
     }

  async function signup() {
    let item = { email, username, first_name, last_name, password, birth_date };
    console.warn(item);

    let result = await fetch("http://127.0.0.1:8000/user/register", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        // "Accapt":'application/json'
      },
    });
    result = await result.json();
    console.warn(result);
    navigate("/login")
  }
  return (
    <div className="App">
      <h1 style={{marginLeft: "40px"}}>Register</h1>
      <input
        type="text"
        onChange={(e) => setFname(e.target.value)}
        className="form-control"
        placeholder="first_name"
      />
      <br />
      <input
        type="text"
        onChange={(e) => setLname(e.target.value)}
        className="form-control"
        placeholder="last_name"
      />
      <br />
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        className="form-control"
        placeholder="username"
      />
      <br />
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        className="form-control"
        placeholder="email"
      />
      <br />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        className="form-control"
        placeholder="password"
      />
      <br />
      <input
        type="date"
        onChange={(e) => setBirthday(e.target.value)}
        className="form-control"
        placeholder="birth"
      />
       <button
             className="btn btn-primary mt-3 mb-3"
             style={{width:'100%'}}
             onClick={signup}
           >
             Register
           </button>
       <div className="m-6">
         <p className="d-inline">
           Already have account ?
         </p>
         <button type="button" className="btn btn-link" style={{fontSize:"14pt"}} onClick={handleMode} > Login</button>
       </div>
    </div>
  );
};

// import { useState } from "react";
// import { Input } from "./Input";
// import { useNavigate } from 'react-router-dom';

// export const RegisterForm = (props) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [username, setUsername] = useState("");
//   const [confirm, setConfirm] = useState("");
//   const [fname, setFname] = useState("");
//   const [lname, setLname] = useState("");
//   const [phone, setPhone] = useState("");
//   const [photo, setPhoto] = useState("");
//   const [birthday, setBirthday] = useState("");

//   const navigate = useNavigate()
//     const handleMode = ()=> {
//       navigate("/")
//     }

//   return (
//     <div style={{margin:"20px 0px"}}>
//       <div>
//         <form onSubmit={submit}>
//         <Input
//             value={fname}
//             setValue={setFname}
//             label={"First Name"}
//             type={"text"}
//           />
//           <Input
//             value={lname}
//             setValue={setLname}
//             label={"Last Name"}
//             type={"text"}
//           />
//           <Input
//             value={birthday}
//             setValue={setBirthday}
//             label={"Birthday"}
//             type={"date"}
//           />
//         <Input
//             value={username}
//             setValue={setUsername}
//             label={"Username"}
//             type={"text"}
//           />
//           <Input
//             value={email}
//             setValue={setEmail}
//             label={"Email"}
//             type={"email"}
//           />
//           <Input
//             value={phone}
//             setValue={setPhone}
//             label={"Phone number"}
//             type={"number"}
//           />
//           <Input
//             value={password}
//             setValue={setPassword}
//             label={"Password"}
//             type={"password"}
//           />
//           <Input
//             value={confirm}
//             setValue={setConfirm}
//             label={"Confirm Password"}
//             type={"password"}
//           />
//           <Input
//             value={photo}
//             setValue={setPhoto}
//             label={"Profile Picture"}
//             type={"file"}
//             accept={"image/*"}
//           />
//           <button
//             type="submit"
//             className="btn btn-primary m-3"
//             style={{width:'94%'}}
//           >
//             Register
//           </button>
//         </form>
//       </div>
//       <div className="m-6">
//         <p className="d-inline">
//           Already have account ?
//         </p>
//         <button type="button" className="btn btn-link" style={{fontSize:"14pt"}} onClick={handleMode} > Login</button>
//       </div>
//     </div>
//   );
// };
// import React, {useState} from 'react';
// import { useState } from "react";

// import { useNavigate } from 'react-router-dom';

// export const RegisterForm = (props) => {

//     const [password, setPassword] = useState("");
//     const [username, setUsername] = useState("");

//     const [first_name, setFname] = useState("");
//     const [last_name, setLname] = useState("");

//     const [profile_photo, setPhoto] = useState("");
//     const [birth_date, setBirthday] = useState("");
//     const navigate = useNavigate()
//     const handleMode = ()=> {
//       navigate("/")
//     }

//     const submit = async (e )=> {

//         e.preventDefault();

//         let response = await fetch('http://127.0.0.1:8000/user/register', {
//             method: 'POST',
//             headers: {'Content-Type': 'application/json'},
//             body:JSON.stringify({'first_name':first_name, 'last_name':last_name,
//             'first_name':username, 'last_name':password})
//         });
//         let data = await response.json()
//         if(response.status === 200){

//           console.log("data",data)
//           navigate('/')
//         }
//         else{
//           alert('Something went wrong!')
//       }

//     }

//     return (
//     <div style={{margin:"20px 0px"}}>
//       <div>

//           <input label={"First Name"}
//             className="form-control" placeholder="fName"
//             onChange={e => setFname(e.target.value)}
//           />
//           <input label={"Last Name"}
//             className="form-control" placeholder="lname"
//             onChange={e => setLname(e.target.value)}
//           />
//           <input label={"Username"}
//             className="form-control" placeholder="username"
//             onChange={e => setUsername(e.target.value)}
//           />
//           <input label={"Password"}
//             className="form-control" placeholder="password"
//             onChange={e => setPassword(e.target.value)}
//           />
//           <input label={"Birthday"}
//             className="form-control" placeholder="birthday"
//             onChange={e => setBirthday(e.target.value)}
//           />
//           <input label={"Profile Picture"}
//             className="form-control" placeholder="setPhoto"
//             onChange={e => setPhoto(e.target.value)} type={"file"} accept={"image/*"}
//           />

//           <button
//             onClick={submit}
//             className="btn btn-primary m-3"
//             style={{width:'94%'}}
//           >
//             Register
//           </button>

//       </div>
//       <div className="m-6">
//         <p className="d-inline">
//           Already have account ?
//         </p>
//         <button type="button" className="btn btn-link" style={{fontSize:"14pt"}} onClick={handleMode} > Login</button>
//       </div>
//     </div>
//   );
// };
