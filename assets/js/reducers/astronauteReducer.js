import {FETCH_ASTRONAUTE} from "../actions/astronautesActions";

export default function astronaute(state= [], action= {}){
    if(action.type === 'FETCH_ASTRONAUTE')
    {
        return action.astronaute
    }
        return state;
}

