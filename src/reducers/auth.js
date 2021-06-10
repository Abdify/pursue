import { AUTH, LOGOUT } from '../constants/actionTypes';


export default (state = { authData: null }, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem("profile", JSON.stringify({...action?.data}));
            return { ...state, authData: action?.data};
        case LOGOUT:
            console.log("LOGOUT")
            localStorage.setItem("profile", "");
            return {...state, authData: null};
        default:
            return state;
    }
}