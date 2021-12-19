import { useState, useEffect } from 'react';
import { useGetStations } from '../hooks/useGetStations';


export const TestLinesStops = ()=> {
    const [stations, setStations] = useState([]);
    const getPosts = useGetStations();
  
    useEffect(() => {
      getPosts().then(setStations);
    }, []);

    return <h1>{stations}</h1>
}