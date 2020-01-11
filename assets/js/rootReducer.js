import {combineReducers} from "redux";
import users from "./reducers/usersReducer"
import posts from "./reducers/postsReducer";

export default combineReducers({
    users,
    posts
})