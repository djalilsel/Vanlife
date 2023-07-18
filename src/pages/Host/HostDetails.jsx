import React from "react";
import { useOutletContext } from "react-router";
import './HostDetails.css'

export default function HostDetails(){

    const data = useOutletContext()
    console.log(data)

    return(
        <div className="vandetailsinfo--container">
            <p className="title">name: <span className="text">{data.name}</span></p> <br />
            <p className="title">Category: <span className="text">{data.type}</span></p> <br />
            <p className="title">Description: <span className="text">{data.description}</span></p> <br />
            <p className="title">Visibility: <span className="text">Public</span></p>
        </div>
    )
}