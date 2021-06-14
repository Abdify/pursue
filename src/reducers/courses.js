import { CREATE, DELETE, FETCH_ALL, LIKE, UPDATE } from "../constants/actionTypes";

const courseReducers = (courses = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...courses, action.payload];
        case UPDATE:
        case LIKE:
            return courses.map((course) => (course._id === action.payload._id ? action.payload : course));
        case DELETE:
            return courses.filter((course) => course._id !== action.payload);
        default:
            return courses;
    }
};
export default courseReducers;