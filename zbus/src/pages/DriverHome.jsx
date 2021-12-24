
import React, {useContext} from 'react'
import DriverContext from '../context/DriverContext'
import { useDriver } from "../hooks/hookdriver";
export const DriverHome = () => {
  let {driver,isready}= useContext(DriverContext)
  const driverupdate = useDriver();
  let start =  (e)=> {
    if(isready==true){
       navigator.geolocation.watchPosition( function(position) {
        
       const value=e.target.value
       console.log( value,  position.coords.latitude,  position.coords.longitude, driver.username)
      //  console.log(value)
        if (position.coords.latitude!="") {
          driverupdate({ name:value, latitude: position.coords.latitude, longitude: position.coords.longitude, driver:driver.username})
       
   }
       else {
           console.log("errorrrrr")
               
              }   
       
       });}
   } 
   let end =  (e)=> {
    const value=e.target.value
       fetch('http://127.0.0.1:8000/mapapi/delete/'+value+'/', { method: 'DELETE' })
      //  .then(() => this.setState({ status: 'Delete successful' }));

   }

  return (
    <div>
      <h1>driver home</h1>
      <h1 >hello {isready? driver.username : null} to home</h1>
      <button className="btn btn-success" style={{ fontSize: "14pt" }} onClick={start} value={"bus1"} >BUS 3</button>
      <br /> <br />
      <button className="btn btn-primary" style={{ fontSize: "14pt" }} onClick={end} value={"bus1"}>BUS 4</button>

    </div>
  )
}








