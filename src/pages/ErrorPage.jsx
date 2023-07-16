import React from "react";
import { Link } from "react-router-dom";
import './ErrorPage.css'

export default function ErrorPage(){
    return(
        <div className="errorpage--wrapper">
            <div className="errorpage--container">
                <h1>
                    Sorry, The Page you where looking for was not found.
                </h1>
                <Link className="backtohome--btn" to='/'>Back to home</Link>
            </div>
        </div>
    )
}