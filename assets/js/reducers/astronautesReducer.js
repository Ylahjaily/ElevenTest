import {FETCH_ASTRONAUTES} from "../actions/astronautesActions";

export default function astronautes(state= [], action= {}){
    if(action.type === 'FETCH_ASTRONAUTES')
    {
        return action.astronautes
    }
    return state;
}
