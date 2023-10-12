import React  from "react";
import { useOutletContext } from "react-router-dom";
import { authRequired } from "../utils";

export async function loader({request}) {
    await authRequired(request)
    return null
}

export default function SelectedHostBoatPrice() {
    const hostBoat = useOutletContext()

    return <h1>${hostBoat.price} <span className="dark--shade">/day</span></h1>
}