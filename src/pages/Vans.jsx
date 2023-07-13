import React, { useEffect, useState } from  "react";
import Vancard from "./components/Vancard";
import './Vans.css'

export default function Vans(){
    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
    }, [])
    
    
    const VANCARDS = vans.map((van) => {
        return(
            <Vancard 
                key={van.id}
                img={van.imageUrl}
                name={van.name}
                type={van.type}
                price={van.price}
                description={van.discription}
            />
        )
    })


    return(
        <div className="vanspage--container">
            <div>
                <h1 className="vans--title">
                    Explore our van options
                </h1>
                <div className="filters--container">
                    <div id="Simple" className="filters">Simple</div>
                    <div id="Luxury" className="filters">Luxury</div>
                    <div id="Rugged" className="filters">Rugged</div>
                    <button className="clear--filters">Clear filters</button>
                </div>
            </div>
            <div className="vancards--container">
                {VANCARDS}
            </div>
        </div>
    )
}