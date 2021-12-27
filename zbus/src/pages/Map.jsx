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
        <MainMap auto={true}/>
      </div>
    </>
  );
};
