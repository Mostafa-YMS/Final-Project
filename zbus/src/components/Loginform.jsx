// import { useState } from "react";
// import { Input } from "./Input";
// import { useNavigate } from 'react-router-dom';
// import React, {useContext} from 'react'
// import AuthContext from '../context/AuthContext'

// export const Loginform = (props) => {
//   let {loginUser} = useContext(AuthContext)
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
  
//   const navigate = useNavigate()
//   const handleMode = ()=> {
//     navigate("/register")
//   }

//   return (
//     <>
//       <div>
//         <form onSubmit={loginUser}>
//           <Input
//             name="username"
//             value={username}
//             setValue={setUsername}
//             label={"Username"}
//             type={"text"}
//           />
//           <Input
//             name="password"
//             value={password}
//             setValue={setPassword}
//             label={"Password"}
//             type={"password"}
//           />
//           <button
//             type="submit"
//             className="btn btn-primary m-3 d-flex justify-content-center"
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
import { useState } from "react";
import { Input } from "./Input";
import { useNavigate } from 'react-router-dom';
import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'

export const Loginform = (props) => {
  let {loginUser} = useContext(AuthContext)
    return (
        <div>
            <form onSubmit={loginUser}>
                <input type="text" name="username" placeholder="Enter Username" />
                <input type="password" name="password" placeholder="Enter Password" />
                <input type="submit"/>
            </form>
        </div>
    )
};

