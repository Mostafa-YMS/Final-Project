import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDriver } from "../hooks/hookdriver";


export const Driver = (props) => {
    
//   const [driver_id, setId] = useState("");
  const [latitude, setLatitude] = useState(1);
  const [longitude, setLongitude] = useState(2);
  const driver = useDriver();
    
//   const navigate = useNavigate()
//      const handleMode = ()=> {
//        navigate("/login")
//      }

let driverreg =  (e)=> {

                 navigator.geolocation.watchPosition( function(position) {
                     
                    const value=e.target.value
                    console.log(position)
                    console.log(value)
                     if (position.coords.latitude!="") {
                    driver({ name:value, latitude: position.coords.latitude, longitude: position.coords.longitude })
                    
                }
                    else {
                        console.log("errorrrrr")
                            
                           }
                    
                    });
                } 
          
  return ( 
   
    <ul className="list-group">
  <li className="list-group-item disabled">BUSES login</li>
  <li className="list-group-item"><button className="btn btn-link" style={{ fontSize: "14pt" }} onClick={driverreg} value={"BUS 1"}>BUS 1</button></li>
  <li className="list-group-item"><button className="btn btn-link" style={{ fontSize: "14pt" }} onClick={driverreg} value={"BUS 2"}>BUS 2</button></li>
  <li className="list-group-item"><button className="btn btn-link" style={{ fontSize: "14pt" }} onClick={driverreg} value={"BUS 3"}>BUS 3</button></li>
  <li className="list-group-item"><button className="btn btn-link" style={{ fontSize: "14pt" }} onClick={driverreg} value={"BUS 4"}>BUS 4</button></li>
</ul>
// 
 );
}