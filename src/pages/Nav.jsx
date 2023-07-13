import React from "react";
import { Link } from "react-router-dom";
import './Nav.css'

export default function Nav(){
    return(
        <nav>
            <div className="vanlife--logo">
                <Link  to="/">#VANLIFE</Link>
            </div>
            
            <Link className="page--navigate" to="/about">About</Link>
            <Link className="page--navigate" to="/vans">Vans</Link>
        </nav>
    )
}