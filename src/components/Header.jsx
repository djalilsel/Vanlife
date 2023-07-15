import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Header.css'

export default function Header(){
    return(
        <header>
            <div className="vanlife--logo">
                <Link  to="/">#VANLIFE</Link>
            </div>
            
            <nav className="page--navigate--container">
                
                <NavLink className={({isActive}) => isActive ? "page--navigate active--page--navigate" : "page--navigate"} to="host">Host</NavLink>
                <NavLink className={({isActive}) => isActive ? "page--navigate active--page--navigate" : "page--navigate"} to="about">About</NavLink>
                <NavLink className={({isActive}) => isActive ? "page--navigate active--page--navigate" : "page--navigate"} to="vans">Vans</NavLink>
            </nav>
        </header>
    )
}