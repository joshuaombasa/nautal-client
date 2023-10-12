import React from "react";

import { Link } from "react-router-dom";

export default function BoatsPageBoatItem({ boat, typeFilter,searchParams }) {
    return (
        <div className="boats--page--boat--item">
            <Link to={boat.id} state={{typeFilter,searchParams}}>
                <div className="boats--page--boat--item--container">
                    <img src={boat.imageUrl} alt="" />
                    <div className="particulars">
                        <h3>{boat.name}</h3>
                        <h3>${boat.price} <span className="dark--shade">/day</span></h3>
                    </div>
                    <span className="boat--type">{boat.type}</span>
                </div>
            </Link>
        </div>
    )
}