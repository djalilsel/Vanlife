import React, { Suspense, useEffect, useState } from "react";
import { Link, useLocation, useLoaderData, Await, defer } from "react-router-dom";
import { getVan } from "../../api";

import './VanDetails.css'

export async function loader({ params }){
    return defer( { details: getVan(params.id) } )
}

export default function VanDetails(){
    
    let color
    let location = "?" + useLocation().state.search
    
     
    const promiseData = useLoaderData()

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

    function loadData(data){

        if( data.type === "simple" ){
            color = "#E17654"
        }  else if( data.type === "rugged" ){
            color = "#115E59"
        } else if( data.type === "luxury" ){
            color = "#161616"
        }

        return(
            <div>
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


    return(
            <div className="vandetails--container">
                <Link className="backtovans" to={'..' + location} relative="path" >
                    &larr; <span style={{textDecoration: "underline"}}>Back to { useLocation().state.search.includes("type=") === true? `${backtofilter()}` : "all"} vans</span>
                </Link>
                <Suspense fallback={<h2>Loading Details...</h2>}>
                    <Await resolve={promiseData.details}>
                        {loadData}
                    </Await>
                </Suspense>
            </div>
        )
}