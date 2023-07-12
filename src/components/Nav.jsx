import React from "react";
import { Link } from "react-router-dom";
import './Nav.css'

export default function Nav(){
    return(
        <nav>
            <Link className="vanlife--logo" to="/">#VANLIFE</Link>
            <Link className="page--navigate" to="/about">About</Link>
            <Link className="page--navigate" to="/vans">Vans</Link>
        </nav>
    )
}