import React from "react";

import { Form, Link, redirect, useLoaderData, useActionData } from "react-router-dom";
import { loginUser } from "../api";

export function loader({request}) {
    const url = new URL(request.url)
    const searchParams = new URLSearchParams(url.search)
    const message = searchParams.get("message")
    return message
}

export async function action({request}) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")

    const url = new URL(request.url)
    const searchParams = new URLSearchParams(url.search)
    const redirectPathname = searchParams.get("redirectPathname")
   
    try {
        const data = await loginUser({email, password})
        localStorage.setItem("isLoggedIn", true)
        // console.log(data)
        return redirect(redirectPathname || "/host")
    } catch(error) {
        console.log(error)
        return error
    }

}

export default function Login() {
    const  message = useLoaderData()
    const error = useActionData()
    // console.log(error)
    return (
        <div className="login--page">
            <div className="login--page--container">
                <h1>Sign in to your account</h1>
                {message && <h4 className="red">{message}</h4>}
                {error && <h4 className="red">{error.message}</h4>}
                <Form className="login--form" method="post">
                    <input 
                       type="email"
                       name="email"
                       placeholder="Email adress"
                       required 
                       className="email--input"
                    />
                    <input 
                       type="password"
                       name="password"
                       placeholder="password"
                       required 
                       className="password--input"
                    />
                    <button>Sign in</button>
                </Form>
                <p>Don’t have an account? <Link className="create--account--link">Create one now</Link></p>
            </div>
        </div>
    )
}