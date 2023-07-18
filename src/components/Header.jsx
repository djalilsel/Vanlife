import React, { useEffect, useState } from "react";
import { Link, NavLink, Navigate } from "react-router-dom";
import loginImg from '../assets/images/avatar-icon.png'
import './Header.css'

export default function Header(){

    const [loggedIn, setLoggedIn] = useState(localStorage.getItem("loggedin"))

    useEffect(() => {
        setLoggedIn(localStorage.getItem("loggedin"))
    }, [localStorage.getItem("loggedin")])


    function logout(){
        localStorage.removeItem("loggedin")
        setLoggedIn(false)
    }

    return(
        <header>
            <div className="vanlife--logo">
                <Link  to="/">#VANLIFE</Link>
            </div>
            
            <nav className="page--navigate--container">
                
                <NavLink className={({isActive}) => isActive ? "page--navigate active--page--navigate" : "page--navigate"} to="host">Host</NavLink>
                <NavLink className={({isActive}) => isActive ? "page--navigate active--page--navigate" : "page--navigate"} to="about">About</NavLink>
                <NavLink className={({isActive}) => isActive ? "page--navigate active--page--navigate" : "page--navigate"} to="vans">Vans</NavLink>
                {!loggedIn && <NavLink className="page--navigate" to="login"><img src={loginImg} alt="login logo" /></NavLink>}
            </nav>
            {!loggedIn && <Navigate to="/login" />}
            {loggedIn && <button onClick={logout}>Logout</button>}
        </header>
    )
}