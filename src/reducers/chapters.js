import { CREATE_CHAPTER, DELETE, FETCH_CHAPTERS, LIKE, UPDATE } from "../constants/actionTypes";

const chapterReducers = (chapters = [], action) => {
    switch (action.type) {
        case CREATE_CHAPTER:
            return action.payload;
        case FETCH_CHAPTERS:
            return [...chapters, action.payload];
        case UPDATE:
        case LIKE:
            return chapters.map((chapter) =>
                chapter._id === action.payload._id ? action.payload : chapter
            );
        case DELETE:
            return chapters.filter((chapter) => chapter._id !== action.payload);
        default:
            return chapters;
    }
};
export default chapterReducers;
