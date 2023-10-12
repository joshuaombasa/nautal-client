import React from "react";

import { Link, useLoaderData, useLocation } from "react-router-dom";
import { getSigleBoat } from "../../api";

export function loader({params, request}) {
    return getSigleBoat(params.id)
}

export default function Singleboat() {
    const data = useLoaderData()
    const SingleBoat = data[0]

    const location = useLocation()
    const searchParams = location.state.searchParams ? `?${location.state.searchParams}` : ""
    const typeFilter  = location.state.typeFilter? location.state.typeFilter : "all"

    return (
        <div className="single--boat--page">
            <div className="single--boat--page--container">
                <Link 
                     to={`..${searchParams}`} 
                     relative="path"
                     className="back--link"
                >&larr; <span>Back to {typeFilter} boats</span></Link>
                <img src={SingleBoat.imageUrl} alt="" />
                <span className="boat--type">{SingleBoat.type}</span>
                <h1>{SingleBoat.name}</h1>
                <h3>${SingleBoat.price}<span className="dark--shade">/day</span></h3>
                <p>{SingleBoat.description}</p>
                <Link className="gold--link--style">Rent this van</Link>
            </div>
        </div>
    )
}