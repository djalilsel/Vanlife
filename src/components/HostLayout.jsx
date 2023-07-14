import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import './HostLayout.css'

export default function HostLayout(){
    const activeLink ={
        textDecoration: "underline",
        fontSize: "1.12rem"
    }
    return(
        <div className="hostlayout--container">
            <nav>
                <NavLink
                className="hostlayout--navigation"
                end
                style={({isActive}) => isActive ? activeLink : null}
                to="/host">
                    Dashboard
                </NavLink>

                <NavLink 
                className="hostlayout--navigation"
                style={({isActive}) => isActive ? activeLink : null}
                to="/host/income">Income
                </NavLink>

                <NavLink 
                className="hostlayout--navigation"
                style={({isActive}) => isActive ? activeLink : null}
                to="/host/vans">Vans
                </NavLink>

                <NavLink 
                className="hostlayout--navigation"
                style={({isActive}) => isActive ? activeLink : null}
                to="/host/reviews">Reviews
                </NavLink>
            </nav>
            <Outlet />
        </div>
    )
}