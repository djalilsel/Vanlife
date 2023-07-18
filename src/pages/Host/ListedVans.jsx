import React, { useEffect, useState } from "react";
import ListedVan from "../components/ListedVan";
import { useLoaderData } from "react-router";
import { getHostVans } from "../../../api";

import './ListedVans'

export async function loader({ params }){
        console.log("You got the host vans data")
        return getHostVans(params.id)
}

export default function ListedVans(){

    const data = useLoaderData()

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
        
        <div className="listedvans--container">
            {LISTEDVANS}
        </div>  

        
    )
}