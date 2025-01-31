import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { AuthService } from "./appwrite/auth";
import {login,logout } from './store/authSlice'

function App() {
    const [loading, setloading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        AuthService.getCurrentUser()
        .then((userData)=>{
            if (userData) {
                dispatch(login({userData}))
            }
            else{
                dispatch(logout())
            }
        })
        .finally(()=> setloading(false));
    }, []);



    return 
}

export default App;
