import React, { useState, useCallback, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import {Marker} from 'react-map-gl';
import img from "../img/locationx.svg";

export const BusSocket = () => {
    //Public API that will echo messages sent to it back to the client
    const socketUrl= 'ws://localhost:8000/ws/test/';
    const [messageHistory, setMessageHistory] = useState([]);
    let buses = []
    
  
    const {
      sendMessage,
      lastMessage,
      lastJsonMessage,
      readyState,
    } = useWebSocket(socketUrl, {onOpen: () => console.log('opened'),shouldReconnect: (closeEvent) => true,});
  
    useEffect(() => {
      if (lastMessage !== null) {
        setMessageHistory(prev => prev.concat(lastMessage));
      }
    }, [lastMessage, setMessageHistory]);
  
  
  
    const connectionStatus = {
      [ReadyState.CONNECTING]: 'Connecting',
      [ReadyState.OPEN]: 'Open',
      [ReadyState.CLOSING]: 'Closing',
      [ReadyState.CLOSED]: 'Closed',
      [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
    }[readyState];
    try{
      let payload = lastJsonMessage
      // buses = payload
      console.log(payload);
    } catch{
        console.log("no payload");
    }
    
  
    return (<>
        {buses ? buses.map((bus)=>(
            <Marker latitude={bus.fields.latitude} longitude={bus.fields.longitude} key={bus.pk} >
                <img src={img}/>
                <p style={{color: "white"}}>{bus.fields.name}</p>
            </Marker>
        )) : null}
    </>);
    };