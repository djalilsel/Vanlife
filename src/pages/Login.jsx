import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Login.css'

export default function Login(){

    const [loginInfo, setLoginInfo] = useState({ email: "", password: "" })

    function handleSubmit(event){
        event.preventDefault()
        console.log(loginInfo)
    }

    function handleChange(event){
        setLoginInfo(prevLoginInfo => (
            {...prevLoginInfo, 
            [event.target.name]: event.target.value}
        ))} 

    return (
        <div className="login--wrapper">
            <div className="login--container">
                <h1>Sign in to your account</h1>
            <form action="Login" className="login--form">
                <input name="email" className="login--input" type="email" placeholder="Enter your email" onChange={handleChange}/>
                <input name="password" className="login--input under" type="password" placeholder="Enter your password" onChange={handleChange}/>
                <button onClick={handleSubmit}>
                    Sign in
                </button>
            </form>
            <section>Don't have an account? <Link to='.' className="createaccount">Create one now</Link></section>
            </div>
        </div>
    )
}