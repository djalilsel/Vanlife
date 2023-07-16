import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation, useLoaderData } from "react-router-dom";
import { getVans } from "../../api";
import './VanDetails.css'

export function loader({ params }){
    return getVans(params.id)
}

export default function VanDetails(){

    let location = "?" + useLocation().state.search
    const data = useLoaderData()

    function backtofilter() {

        function formbacktofilter(){
            filter = filter[1].split("&")
            filter[1] = filter[0]
            if(filter[1].includes("&")){
                formbacktofilter()
            }
        }

        let filter = location?.split("type=")
        if(filter[1]?.includes("&")){
            formbacktofilter()
        }
        return filter[1]
    } 


    let color
    if( data.type === "simple" ){
        color = "#E17654"
    }  else if( data.type === "rugged" ){
        color = "#115E59"
    } else if( data.type === "luxury" ){
        color = "#161616"
    }

    return(
            <div className="vandetails--container">
                <Link className="backtovans" to={'..' + location} relative="path" >
                    &larr; <span style={{textDecoration: "underline"}}>Back to { useLocation().state.search.includes("type=") === true? `${backtofilter()}` : "all"} vans</span>
                </Link>
                <img className="vandetails--image" src={data.imageUrl} alt="van image" />
                <div className="vandetails--type" style={{backgroundColor: color}}>
                    {data.type}
                </div>
                <h2 style={{alignSelf: "flex-start"}}>{data.name}</h2>
                <p style={{alignSelf: "flex-start", margin: "10px 0px"}}>
                    <span style={{fontSize: "1.2rem"}}>${data.price}</span>
                    /day
                </p>
                <p style={{fontSize: "0.8rem"}}>
                    {data.description}
                </p>
                <div className="rentvan--btn">
                    Rent this van
                </div>
            </div>
        )
}