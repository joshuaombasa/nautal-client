import React  from "react";
import { useOutletContext } from "react-router-dom";

import { authRequired } from "../utils";

export async function loader({request}) {
    await authRequired(request)
    return null
}

export default function SelectedHostBoatPhotos() {
    const hostBoat = useOutletContext()

    return (
        <div className="images--container">
            <img src={hostBoat.imageUrl} alt="" />
        </div>
    )
}