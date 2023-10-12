import React from "react";
import { NavLink,Link, Outlet, useLoaderData } from "react-router-dom";
import { getSingleHostBoat } from "../../api";
import { authRequired } from "../../utils";

export async function loader({ params, request }) {
    await authRequired(request)
    const id = params.id
    return getSingleHostBoat(id)
}

export default function HostBoatDetails() {
    const data = useLoaderData()
    const hostBoat = data[0]

    return (
        <div className="host--boat--details--page">
            <div className="host--boat--details--container">
                <Link
                    to={`..`}
                    relative="path"
                    className="back--link"
                >&larr; <span>Back to all boats</span></Link>
                <div className="top--section">
                    <img src={hostBoat.imageUrl} alt="" />
                    <div className="boat--info">
                        <span>{hostBoat.type}</span>
                        <h3>{hostBoat.name}</h3>
                        <h4>${hostBoat.price} <span className="dark--shade">/day</span></h4>
                    </div>
                </div>
                <div className="bottom--section">
                    <nav>
                        <NavLink
                            to="."
                            end
                            className={({ isActive }) => isActive ? "active--styles" : ""}
                        >Details</NavLink>
                        <NavLink
                            to="pricing"
                            className={({ isActive }) => isActive ? "active--styles" : ""}
                        >Pricing</NavLink>
                        <NavLink
                            to="photos"
                            className={({ isActive }) => isActive ? "active--styles" : ""}
                        >Photos</NavLink>
                    </nav>
                    <Outlet context={hostBoat} />
                </div>
            </div>
        </div>
    )
}