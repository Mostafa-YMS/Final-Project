import { useState, useEffect } from "react";
import { MainMap } from "../components";
import { useLines, useStops } from '../hooks/linesStations.jsx';

export const LinesStops = ()=> {
  
    
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
    latitude: 30.0778,
    longitude: 31.2852,
    zoom: 1
  })

  return (
     

    <>
                  {linesData.map((line)=> (
          <div style={{float:"left" , paddingTop:"30px" , paddingLeft:"20px"}} >
           <span className="dropdown" style={{padding:"10px" , margin:"10px" }} >
            <span  id={line.id}  key={line.id}>
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-expanded="false">  
                 {line.line}</button> 
                <div className="dropdown-menu" style={{padding:"10px" , margin:"10px" , paddingLeft:"20px" }}>

                    { stationsData.filter((station)=>
                      station.line === line.id ).map( (station)=>(
                      <button className="dropdown-item" key={station.id} onClick={()=>{
                         setViewport({latitude: station.st_latitude, longitude: station.st_longitude, zoom:12} )
                         }} >
                        {station.station}</button>
                  ))}
                </div> 
         
                
          
             </span>
         </span> 
         </div>    
      
       ))}   
 
        <div style={{ float : "right" , height:"500px" , width:"900px" , margin:"50px" ,padindLeft:"100px"}}>
            
        <MainMap viewport={viewport}  setViewport={setViewport}/>
        </div> 
 

      </>
);
}