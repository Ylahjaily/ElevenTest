import {combineReducers} from "redux";
import astronautes from "./astronautesReducer";
import astronaute from "./astronauteReducer";

export default combineReducers({
    astronautes,
    astronaute,
})