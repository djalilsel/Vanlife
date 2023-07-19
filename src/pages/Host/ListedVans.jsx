import React, { Suspense, useEffect, useState } from "react";
import ListedVan from "../components/ListedVan";
import { Await, defer, useLoaderData } from "react-router";
import { getHostVans } from "../../../api";

import './ListedVans'

export async function loader({ params }){

    return defer({ vans: getHostVans(params.id) })

}

export default function ListedVans(){

    const data = useLoaderData()

    function loadData(data){
    const LISTEDVANS = data.map((van => {
            return(
                <ListedVan
                key={van.id}
                id={van.id}
                img={van.imageUrl}
                name={van.name}
                price={van.price}
            />
            )
        }))
        return(
            <div>
                {LISTEDVANS}
            </div>
        )
    }
    
    
    return(
        <div className="listedvans--container">
            <h1 style={{margin: "10px"}}>Your listed vans</h1>
            <Suspense fallback={<h2>Loading Vans...</h2>}>
                <Await resolve={data.vans}>
                        {loadData}
                </Await> 
            </Suspense>
        </div> 

        
    )
}