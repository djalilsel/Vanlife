import React from "react";
import { Link } from "react-router-dom";
import MainBackground from './../assets/images/home-hero.png'
import './Main.css'

export default function Main(){
    return(
        <div className="main--container" style={{height: innerHeight - 145, width: innerWidth}}>
            <div>
                <h2>
                    You got the travel plans, we got the travel vans.
                </h2> 
                <p>
                    Add advanture to your life by joining the #vanlife
                    movement.<br/>
                    Rent the perfect van to make your perfect road trip.
                </p>
                <Link className="findUrvan--btn" to="/vans">
                    Find your van
                </Link>
            </div>
        </div>
    )
}