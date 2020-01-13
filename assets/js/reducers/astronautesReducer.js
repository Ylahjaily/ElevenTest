import {FETCH_ASTRONAUTES} from "../actions/astronautesActions";

export default function astronautes(state= [], action= {}){
    switch(action.type){
        case 'FETCH_ASTRONAUTES':
            return action.astronautes
        default: return state;
    }
}
