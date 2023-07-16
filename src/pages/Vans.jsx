import React, { useEffect, useState } from  "react";
import Vancard from "./components/Vancard";
import './Vans.css'
import { Link, useSearchParams } from "react-router-dom";

export default function Vans(){

    let style1
    let style2
    let style3

    const [vans, setVans] = useState([])
    const [typeFilter, setTypeFilter] = useSearchParams()
    const filter = typeFilter.get("type")
    
    
    useEffect(() => {
        fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
    }, [])

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
            {vans.length > 0 ?

            (<div className="vancards--container">
                {VANCARDS}
            </div>) :
            
            

            (<div style={{fontSize: "2rem"}}>
                ...Loading
            </div>)
        }
        </div>
    )
}