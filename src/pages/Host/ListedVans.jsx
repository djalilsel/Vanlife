import React, { useEffect, useState } from "react";
import ListedVan from "../components/ListedVan";
import './ListedVans'

export default function ListedVans(){

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("/api/host/vans")
        .then(res => res.json())
        .then(datas => setData(datas.vans))
    }, [])


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