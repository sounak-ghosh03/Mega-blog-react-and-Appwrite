import React from "react";
import { useDispatch } from "react-redux";
import AuthService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        AuthService.logout().then(() => {
            dispatch(logout());
        });
    };
    return (
        <button
            className="inline-block px-6 py-2 font-semibold text-white bg-red-700 duration-200 hover:bg-red-600 rounded-full shadow-lg"
            onClick={logoutHandler}
        >
            Logout
        </button>
    );
}

export default LogoutBtn;
