import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import { authRequired } from "../utils";

export async function loader ({request}) {
     await authRequired(request)
    return null
}

export default function HostLayout() {
    return (
        <div className="host--layout--page">
            <div className="host--layout--container">
                <nav>
                    <NavLink
                        to="."
                        end
                        className={({isActive}) => isActive ? "active--styles" : ""} 
                    >Dashboard</NavLink>
                    <NavLink
                        to="income"
                        className={({isActive}) => isActive ? "active--styles" : ""} 
                    >Income</NavLink>
                    <NavLink
                        to="boats"
                        className={({isActive}) => isActive ? "active--styles" : ""} 
                    >Boats</NavLink>
                    <NavLink
                        to="reviews"
                        className={({isActive}) => isActive ? "active--styles" : ""} 
                    >Reviews</NavLink>
                </nav>
                <Outlet/>
            </div>
        </div>
    )
}