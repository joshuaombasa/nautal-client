import React from "react";
import { authRequired } from "../../utils";

export async function loader({request}) {
    await authRequired(request)
    return null
}

export default function Reviews() {
    return (
        <div className="min--height">
            <h1>This is Reviews</h1>
        </div>
        
    )
}