/* eslint-disable no-lone-blocks */
import { useNavigate } from 'react-router-dom';
import React from 'react'
import img from "../img/home.jpg";
const Home = () => {

  {
    document.body.style.backgroundImage = `url(${img})`
    document.body.style.backgroundRepeat = `no-repeat`
    document.body.style.backgroundSize = `cover`
  }
  const navigate = useNavigate();
  const Reg = () => {
    navigate("/register");
  };
  const Log = () => {
    navigate("/Login");
  };
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
          <p style={{ color: "white",fontSize: "50pt"  }}> UBus</p>
          
        </div>
        
          <div className='col-6'>
          <button className="btn btn-dark" onClick={Reg}  style={{ float: "right",display:"flex" }}>Register</button>
          <button className="btn btn-secondary" onClick={Log} style={{ float: "right",display:"flex" }}>Login</button>
          </div>
        </div>
      </div>
      <br></br><br></br><br></br>
      <h1 style={{ color: "white", textAlign: "center",fontFamily:"-moz-initial" }}>We take you throuh the ultimate journey</h1>


    </div>
  )
}

export default Home

