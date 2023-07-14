import React, { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import './VanDetails.css'

export default function VanDetails(){
    const param = useParams()
    const [data, setData] = useState([])


    useEffect(() => {
        fetch(`/api/vans/${param.id}`)
        .then(res => res.json())
        .then(datas => setData(datas.vans))
    }, [param.id])
    console.log(data)

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