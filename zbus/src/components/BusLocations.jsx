import { useGetDriver } from './../hooks/getDriver';
import { useState, useEffect } from 'react';
import {Marker} from 'react-map-gl';
import img from "../img/locationx.svg";
import axios from 'axios'



export const BusLocations = ()=>{
    
    console.log("fired");
    // const [buses, setBuses] = useState([]);
    // const getBuses = useGetDriver();
    // console.log("fired");
    // let x = false ; 
    // if(!x){

    //     useEffect(()=>{
    //         getBuses().then(setBuses);
    //         // console.log(buses)
    //         x = true ; 
    //     },[])
    // }

    return(
        <>
        {/* {buses.map((bus)=>(
            <Marker latitude={bus.latitude} longitude={bus.longitude} key={bus.id} >
                <img src={img}/>
                <p style={{color: "white"}}>{bus.name}</p>
            </Marker>
            
        ))} */}
        
        
        </>
        
        
    )
}