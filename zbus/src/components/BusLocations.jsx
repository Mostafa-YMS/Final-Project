import { useGetDriver } from './../hooks/getDriver';
import { useState, useEffect } from 'react';
import {Marker} from 'react-map-gl';
import img from "../img/locationx.svg";
import {useSelector} from "react-redux"

export const BusLocations = ()=>{
    const busesR = useSelector((state)=>state)
    console.log(busesR);
    
    const [buses, setBuses] = useState([]);
    const getBuses = useGetDriver();
    
    useEffect(() => {
        getBuses().then(setBuses);
    }, [buses]);

    return(
        <>
        {buses.map((bus)=>(
            <Marker latitude={bus.latitude} longitude={bus.longitude} key={bus.id} >
                <img src={img}/>
                <p style={{color: "white"}}>{bus.name}</p>
            </Marker>
        ))}
        
        </>
        
        
    )
}