import * as api from "../api";
import { CREATE_CHAPTER, FETCH_CHAPTERS } from "../constants/actionTypes";

// Actions
export const getChapters = () => async (dispatch) => {
    try {
        const { data } = await api.fetchChapter();
        dispatch({ type: FETCH_CHAPTERS, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const createChapter = (chapter) => async (dispatch) => {
    try {
        const { data } = await api.createChapter(chapter);
        dispatch({ type: CREATE_CHAPTER, payload: data });
        return data;
    } catch (error) {
        console.log(error);
    }
};
