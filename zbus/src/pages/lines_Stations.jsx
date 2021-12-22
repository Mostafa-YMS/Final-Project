import { useState, useEffect } from "react";
import { MainMap } from "../components";
import { useLines, useStops } from '../hooks/linesStations.jsx';
import { FlyToInterpolator } from 'deck.gl';
import { Marker } from "react-map-gl";
import { Lines } from './../components/Lines';
import { Stations } from './../components/Stations';
import img from "../img/map.png";


 export const Lines_Stations = (props) => {
  {document.body.style.backgroundImage = `url(${img})`
  document.body.style.backgroundRepeat = `no-repeat`
  document.body.style.backgroundSize = `cover`
}

  const [stationsData, setStationsData] = useState([]);
  const getstations = useStops();

  useEffect(() => {
    getstations().then(setStationsData);
  }, []);
  {props.setactive("lines")}

  const [linesData, setlinesData] = useState([]);
  const getlines = useLines();

  useEffect(() => {
    getlines().then(setlinesData);
  }, []);



  const [viewport, setViewport] = useState({
    width: 900,
    height: 750,
    latitude: 30.0778,
    longitude: 31.2852,
    zoom: 1 ,
  })
   
    let x = ""
    let y = ""

    const [from , setfrom] = useState ("")
    const [to, setto] = useState ("")

    //  search function
    //  search function

    
    const show = ()=>{
     
           { linesData.map((line)=> {
           

           stationsData.filter((station)=>
                      station.line === line.id ).forEach( (station)=>{
                           if(station.station===from ){
                            x=line.line }

                           if(station.station===to ){
                            y=line.line }
                      
                          })
                        })} 
                        
                if (x === y ) {
              { document.getElementById("line").innerHTML="take line :" + x }
              
                   }

                  else{
                               { document.getElementById("line").innerHTML="There is no direct line "}
                  } 
                 if (from==="" || to=== "" ){
                      { document.getElementById("line").innerHTML=""}
                 }

                  if (from === to ){
                      { document.getElementById("line").innerHTML="please choose different Stations"}
                 }

                  }
  
         
                
  
       // stations function
       // stations function



     const[stationss , setstationss]=useState([{station:"please choose line "}])  
      const xy = (e)=>{

      const choose = linesData.filter((line) =>( 

       line.line==e.target.value
        
      ))[0]

         {
           
     setstationss( stationsData.filter((station)=>
            station.line == choose.id )
               
         )}} 

  return (

    <>
        <div style={{ float: "right", height: "500px", width: "900px", margin: "50px", padindLeft: "100px"  }} >

          <MainMap viewport={viewport} setViewport={setViewport} />
       
      </div>


 
         {/* Lines */}
         {/* Lines  */}
  <div className=" row " style={{marginTop:"50px"}} >
  <div class="dropdown" style={{   marginLeft:"100px" }}>
  <button className=" dropdown-toggle   " className="btn btn-primary" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-expanded="false" 
  style={{width:"150px" , height:"50px"}}>
    Lines
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenu2" >
       {linesData.map((line)=> (

           <button class="dropdown-item" type="button" id={line.id}  value={(line.line)} onClick={xy} > {line.line} </button>
       ))}

  </div>
</div>

       {/* stations */}
       {/* stations */}


       < div className="dropdown " style={{   marginLeft:"285px" }} >
  <button className=" dropdown-toggle " className="btn btn-primary" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-expanded="false"
   style={{width:"150px", height:"50px"}} >
    stations
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenu2" > 
       {stationss.map((station)=> (

           <button class="dropdown-item" type="button" 
                     onClick={() => {
                          {if (station.station !="please choose line "){

                            setViewport({
                            latitude: station.st_latitude, longitude: station.st_longitude, zoom: 17, pitch: 0,
                            bearing: 0,
                            transitionDuration: 1000,
                            transitionInterpolator: new FlyToInterpolator()
                          })

                          }}
                         
                        }} 
           
           > {station.station} </button>
       ))}

  </div>
</div>

</div>
 
                      
       <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>
       <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>
    
       {/* searching */}
       {/* searching */}
       

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
    <div  style={{backgroundColor:"grey" ,color:"blue" ,width:"450px" , height:"120px"}}> <h3  style={{marginTop:"40px" , position:"absolute"}} id="line"></h3> </div>
  </div>
              


 
     

      </>
);
}


   
   

// lines&stations old design
// lines&stations old design



//  {linesData.map((line)=> (
//           <div style={{float:"left" , paddingTop:"30px" , paddingLeft:"37px"}} >
//            <span className="dropdown" style={{padding:"10px" , margin:"10px" }} >
//             <span  id={line.id}  key={line.id}>
//             <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-expanded="false">
           

//                  {line.line}</button> 
//                 <div className="dropdown-menu" style={{padding:"10px" , margin:"10px" , paddingLeft:"20px" }}>

//                     { stationsData.filter((station)=>
//                       station.line === line.id ).map( (station)=>(
//                       <button className="dropdown-item" key={station.id} 
//                        onClick={() => {
//                           console.log(station);
//                           setViewport({
//                             latitude: station.st_latitude, longitude: station.st_longitude, zoom: 17, pitch: 0,
//                             bearing: 0,
//                             transitionDuration: 1000,
//                             transitionInterpolator: new FlyToInterpolator()
//                           })
//                         }} >
                      
//                         {station.station}</button>
//                   ))}
//                 </div> 
//              </span>
//          </span> 
//          </div>    
      
//        ))}       
