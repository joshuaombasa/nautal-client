import React from "react";
import { Link } from "react-router-dom";


export default function Home() {
    return (
        <div className="home--page">
            <div className="home--page--container wrapper">
                <h1>Welcome to nautal - Your Gateway to Adventure on the Water!</h1>
                <h4>Discover the freedom of the open seas and the thrill of aquatic exploration with our premier boat rental services. Whether you're an experienced captain or a first-time sailor, we have the perfect vessel to suit your needs.</h4>
                <Link to="/boats" className="gold--link--style">Find your boat</Link>
            </div>
        </div>
    )
}