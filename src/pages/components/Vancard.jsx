import React from "react";
import { Link } from 'react-router-dom'
import './Vancard.css'

export default function Vancard(props){
    let color
    if( props.type === "simple" ){
        color = "#E17654"
    }  else if( props.type === "rugged" ){
        color = "#115E59"
    } else if( props.type === "luxury" ){
        color = "#161616"
    }
    return(
        <Link to={`/vans/${props.id}`}>
            <div className="card--container">
                <img src={props.img} alt="van image" />
                <div className="card--text">
                    <p>
                        {props.name}
                    </p>
                    <p className="second--p">
                        <span style={{fontSize: "1.1rem"}} >${props.price}</span> <br></br>
                        <span style={{fontSize: "0.8rem"}} >/day</span>
                    </p>
                    <br></br>
                    <div className="van--type" style={{backgroundColor: color}}>
                        {props.type.charAt(0).toUpperCase() + props.type.slice(1)}
                    </div>
                </div>
            </div>
        </Link>
    )
}