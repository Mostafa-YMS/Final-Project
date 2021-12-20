import { useState, useEffect } from "react";
import { MainMap } from "../components";
import { useLines, useStops } from '../hooks/linesStations.jsx';
import { FlyToInterpolator } from 'deck.gl';


 export const Lines_Stations = () => {

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
    zoom: 1 ,
  })
    
    let x = ""
    let y = ""

    const [from , setfrom] = useState ("")
    const [to, setto] = useState ("")
    
    const show = ()=>{
     
           { linesData.map((line)=> {
           

           stationsData.filter((station)=>
                      station.line === line.id ).forEach( (station)=>{
                           if(station.station==from ){
                            x=line.line }

                           if(station.station==to ){
                            y=line.line }
                      
                          })
                        })} 
                        
                if (x == y ) {
              { document.getElementById("line").innerHTML="take line :" + x }
              
                   }

                  else{
                               { document.getElementById("line").innerHTML="There is no direct line "}
                  } 
                 if (from=="" || to== "" ){
                      { document.getElementById("line").innerHTML=""}
                 }

                  }


  return (

    <>

  <div style={{ float: "right", height: "500px", width: "900px", margin: "50px", padindLeft: "100px"  }} >

          <MainMap viewport={viewport} width="50%" setViewport={setViewport} />
       
  </div>
     

  
                   {linesData.map((line)=> (
          <div style={{float:"left" , paddingTop:"30px" , paddingLeft:"37px"}} >
           <span className="dropdown" style={{padding:"10px" , margin:"10px" }} >
            <span  id={line.id}  key={line.id}>
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-expanded="false">
           

                 {line.line}</button> 
                <div className="dropdown-menu" style={{padding:"10px" , margin:"10px" , paddingLeft:"20px" }}>

                    { stationsData.filter((station)=>
                      station.line === line.id ).map( (station)=>(
                      <button className="dropdown-item" key={station.id} 
                       onClick={() => {
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

       <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>
       <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>
    

       

 <div style={{width : "700px" , paddingLeft:"50px"}}> 
   <div class="input-group mb-3" style={{width : "250px" , float:"left"}}>
       <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect01">from</label>
       </div>
       <select onChange={(e)=>{setfrom(e.target.value) }} class="custom-select" id="inputGroupSelect01">
          <option selected>Choose Station</option>
              { stationsData.map( (station)=>(
         <option value={(station.station)}  >{station.station}</option>

           ))}
       </select>
   </div> 

                       

  <div class="input-group mb-3" style={{width : "250px" , float:"right"}}>
  <div class="input-group-prepend">
    <label class="input-group-text" for="inputGroupSelect01">to</label>
  </div>
  <select onChange={(e)=>{setto(e.target.value)}}class="custom-select" id="inputGroupSelect01">
    <option selected>Choose Station</option>
     { stationsData.map( (station)=>(
      <option value={(station.station)}>{station.station}</option>   
       
    ))}
    
  </select>
  </div>
  <button onClick={show} className="btn btn-primary"> showLine </button>
   <br/>  <br/> <br/> <br/> <br/> <br/>
    <h3 id="line"> </h3>
  </div>


 
     

      </>
);
}
