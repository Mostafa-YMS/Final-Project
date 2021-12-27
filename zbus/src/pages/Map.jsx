import { MainMap } from "../components/MainMap";
import React, { useState } from "react";
import img from "../img/map2.png";

export const Map = (props) => {
  {
    document.body.style.backgroundImage = `url(${img})`;
    document.body.style.backgroundRepeat = `no-repeat`;
    document.body.style.backgroundSize = `cover`;
  }

  return (
    <>
      <div className="container p-0">
        <div className="row">

        <div className="col-12" style={{width:"100px", height:"460px"}}>
        <MainMap auto={true}/>
        </div>
        </div>
      </div>
    </>
  );
};
