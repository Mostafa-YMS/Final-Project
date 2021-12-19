import {Marker} from 'react-map-gl';
import img from "../img/bus.svg";

import React, { useContext } from "react";
import BusesContext from "../context/BusesContext";
const x = {longitude: 30.994132,
    latitude: 30.525411}
    const y = {longitude: 32.533245,
        latitude: 29.965457}
        const z = {longitude: 29.965676,
            latitude: 31.085135}
            let pop = {longitude: 29.963376,
                latitude: 31.084125}
export const Bus1 = ()=> {
    let { buses,isready } = useContext(BusesContext);
    // buses.map(console.log(this.latitude))
    console.log("frombus1",isready)
   if(isready==true){
    console.log("frombus1",buses)
     pop = {longitude:buses.latitude, latitude:buses.latitude}
   }
    
    return(
        <>
        <Marker {...pop}>
            <img src={img}/>
        </Marker>
        <Marker {...x}>
            <img src={img}/>
        </Marker>
        <Marker {...y}>
            <img src={img}/>
        </Marker>
        <Marker {...pop}>
            <img src={img}/>
        </Marker>
        </>
    )
}