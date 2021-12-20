import React from "react";
import ReactMapGL, { NavigationControl, GeolocateControl } from "react-map-gl";
import { Stations } from "../components";
import { PathLayer } from "@deck.gl/layers";
import { FlyToInterpolator } from "@deck.gl/core";
import { Lines } from "./Lines";
import { Bus1 } from './Bus1';
export const MainMap = (props) => {
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoibW9oYW1lZGFtaW4wMDAwMCIsImEiOiJja3gwZnJiazkwczRhMnJwenduZ2ZkN2x6In0.HafaYHRDf0lGzVMq3k318w";

  const geolocateStyle = {
    top: 0,
    left: 0,
    margin: 10,
  };

  const positionOptions = { enableHighAccuracy: true };

  return (
    <ReactMapGL
      {...props.viewport}
      onViewportChange={(nextViewport) => props.setViewport(nextViewport)}
      mapboxApiAccessToken={MAPBOX_TOKEN}
      mapStyle="mapbox://styles/mapbox/dark-v9"
      // mapStyle="mapbox://styles/mapbox/streets-v8"
    >
      <GeolocateControl
        style={geolocateStyle}
        positionOptions={positionOptions}
        trackUserLocation
        auto={props.auto}
      />
      <div style={{ position: "absolute", right: 30, top: 0, zIndex: 1 }}>
        <NavigationControl></NavigationControl>
      </div>
      <Bus1 />
      <Stations />
      <Lines />
    </ReactMapGL>
  );
};
