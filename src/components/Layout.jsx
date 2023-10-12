import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
    return (
        <div className="layout--page">
            <div className="layout--container">
                <Header/>
                <Outlet/>
                <Footer/>
            </div>
        </div>
    )
}