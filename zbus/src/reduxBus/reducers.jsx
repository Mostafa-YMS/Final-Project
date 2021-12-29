// import { Get_Bus, Watch_Bus } from './action/constants';
import { Make_Port } from './action/constants';


// //reducer
// export const watchBusReducer = (state = [], action) => {
//     switch(action.type) {
//         case Watch_Bus:
//             return action.payload;
//         default:
//             return state;
//     }
// }

// export const getBusReducer =  (state = [], action) => {
//     switch(action.type) {
//         case Get_Bus:
//             return action.payload;
//         default:
//             return state;
//     }}

export const makePortReducer = (state = {
    latitude: 30.0778,
    longitude: 31.2852,
    zoom: 1,
  }, action) => {
    switch(action.type) {
        case Make_Port:
            return action.payload;
        default:
            return state;
    }
}