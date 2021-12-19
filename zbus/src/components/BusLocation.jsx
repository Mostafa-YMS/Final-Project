import { useState, useEffect } from 'react';
import { useGetDriver } from '../hooks/getDriver';


export const BusLocation = ()=> {
    const [location, setLocation] = useState([]);
    const getPosts = useGetDriver();
  
    useEffect(() => {
      getPosts().then(setLocation);
    }, []);
    console.log(location)
    console.log(location.longitude)
    return <h1>aaaaa</h1>
}