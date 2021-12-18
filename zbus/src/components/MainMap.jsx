import React from "react";
import { useState } from "react";
import ReactMapGL, {
  NavigationControl,
  GeolocateControl,
  _MapContext as MapContext,
} from "react-map-gl";
import { Stations } from "../components";
import DeckGL from "@deck.gl/react";
import { MapView } from "@deck.gl/core";
import { PathLayer } from "@deck.gl/layers";
import { FlyToInterpolator } from "@deck.gl/core";

export const MainMap = (props) => {
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoibW9oYW1lZGFtaW4wMDAwMCIsImEiOiJja3gwZnJiazkwczRhMnJwenduZ2ZkN2x6In0.HafaYHRDf0lGzVMq3k318w";

  const teleport = new FlyToInterpolator({ speed: 2 });

  const geolocateStyle = {
    top: 0,
    left: 0,
    margin: 10,
  };

  const positionOptions = { enableHighAccuracy: true };

  // const [viewport, setViewport] = useState({
  //   latitude: 30.0778,
  //   longitude: 31.2852,
  //   zoom: 1
  // })

  const data = [
    {
      path: [
        [31.2454, 30.0805],
        [31.245, 30.071],
        [31.2425, 30.057],
        [31.2469, 30.0522],
        [31.2648, 30.0689],
      ],
      name: "Richmond - Millbrae",
      color: [255, 0, 0, 255],
    },
  ];

  const layer = new PathLayer({
    id: "path-layer",
    data,
    pickable: true,
    widthScale: 1,
    widthMinPixels: 1,
    getPath: (d) => d.path,
    getColor: (d) => d.color,
    getWidth: (d) => 5,
  });

  return (
    <div
      style={{
        position: "absolute",
        display: "inline-block",
        width: 1800,
        height: 900,
      }}
    >
      <DeckGL
        initialViewState={props.viewport}
        controller={true}
        layers={layer}
        ContextProvider={MapContext.Provider}
      >
        <MapView id="map"  height="70%" controller={true}>
          <ReactMapGL
            // {...viewport}
            onViewportChange={(nextViewport) => props.setViewport(nextViewport)}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            mapStyle="mapbox://styles/mapbox/dark-v9"
            // mapStyle="mapbox://styles/mapbox/streets-v8"
          ></ReactMapGL>
        </MapView>

        <Stations />
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={positionOptions}
          trackUserLocation
          // auto
        />
        <div style={{ position: "absolute", right: 30, top: 0, zIndex: 1 }}>
          <NavigationControl />
        </div>
      </DeckGL>
    </div>
  );
};
