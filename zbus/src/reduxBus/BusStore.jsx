import { createStore, applyMiddleware } from "redux";
import { makePortReducer } from "./reducers";
import thunk from 'redux-thunk'

// import { createStore, applyMiddleware, combineReducers } from "redux";
// import { getBusReducer, watchBusReducer } from "./reducers";

//     const rootReducer = combineReducers({
//         watchBus: watchBusReducer,
//         getBus: getBusReducer,
//     })


// //store
// export const store = createStore(rootReducer, applyMiddleware(thunk));


//store
export const store = createStore(makePortReducer, applyMiddleware(thunk));