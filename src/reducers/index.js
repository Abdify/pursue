import { combineReducers } from "redux";
import user from './auth';
import chapters from './chapters';
import courses from './courses';

export default combineReducers({
    user,
    courses,
    chapters,
})