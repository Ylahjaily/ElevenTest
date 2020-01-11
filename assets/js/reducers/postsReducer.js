import {SET_POSTS} from "../actions/postsActions";

export default function posts(state= [], action= {}){
    switch(action.type){
        case 'SET_POSTS':
            return action.posts
        default: return state;
    }
}