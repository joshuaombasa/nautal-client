import React from "react";
import { useRouteError } from "react-router-dom";

export default function Error() {
    const error = useRouteError()
    return (
        <div className="error--page">
            <div className="error--page--container">
                <h1 className="error--text">Error: {error.message}</h1>
            </div>
        </div>
    )
}