import React, { useEffect, useState } from "react"
import { Navigate, useParams } from "react-router-dom"
import { Outlet } from "react-router-dom"


export default function RequireAuth(){
    
    const isLoggedIn = localStorage.getItem("loggedin") === "true" ? true : false

    
    if(!isLoggedIn){
        return <Navigate to="/login" state={{message: "You must Login first!"}}/>
    } else if(isLoggedIn){
        return <Outlet />
    }




}

