import React  from "react";
import { useOutletContext } from "react-router-dom";
import { authRequired } from "../utils";

export async function loader({request}) {
    await authRequired(request)
    return null
}

export default function SelectedHostBoatDetails() {
    const hostBoat = useOutletContext()
    return (
        <div className="selected--host--boat--details">
            <p>Name: <span className="dark--shade">{hostBoat.name}</span></p>
            <p>Category: <span className="dark--shade">{hostBoat.type}</span></p>
            <p>Description: <span className="dark--shade">{hostBoat.description}</span></p>
            <p>Visibility: <span className="dark--shade">Public</span></p>
        </div>
    )
}