// import React from 'react';
import { MainMap } from '../components/MainMap';
import React, { useContext } from "react";
import BusesContext from "../context/BusesContext";

export const Map = ()=> {
  let { getlocations } = useContext(BusesContext);
  return (<><button className="btn btn-link" style={{ fontSize: "14pt" }} onClick={getlocations} >get buses locations</button>
  <br /><br /><br /><br /><br /><br /><br /><br />
  <MainMap/> 
  <br /><br />
  </>
  );
}
