import {Marker} from 'react-map-gl';
import img from "../img/bus.svg";


const pop = {longitude: 31.2852,
    latitude: 30.0778, offsetLeft: 0.1526,
    offsetTop: 0.1542}

export const Stations = ()=> {
    return(
        <>
        <Marker {...pop}>
            <img src={img}/>
        </Marker>
        </>
    )
}