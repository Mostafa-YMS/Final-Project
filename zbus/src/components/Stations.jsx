import { Marker } from "react-map-gl";
import img from "../img/bus.svg";
import { useEffect , useState } from "react";
import { useLines, useStops } from '../hooks/linesStations.jsx';


export const Stations = () => {

  const [stationsData, setStationsData] = useState([]);
  const getstations = useStops();

  useEffect(() => {
    getstations().then(setStationsData);
  }, []);

  return (
    <>



     
                 { stationsData.map((station)=>(

   
            <Marker longitude={station.st_longitude} latitude={station.st_latitude} >
            <img src={img} alt="station"/>
            <p style={{ color: "white" }}> {station.station}</p>
            </Marker>

                 ))}  



    </>
  );
};
