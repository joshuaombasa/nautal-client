import React from "react";
import { authRequired } from "../../utils";
export async function loader ({request}) {
    await authRequired(request)
   return null
}

export default function Dashboard() {
    return (
        <div className="min--height">
            <h1>This is host Dashboard</h1>
        </div>
        
    )
}