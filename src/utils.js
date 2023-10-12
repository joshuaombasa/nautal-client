import { redirect } from "react-router-dom";

export async function authRequired(request) {
    const url = new URL(request.url)
    const pathname = url.pathname ? url.pathname : "/host"


    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (!isLoggedIn) {
        throw redirect(`/login?message=Please login first&redirectPathname=${pathname}`)
    }
}