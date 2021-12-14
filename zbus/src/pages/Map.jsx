import React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import {GeolocateControl} from 'react-map-gl';


export const Map = ()=> {
  const geolocateStyle = {
    top: 0,
    left: 0,
    margin: 10
  };
  const positionOptions = {enableHighAccuracy: true};

  const [viewport, setViewport] = useState({
    width: 800,
    height: 800,
    latitude: 30.0778,
    longitude: 31.2852,
    zoom: 1
  })

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapboxApiAccessToken='pk.eyJ1IjoibW9oYW1lZGFtaW4wMDAwMCIsImEiOiJja3gwZnJiazkwczRhMnJwenduZ2ZkN2x6In0.HafaYHRDf0lGzVMq3k318w'
      mapStyle="mapbox://styles/mapbox/dark-v9"
      // mapStyle="mapbox://styles/mapbox/streets-v8"
    >
    <GeolocateControl
        style={geolocateStyle}
        positionOptions={positionOptions}
        trackUserLocation
        auto
      />
      </ReactMapGL>
  );
}
