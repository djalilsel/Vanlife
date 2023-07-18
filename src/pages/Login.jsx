import React, { useState } from "react";
import { Link, useLocation, Form } from "react-router-dom";
import { loginUser } from "../../api";
import './Login.css'


export async function action({ request }) {

    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const data = await loginUser({email, password})
    .then(data => data.token ? localStorage.setItem("loggedin", true) : null)
    .then(() => {rredirect = true})
        .catch(err => console.log(err))
        
    
    console.log(localStorage.getItem("loggedin"))
    return null
}

export default function Login(){


    const [status, setStatus] = useState("idle")
    const [error, setError] = useState(null)
    const  { state } = useLocation()
    const messagee = state


    function handleSubmit(event){
        messagee.message = ""
        event.preventDefault()
        setStatus("submitting")
        setError(null)
        .finally(() => setStatus("idle"))

    }
    


    return (
        <div className="login--wrapper">
            <div className="login--container">
                <h1>Sign in to your account</h1>
                {error && <h2>{error.message}</h2>}
                {messagee?.message && <h2>{messagee.message}</h2>}
            <Form method="post" className="login--form" replace>
                <input name="email" className="login--input" type="email" placeholder="Enter your email" />
                <input name="password" className="login--input under" type="password" placeholder="Enter your password" />
                <button disabled={status === "submitting" ? true : false} >
                    Sign in
                </button>
            </Form>
            <section>Don't have an account? <Link to='.' className="createaccount">Create one now</Link></section>
            </div>
        </div>
    )
}