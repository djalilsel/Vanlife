import React from "react"
import { Navigate } from "react-router-dom"
import { Outlet } from "react-router-dom"

export default function RequireAuth(){
    
    const isLoggedIn = false

    if(!isLoggedIn){
        return <Navigate to="/login" />
    } else if(isLoggedIn){
        console.log("hey")
        return <Outlet />
    }

}

