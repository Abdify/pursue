import * as api from "../api";
import { CREATE_COURSE, FETCH_COURSES } from "../constants/actionTypes";

// Actions
export const getCourses = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCourse();
        dispatch({ type: FETCH_COURSES, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const createCourse = (course) => async (dispatch) => {
    try {
        const { data } = await api.createCourse(course);
        dispatch({ type: CREATE_COURSE, payload: data });
        return data;
    } catch (error) {
        console.log(error);
    }
};
