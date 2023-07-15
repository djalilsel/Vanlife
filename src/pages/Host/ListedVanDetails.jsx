import React, { useEffect, useState } from "react";
import './ListedVanDetails.css'

export default function ListedVanDetails(props){

    

    let color
    if( props.type === "simple" ){
        color = "#E17654"
    }  else if( props.type === "rugged" ){
        color = "#115E59"
    } else if( props.type === "luxury" ){
        color = "#161616"
    }

    return(
        <div className="hostlistedvan--topcontainer">
            <img src={props.imageUrl} alt="van image" />
            <div>
                <div className="hostlistedvan--topcontainer--type" style={{backgroundColor: color}}>
                    {props.type}
                </div>
                <p className="hostlistedvan--topcontainer--text">
                    <span style={{fontSize: "1.2rem"}}>{props.name}</span> <br></br>
                    ${props.price}<span style={{fontSize: "0.77rem"}}>/day</span>
                </p>
            </div>
        </div>
        
    )
}