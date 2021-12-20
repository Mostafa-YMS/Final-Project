
import { MainMap } from '../components/MainMap';
import React, { useContext } from "react";
import BusContext from "../context/BusesContext";




export const ViewBus = (props)=> {
  let { bus } = useContext(BusContext);
 console.log("bus",bus)
  return (<> 
  <h1>bus {bus} </h1>
  <br />
  <MainMap/>
     </>
  );
}
