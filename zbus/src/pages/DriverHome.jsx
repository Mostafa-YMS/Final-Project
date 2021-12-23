
import React, {useContext} from 'react'
import DriverContext from '../context/DriverContext'
import { useDriver } from "../hooks/hookdriver";
import styles from "../styles/driverhome.module.css";
import img from "../img/map2.png";


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
          driverupdate({ name:driver.bus_number, latitude: position.coords.latitude, longitude: position.coords.longitude, driver:driver.username})
       
   }
       else {
           console.log("errorrrrr")
               
              }   
       
       });}
   } 
   let end =  (e)=> {
    const value=e.target.value
       fetch('http://127.0.0.1:8000/mapapi/delete/'+driver.username+'/', { method: 'DELETE' })
      //  .then(() => this.setState({ status: 'Delete successful' }));

   }

   {
    document.body.style.backgroundImage = `url(${img})`;
    document.body.style.backgroundRepeat = `no-repeat`;
    document.body.style.backgroundSize = `cover`;
  }

  return (
<div className="container mt-5" style={styles}>
    <div className="row d-flex justify-content-center">
        <div className="col-md-7">
            <div className="card p-3 py-4" className={styles.card}>
                <div className="text-center"> <img src="https://i.imgur.com/bDLhJiP.jpg" width="100" className="rounded-circle" /> </div>
                <div className="text-center mt-3"> 
                    <h5 className="mt-2 mb-0">{isready? driver.username : "drivername"}</h5> <span>BUS1 Driver</span>
                    <div className="px-4 mt-1">
                        
                    </div>
                    {isready?
                    <ul className="list-group " className={styles.new}>
                    <li className="list-group-item">First Name: <span className="badge"> {driver.first_name}</span></li>
                    <li className="list-group-item">Last Name: <span className="badge"> {driver.last_name}</span></li>
                    <li className="list-group-item">Bus Number: <span className="badge"> {driver.bus_number}</span></li>
                  </ul>:null}
                    <div className="buttons" className={styles.buttons}> <button className="btn btn-outline-primary px-4" onClick={start} value={"bus1"}>Start</button> <button className="btn btn-primary px-4 " onClick={end} value={"bus1"}>End</button> </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}









