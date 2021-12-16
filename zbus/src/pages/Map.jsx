import React from 'react';
import { useState } from 'react';
import ReactMapGL, { Layer, NavigationControl, Source, GeolocateControl, _MapContext as MapContext } from 'react-map-gl';
import { Stations } from '../components';
import DeckGL from '@deck.gl/react';
import {LineLayer} from '@deck.gl/layers';
import {MapView, FirstPersonView} from '@deck.gl/core';
import {TripsLayer} from '@deck.gl/geo-layers';
import {PathLayer} from '@deck.gl/layers';



export const Map = ()=> {
  const MAPBOX_TOKEN='pk.eyJ1IjoibW9oYW1lZGFtaW4wMDAwMCIsImEiOiJja3gwZnJiazkwczRhMnJwenduZ2ZkN2x6In0.HafaYHRDf0lGzVMq3k318w'

  const geolocateStyle = {
    top: 0,
    left: 0,
    margin: 10
  };
  const positionOptions = {enableHighAccuracy: true};

  const [viewport, setViewport] = useState({
    latitude: 30.0778,
    longitude: 31.2852,
    zoom: 1
  })

 
  const lay = {
    type: 'line',
    paint: 'red'
  }

  const cord = [[30.0778, 31.2852], [31.2852, 30.0778]]
  // const dataOne = {
  //   type: "Feature",
  //   properties: {},
  //   geometry: {
  //     type: "LineString",
  //     coordinates: cord
  //   }
  // };
  // const data = [
  //   {sourcePosition: cord[0], targetPosition: cord[1]}
  // ];
  // const layers = [
  //   new LineLayer({id: 'line-layer', data})
  // ];
  const data = [{
       path: cord,
       name: 'Richmond - Millbrae',
       color: [255, 0, 0, 255]
     },
   ]

 const layer = new PathLayer({
   id: 'path-layer',
   data,
   pickable: true,
   widthScale: 20,
   widthMinPixels: 2,
   getPath: d => d.path,
   getColor: d=> d.color,
   getWidth: d => 5
 });

  return (
    // <ReactMapGL
    //   {...viewport}
    //   onViewportChange={nextViewport => setViewport(nextViewport)}
    //   mapboxApiAccessToken={MAPBOX_TOKEN}
    //   mapStyle="mapbox://styles/mapbox/dark-v9"
    //   // mapStyle="mapbox://styles/mapbox/streets-v8"
    // >

    // {/* <GeolocateControl
    //     style={geolocateStyle}
    //     positionOptions={positionOptions}
    //     trackUserLocation
    //     auto
    //   /> */}

    //     {/* <Source id="polylineLayer" type="geojson" data={dataOne}>
    //       <Layer
    //         id="lineLayer"
    //         type="line"
    //         source="my-data"
    //         layout={{
    //           "line-join": "round",
    //           "line-cap": "round"
    //         }}
    //         paint={{
    //           "line-color": "rgba(3, 170, 238, 0.5)",
    //           "line-width": 5
    //         }}
    //       />
    //     </Source> */}
    //   <NavigationControl {...naver}></NavigationControl>
    //   <Stations/>
    //   </ReactMapGL>
    <div style={{position: "absolute", display: 'inline-block', width: 1800, height: 900}}>
    <DeckGL
      initialViewState={viewport}
      controller={true}
      layers={layer}
      ContextProvider={MapContext.Provider}
    >
      <MapView id="map" width="50%" height="80%" controller={true}>
       <ReactMapGL
      // {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapboxApiAccessToken={MAPBOX_TOKEN}
      mapStyle="mapbox://styles/mapbox/dark-v9"
      // mapStyle="mapbox://styles/mapbox/streets-v8"
    >

        {/* <Source id="polylineLayer" type="geojson" data={dataOne}>
          <Layer
            id="lineLayer"
            type="line"
            source="my-data"
            layout={{
              "line-join": "round",
              "line-cap": "round"
            }}
            paint={{
              "line-color": "rgba(3, 170, 238, 0.5)",
              "line-width": 5
            }}
          />
        </Source> */}
      </ReactMapGL>
      </MapView>
      
      <Stations/>
      <GeolocateControl
        style={geolocateStyle}
        positionOptions={positionOptions}
        trackUserLocation
        auto
      />
      <div style={{ position: "absolute", right: 30, top: 0, zIndex: 1 }}>
        <NavigationControl />
      </div>
      
    </DeckGL>
    </div>
  );
}
