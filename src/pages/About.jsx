import React from "react";
import { Link } from 'react-router-dom'
import AboutImg from './../assets/images/about-hero.png'
import './About.css'

export default function About(){
    return(
        <div className="about--container" style={{height: innerHeight - 145, width: innerWidth} }>
            <img src={AboutImg} alt="about-hero"/>
            <div className="bottom--about--container">
                <h2>
                    Don't squeeze in a sedan when you could relax in a van.
                </h2>
                <p className="first--about--p">
                    Our mission is to enliven your road trip with the 
                    perfect travel van rental. Our vans are recertified 
                    before each trip to ensure your travel plans can go 
                    off without a hitch.
                    (Hitch costs extra 😉)
                </p>
                <p className="second--about--p">
                    Our team is full of vanlife enthusiasts who know 
                    firsthand the magic of touring the world on 4 wheels.
                </p>
                <div>
                    <h3>
                        Your destination is waiting.<br />
                        Your van is ready.
                    </h3>
                    <Link className="epxVan--btn" to="/vans">
                        Explore our vans
                    </Link>
                </div>
            </div>
        </div>
    )
}