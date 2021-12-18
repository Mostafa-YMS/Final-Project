import { Marker } from "react-map-gl";
import img from "../img/bus.svg";

const pop = {
  longitude: 31.2852,
  latitude: 30.0778,
  offsetLeft: 0.1526,
  offsetTop: 0.1542,
};

const pop1 = { longitude: 31.2454, latitude: 30.0805 };

const pop2 = { longitude: 31.245, latitude: 30.071 };

const pop3 = { longitude: 31.2469, latitude: 30.0522 };

const pop4 = { longitude: 31.2425, latitude: 30.057 };

const pop5 = { longitude: 31.2648, latitude: 30.0689 };

export const Stations = () => {
  return (
    <>
      <Marker {...pop}>
        <img src={img} />
      </Marker>
      <Marker {...pop1}>
        <img src={img} />
        <p style={{ color: "white" }}> روض الفرج</p>
      </Marker>

      <Marker {...pop2}>
        <img src={img} />
        <p style={{ color: "white" }}>حى شبرا </p>
      </Marker>

      <Marker {...pop3}>
        <img src={img} />
        <p style={{ color: "white" }}> العتبه</p>
      </Marker>

      <Marker {...pop4}>
        <img src={img} />
        <p style={{ color: "white" }}>عرابى </p>
      </Marker>

      <Marker {...pop5}>
        <img src={img} />
        <p style={{ color: "white" }}>غمره </p>
      </Marker>
    </>
  );
};
