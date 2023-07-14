import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

export default function Header(){
    return(
        <header>
            <div className="vanlife--logo">
                <Link  to="/">#VANLIFE</Link>
            </div>
            
            <nav className="page--navigate--container">
                
                <Link className="page--navigate" to="/host">Host</Link>
                <Link className="page--navigate" to="/about">About</Link>
                <Link className="page--navigate" to="/vans">Vans</Link>
            </nav>
        </header>
    )
}