import React from "react";
import { Link, useRouteError } from "react-router-dom";
import './ErrorPage.css'

export default function Error(){

    const error = useRouteError()

    return(
        <div className="errorpage--wrapper">
            <div className="errorpage--container">
                <h1>
                    Sorry, {error.message} because of {error.statusText} <br />
                    Error Code: {error.status}
                </h1>
                <Link className="backtohome--btn" to='/'>Back to home</Link>
            </div>
        </div>
    )
}