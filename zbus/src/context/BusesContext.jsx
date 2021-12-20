
import { createContext, useState } from 'react'

const BusesContext = createContext()

export default BusesContext;


export const LocationGet = ({children}) => {
    let [isready, setready] = useState(false)
    let [buses, setbus] = useState()
        let getlocations = async (e )=> {
           
                let response = await fetch('http://127.0.0.1:8000/mapapi/get/')
                .then(isready=true);

                const data = await response.json();
                
                if(response.status === 200){
            
                        console.log("data",data);
                        setbus(data)
                        setready(true)
                        console.log("buses",buses);
                }else{
                                alert('Something went wrong!')
                            }       
                        
        }
        console.log("buses11",buses);
        let contextData = {
            isready:isready,
            buses:buses,
        getlocations:getlocations,

    }
    return(
                <BusesContext.Provider value={contextData}>
                    {children}
                </BusesContext.Provider>
            )
        } 