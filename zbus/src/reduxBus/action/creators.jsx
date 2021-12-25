// import { Get_Bus, Watch_Bus } from './constants';


// //action creator
// export function watchBus() {
//     return async (dispatch, getState) => {
//         try {
//             // console.log(dispatch, getState);
//             const res = await fetch("http://127.0.0.1:8000/mapapi/get/");
//             const data = await res.json();
//             getState({
//                 type: Watch_Bus,
//                 payload: data
//             })
//         } catch(err) {
//             console.log(err);
//         }
        
//     }
// }

// export function getBus() {
//     return async (dispatch, getState) => {
//         try {
//             const res = await fetch("http://127.0.0.1:8000/mapapi/get/");
//             const data = await res.json();
//             dispatch({
//                 type: Get_Bus,
//                 payload: data
//             })
//         } catch(err) {
//             console.log(err);
//         }
        
//     }
// }