import React from "react";
import { Link, Outlet } from "react-router-dom";
import './HostLayout.css'

export default function HostLayout(){
    return(
        <div className="hostlayout--container">
            <nav>
                <Link className="hostlayout--navigation" to="/host">Dashboard</Link>
                <Link className="hostlayout--navigation" to="/host/income">Income</Link>
                <Link className="hostlayout--navigation" to="/host/reviews">Reviews</Link>
            </nav>
            <Outlet />
        </div>
    )
}