import React from "react";
// const pop = {longitude: 66.2852,
//     latitude: -37.0778, offsetLeft: 0.1526,
//     offsetTop: 0.1542}


// export const Mapx = ()=> {
  export const Buses = ()=> {
    // let [pop, setPop] = useState({longitude: 66.2852,
    //     latitude: -37.0778, offsetLeft: 0.1526,
    //     offsetTop: 0.1542})
    if (navigator.geolocation) {
         navigator.geolocation.watchPosition(function(postion) {
          console.log("Latitude is :", postion.coords.latitude);
          console.log("Longitude is :", postion.coords.longitude);
        });
      } else {
        //no can do
      }
    return (<p>aaaa</p>
    );}
// const watcher = navigator.geolocation.watchPosition(displayLocationInfo);

// setTimeout(() => {
//   navigator.geolocation.clearWatch(watcher);
// },0);

// function displayLocationInfo(position) {
//   // ...do something with the data each time\
//   const lng = position.coords.longitude;
//   const lat = position.coords.latitude;

//   console.log(`longitude: ${lng} | latitude: ${lat}`);
// }
// return (<p>aaaa</p>
//     );

// }
// import React, { useContext } from "react";
// import BusContext from "../context/BusContext";

// export const Buses = ()=> {
  
//   let { loginbus } = useContext(BusContext);
   
// return (
// <ul className="list-group">
//   <li className="list-group-item disabled">BUSES login</li>
//   <li className="list-group-item"><a className="nav-link" href="/busx" child="1" onClick={loginbus}>BUS 1</a></li>
//   <li className="list-group-item"><button className="btn btn-link" style={{ fontSize: "14pt" }} onClick={loginbus} value={"2"}>BUS 2</button></li>
//   <li className="list-group-item"><button className="btn btn-link" style={{ fontSize: "14pt" }} onClick={loginbus} value={"3"}>BUS 3</button></li>
//   <li className="list-group-item"><button className="btn btn-link" style={{ fontSize: "14pt" }} onClick={loginbus} value={"4"}>BUS 4</button></li>
// </ul> );}
                 