import { MainMap } from "../components/MainMap";
import React, { useState } from "react";
import img from "../img/map2.png";

export const Map = (props) => {
  {
    document.body.style.backgroundImage = `url(${img})`;
    document.body.style.backgroundRepeat = `no-repeat`;
    document.body.style.backgroundSize = `cover`;
  }

  const [viewport, setViewport] = useState({
    width: 1100,
    height: 680,
    latitude: 30.0778,
    longitude: 31.2852,
    zoom: 1,
  });
  return (
    <>
      <div className="container p-0">
        <MainMap viewport={viewport} auto={true} setViewport={setViewport}/>
      </div>
    </>
  );
};
