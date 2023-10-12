import React from "react";
import { useLoaderData } from "react-router-dom";
import { getHostBoats } from "../../api";
import HostBoatItem from "../../components/HostBoatItem";
import { authRequired } from "../../utils";

export async function loader({request}) {
    await authRequired(request)
    return getHostBoats()
}

export default function HostBoats() {
    const hostBoats = useLoaderData()

    const hostBoatElements = hostBoats.map(boat => (
        <HostBoatItem key={boat.id} boat={boat}/>
    ))
    

    return (
        <div className="host--boats--page">
            <div className="host--boats-container">
                <h1>Your listed boats</h1>
                {hostBoatElements}
            </div>
        </div>
    )
}