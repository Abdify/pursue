import { combineReducers } from "redux";
import user from './auth';
import posts from './posts';

export default combineReducers({
    posts,
    user,
})