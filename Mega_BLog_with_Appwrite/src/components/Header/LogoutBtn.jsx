import React from "react";
import { useDispatch } from "react-redux";
import AuthService from "../../appwrite/conf";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        AuthService.logout().then(() => {
            dispatch(logout());
        });
    };

    return (
        <button className="inline-block px-4 py-2 duration-200 hover:bg-blue rounded-full">
            Logout
        </button>
    );
}

export default LogoutBtn;
