import * as api from "../api";
import { CREATE, FETCH_ALL } from "../constants/actionTypes";

// Actions
export const getCourses = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCourse();
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const createCourse = (course) => async (dispatch) => {
    try {
        const { data } = await api.createCourse(course);
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};

