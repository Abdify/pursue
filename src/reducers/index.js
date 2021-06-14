import { combineReducers } from "redux";
import user from './auth';
import courses from './courses';

export default combineReducers({
    user,
    courses,
})