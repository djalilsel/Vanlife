import React, { useState } from "react";
import { Link, useLocation, Form, useActionData, Navigate, useNavigation } from "react-router-dom";
import { loginUser } from "../../api";
import './Login.css'


export async function action({ request }) {

    let redirect = false
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    try{
        const data = await loginUser({email, password})
        .then(data => data.token ? localStorage.setItem("loggedin", true) : null)
        .then(redirect = true)
        return redirect
    } catch(err){
        return  err.message
    }
}

export default function Login(){


    const  { state } = useLocation()
    const redirectErr = useActionData()
    
    const messagee = state
    const navigation = useNavigation().state
    

  
    


    return (
        <div className="login--wrapper">
            {redirectErr === true && <Navigate to="/host" />}
            <div className="login--container">
                <h1>Sign in to your account</h1>
                {messagee && <h2>{messagee.message}</h2>}
                {redirectErr && <h2>{redirectErr}</h2>}
            <Form method="post" className="login--form" replace>
                <input name="email" className="login--input" type="email" placeholder="Enter your email" />
                <input name="password" className="login--input under" type="password" placeholder="Enter your password" />
                <button disabled={navigation === "submitting"} >
                    {navigation === "idle" ? "Sign in" : "Logging In..."}
                </button>
            </Form>
            <section>Don't have an account? <Link to='.' className="createaccount">Create one now</Link></section>
            </div>
        </div>
    )
}