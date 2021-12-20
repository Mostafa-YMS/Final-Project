// import React from 'react';
import { MainMap } from '../components/MainMap';
import React, { useContext ,useState} from "react";
import BusesContext from "../context/BusesContext";

export const Map = ()=> {
  let { getlocations } = useContext(BusesContext);
  const [viewport, setViewport] = useState({
    width: 900,
    height: 900,
    latitude: 30.0778,
    longitude: 31.2852,
    zoom: 1
  })
  
  return (<>
  <button className="btn btn-warning" style={{ fontSize: "14pt" }} onClick={getlocations} >get buses locations</button>
  
  <br /> <br /> <br /> 
  <MainMap  viewport={viewport} auto={true} width={"60%"} setViewport={setViewport}/>
  
  
  </>);
}

// import { useState } from "react";



// export const Map = ()=> {
//   const [viewport, setViewport] = useState({
//     latitude: 30.0778,
//     longitude: 31.2852,
//     zoom: 1
//   })
  
//   return (<MainMap  viewport={viewport} auto={true} width={"60%"} setViewport={setViewport}/>);
// }
