import {Marker} from 'react-map-gl';
import img from "../img/locationx.svg";

import React, { useContext } from "react";
import BusesContext from "../context/BusesContext";
let bus4 = {longitude: 30.994132,
            latitude: 30.525411}
let bus3= {longitude: 32.533245,
            latitude: 29.965457}
let bus1 = {longitude: 32.147358,
            latitude: 31.132167}
let bus2 = {longitude: 29.963376,
            latitude: 31.084125}
                
export const Bus1 = ()=> {
    let { buses,isready } = useContext(BusesContext);
  if(isready==true){
    bus4={longitude:buses[0].longitude,latitude:buses[0].latitude}
    bus3={longitude:buses[1].longitude,latitude:buses[1].latitude}
    bus1={longitude:buses[2].longitude,latitude:buses[2].latitude}
    // bus2={longitude:buses[3].longitude,latitude:buses[3].latitude}
//    console.log("prop?",x,w,bus1,bus2)
   }
   return(
        <>
        <Marker longitude={bus4.longitude} latitude={bus4.latitude}>
           <img src={img}/>
        </Marker>
        {/* <Marker {...bus3}>
            <img src={img}/>
        </Marker>
        <Marker {...bus1}>
            <img src={img}/>
        </Marker>
        <Marker {... bus2}>
            <img src={img}/>
        </Marker> */}
        </>
    )
        
}