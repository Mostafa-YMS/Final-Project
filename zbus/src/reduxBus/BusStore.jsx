import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'


//constant
const watchBus = "watchBus"


//action creator
export const useWatchBusPos = () => {
    return async (post, dispatch, getState) => {
        try {
            const res = await fetch("http://127.0.0.1:8000/mapapi/get/");
            const data = await res.json();
            getState({
                type: watchBus,
                payload: data,
            })
        } catch(err) {
            console.log(err);
        }
        
    }
}

//reducer
const watchBusReducer = (state = [], action) => {
    switch(action.type) {
        case watchBus:
            return action.payload;
        default:
            return state;
    }
}

//store
export const store = createStore(watchBusReducer, applyMiddleware(thunk));