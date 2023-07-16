import React, { useState, useEffect} from "react";
import { Outlet } from "react-router";
import { useParams, Link, NavLink } from "react-router-dom";
import ListedVanDetails from "../pages/Host/ListedVanDetails";
import { useLoaderData } from "react-router";
import { getHostVans } from "../../api";
import './ListedVanDetailsLayout.css'

export function loader({ params }){
    return getHostVans(params.id)
}

export default function ListedVanDetailsLayout(){

    const data = useLoaderData()
    
    const activeLink ={
        textDecoration: "underline",
        fontSize: "1.12rem"
    }

    return(
        <div>
            <Link className="backtolistedvans" to='../vans' >
                <span style={{paddingLeft: "10px", fontSize: "1rem"}}>&larr;</span> <span className="backtolistedvans--text">Back to all vans</span>
            </Link>
            <div className="ListedVanDetailsLayout--container">
                <div>
                    <ListedVanDetails
                        type={data[0].type}
                        id={data[0].id}
                        name={data[0].name}
                        imageUrl={data[0].imageUrl}
                        price={data[0].price}
                    />
                </div>
                <nav>
                    <NavLink
                    className="hostvandetails--navigation"
                    end
                    style={({isActive}) => isActive ? activeLink : null}
                    to=".">
                        Details
                    </NavLink>
                    <NavLink
                    className="hostvandetails--navigation"
                    style={({isActive}) => isActive ? activeLink : null}
                    to="pricing">
                        Pricing
                    </NavLink>
                    <NavLink
                    className="hostvandetails--navigation"
                    style={({isActive}) => isActive ? activeLink : null}
                    to="photos">
                        Photos
                    </NavLink>
                </nav>
                <Outlet context={data}/>
            </div>
        </div>
    )
}