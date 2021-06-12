import { useDispatch } from "react-redux";

const CheckUser = () => {
    const dispatch = useDispatch();

    const user = localStorage.getItem("profile")
        ? JSON.parse(localStorage.getItem("profile"))
        : null;

    if (user?.token) {
        dispatch({ type: "AUTH", data: user });
    } else {
        dispatch({ type: "LOGOUT" });
    }
};

export default CheckUser;
