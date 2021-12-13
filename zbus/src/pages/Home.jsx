
import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'
const Home = () => {
  let {user}= useContext(AuthContext)
  return (
    <div>
      <h1> home</h1>
      <h1>hello {user.username} to home</h1>
    </div>
  )
}

export default Home





// import "../styles/home.css";
// import img from "../img/Main.svg";
// import { Loginform } from "../components";

// export const Home = (props) => {
  
//   return (
//     <>
//       <div className="container">
//         <div className="row">
//           <div className="col-6">
//               {props.mode}
//           </div>
//           <div className="col-6">
//             <img src={img} className="imlink" />
//             <h1 className="text-center display-1">UBus</h1>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
