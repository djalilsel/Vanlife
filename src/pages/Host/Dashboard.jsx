import React from "react";
import { Outlet } from "react-router";
import './Dashboard.css'

export default function Dashboard(){
    return(
        <h1>
            Dashboard
            <Outlet />
        </h1>
    )
}