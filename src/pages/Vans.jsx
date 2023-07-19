import React, { Suspense, useEffect, useState } from  "react";
import Vancard from "./components/Vancard";
import { Await, Link, defer, useLoaderData, useSearchParams } from "react-router-dom";
import { getVans } from "../../api";
import './Vans.css'

export function loader(){
    return defer({ vans: getVans() })
}

export default function Vans(){

    
    let style1
    let style2
    let style3
    
    const [typeFilter, setTypeFilter] = useSearchParams()
    const filter = typeFilter.get("type")
    const preloadedVans = useLoaderData()
    
    
    

    if(filter === "simple"){
        style1 = "selected1"
    }
    if(filter === "rugged"){
        style2 = "selected2"
    }
    if(filter === "luxury"){
        style3 = "selected3"
    }
    
    function handleFilterChange(key, value){
        setTypeFilter(prevTypeFilter => {
            if(value === null){
                prevTypeFilter.delete(key)
            } else {
                prevTypeFilter.set(key, value)
            }
            return prevTypeFilter
        })
    }

    function waitForLoad(vans) {
        const VANCARDS = vans.map((van) => {
            if(filter){
                if(filter === van.type){
                    return(
                        <Vancard 
                        key={van.id}
                        id={van.id}
                        img={van.imageUrl}
                        name={van.name}
                        type={van.type}
                        price={van.price}
                        description={van.discription}
                        />
                    )
                }
            } else {
                return(
                    <Vancard 
                        key={van.id}
                        id={van.id}
                        img={van.imageUrl}
                        name={van.name}
                        type={van.type}
                        price={van.price}
                        description={van.discription}
                    />
                )
            }
        })
        return(
            <div className="vancards--container">
                {VANCARDS}
            </div>
        )
            
    }


    return(
        <div className="vanspage--container">
            <div>
                <h1 className="vans--title">
                    Explore our van options
                </h1>
                <div className="filters--container">
                    <div id="Simple" className={`filters ${style1}`} onClick={() => handleFilterChange("type", "simple")} >Simple</div>
                    <div id="Rugged" className={`filters ${style2}`} onClick={() => handleFilterChange("type", "rugged")} >Rugged</div>
                    <div id="Luxury" className={`filters ${style3}`} onClick={() => handleFilterChange("type", "luxury")} >Luxury</div>
                    { filter && <button className="clear--filters" onClick={() => handleFilterChange("type", null)} >Clear filters</button>}
                </div>
            </div> 
            <Suspense fallback={<h2>Loading Vans...</h2>}>
                <Await resolve={preloadedVans.vans}>
                    {waitForLoad}
                </Await>
            </Suspense>
            
        </div>
    )
}