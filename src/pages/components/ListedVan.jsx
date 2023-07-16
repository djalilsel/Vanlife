import React from "react";
import { Link } from "react-router-dom";
import './ListedVan.css'

export default function ListedVan(props){
    return(
        <Link className="listedvan--container" to={props.id}>
            <img src={props.img} alt="van image" />
            <p>
                <span style={{fontSize: "1.4rem"}}>{props.name}</span> <br></br>
                ${props.price}<span style={{fontSize: "0.8rem"}}>/day</span>
            </p>
        </Link>
    )
}