import { Marker } from "react-map-gl";
import { useEffect, useState } from "react";
import { useStops } from "../hooks/linesStations.jsx";
import img from "../img/station.svg";

export const Stations = () => {
  const [stationsData, setStationsData] = useState([]);
  const getstations = useStops();

  useEffect(() => {
    getstations().then(setStationsData);
  }, []);

  return (
    <>
      {stationsData.map((station) => (
        <Marker longitude={station.st_longitude} latitude={station.st_latitude}>
          <img src={img} alt="station" />
          <p style={{ color: "white" }}> {station.station}</p>
        </Marker>
      ))}
    </>
  );
};
