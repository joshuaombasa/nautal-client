import React from "react";
import { Link } from "react-router-dom";

export default function HostBoatItem({ boat }) {
    return (
        <div key={boat._id}>
            <Link to={boat._id} className="host--boat--item--container">
                <img src={boat.imageUrl} alt="" />
                <div className="van--data">
                    <h3>{boat.name}</h3>
                    <h4>${boat.price}/day</h4>
                </div>
            </Link>
        </div>
    )
}