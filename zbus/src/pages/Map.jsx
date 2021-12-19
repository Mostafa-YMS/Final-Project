import React from 'react';
import { MainMap } from '../components/MainMap';
import { useState } from "react";



export const Map = ()=> {
  const [viewport, setViewport] = useState({
    width: 900,
    height: 900,
    latitude: 30.0778,
    longitude: 31.2852,
    zoom: 1
  })
  
  return (<MainMap  viewport={viewport} auto={true} width={"60%"} setViewport={setViewport}/>);
}
