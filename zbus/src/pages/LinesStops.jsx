import { useState, useEffect } from "react";
import { MainMap } from "../components";
import { useLines, useStops } from '../hooks/linesStations.jsx';
import { FlyToInterpolator } from 'deck.gl';

export const LinesStops = () => {


  //  const linesData = [{ id:1 , line:"one" } ,{id:2 , line:"two" , },{id:3 , line:"three"} ]
  //    const stationsData = [{"id": 1, "st_latitude": 90,"st_longitude": 80,"station": "station1","line": 1} ,{"id": 2, "st_latitude": 35,"st_longitude": 36,"station": "station2","line": 1},
  //       {"id": 3, "st_latitude": 37,"st_longitude": 38,"station": "station3","line": 1},{"id": 4, "st_latitude": 33, "st_longitude": 34,"station": "stat1","line": 2} ,
  //     {"id": 5, "st_latitude": 40, "st_longitude": 41,"station": "stat2","line": 2},{"id": 6, "st_latitude": 0, "st_longitude": 0,"station": "stat3","line": 2}
  //   ,{"id": 7, "st_latitude": 0,"st_longitude": 0,"station": "kl1","line": 3},{"id": 8, "st_latitude": 0, "st_longitude": 0,"station": "kl2","line": 3},{"id": 9, "st_latitude": 0,"st_longitude": 0,"station": "kl3","line": 3}]

  const [stationsData, setStationsData] = useState([]);
  const getstations = useStops();

  useEffect(() => {
    getstations().then(setStationsData);
  }, []);


  const [linesData, setlinesData] = useState([]);
  const getlines = useLines();

  useEffect(() => {
    getlines().then(setlinesData);
  }, []);



  const [viewport, setViewport] = useState({
    width: 900,
    height: 500,
    latitude: 30.0778,
    longitude: 31.2852,
    zoom: 1
  })

  let from = ""
  let to = ""
  return (


    <>
      <div className="row">
        <div className="col-3">
          {linesData.map((line) => (

            <div style={{ float: "left", paddingTop: "30px", paddingLeft: "20px" }}  >
              <span className="dropdown" style={{ padding: "10px", margin: "10px" }} >
                <span id={line.id} key={line.id}>
                  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-expanded="false">
                    {line.line}</button>
                  <div className="dropdown-menu" style={{ padding: "10px", margin: "10px", paddingLeft: "20px" }}>

                    {stationsData.filter((station) =>
                      station.line === line.id).map((station) => (
                        <button className="dropdown-item" key={station.id} onClick={() => {
                          console.log(station);
                          setViewport({
                            latitude: station.st_latitude, longitude: station.st_longitude, zoom: 17, pitch: 0,
                            bearing: 0,
                            transitionDuration: 1000,
                            transitionInterpolator: new FlyToInterpolator()
                          })
                        }} >
                          {station.station}</button>
                      ))}
                  </div>



                </span>
              </span>
            </div>

          ))}
          <br />  <br />  <br />  <br />  <br />  <br />  <br />  <br />
          <br />  <br />  <br />  <br />  <br />  <br />  <br />  <br />




          <div style={{ width: "700px", paddingLeft: "50px" }}>
            <div class="input-group mb-3" style={{ width: "300px", float: "left" }}>
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">from</label>
              </div>
              <select onChange={(e) => { from = e.target.value; console.log(from) }} className="custom-select" id="inputGroupSelect01">
                <option selected>Choose Station</option>
                {stationsData.map((station) => (
                  <option value={(station.station)}  >{station.station}</option>

                ))}
              </select>

              {console.log(from + "after")}
            </div>

                  <br></br><br></br><br></br>
            <div class="input-group mb-3" style={{width:"300px"}}>
              
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">to</label>
              </div>
              <select onChange={(e) => { to = e.target.value; console.log(to) }} class="custom-select" id="inputGroupSelect01">
                <option selected>Choose Station</option>
                {stationsData.map((station) => (
                  <option value={(station.station)}>{station.station}</option>

                ))}

              </select>

            </div>
            {/* {console.log(to+"after")} */}
          </div>
        </div>

        <div style={{ float: "right", height: "500px", width: "900px", margin: "50px", padindLeft: "100px" }} className="col-8">

          <MainMap viewport={viewport} width="50%" setViewport={setViewport} />
        </div>
      </div>

    </>
  );
}