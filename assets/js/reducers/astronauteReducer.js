import {FETCH_ASTRONAUTE} from "../actions/astronautesActions";

export default function astronaute(state= [], action= {}){
    switch(action.type){
        case 'FETCH_ASTRONAUTE':
            return action.astronaute
        default: return state;
    }
}
