import React, { useState, useEffect, Suspense } from "react";
import { Outlet, defer, Await } from "react-router";
import { useParams, Link, NavLink } from "react-router-dom";
import ListedVanDetails from "../pages/Host/ListedVanDetails";
import { useLoaderData } from "react-router";
import { getHostVans } from "../../api";
import './ListedVanDetailsLayout.css'


export async function loader({ params }){

    return defer({ details: getHostVans(params.id) })
    
}

export default function ListedVanDetailsLayout(){

    const promiseData = useLoaderData()
    
    const activeLink ={
        textDecoration: "underline",
        fontSize: "1.12rem"
    }

    function loadData(data){


        return(
            <div className="ListedVanDetailsLayout--container">
                <div>
                    <ListedVanDetails
                        type={data.type}
                        id={data.id}
                        name={data.name}
                        imageUrl={data.imageUrl}
                        price={data.price}
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
                {console.log(data)}
                <Outlet context={data}/>
            </div>
        )
    }

    return(
        <div>
            <Link className="backtolistedvans" to='../vans' >
                <span style={{paddingLeft: "10px", fontSize: "1rem"}}>&larr;</span> <span className="backtolistedvans--text">Back to all vans</span>
            </Link>
            <Suspense fallback={<h2>Loading Details...</h2>}>
                <Await resolve={promiseData.details}>
                    {loadData}
                </Await>
            </Suspense>
        </div>
    )
}