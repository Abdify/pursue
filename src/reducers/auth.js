import { AUTH, LOGOUT } from '../constants/actionTypes';


export default (user = { authData: null }, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem("profile", JSON.stringify({...action?.data}));
            return { ...user, authData: action?.data};
        case LOGOUT:
            console.log("LOGOUT")
            localStorage.setItem("profile", "");
            return {...user, authData: null};
        default:
            return user;
    }
}