import React from "react";
import  {Link, NavLink, useNavigate} from "react-router-dom"
export default function Header() {
    
    const navigate = useNavigate()

    function handleLogout() {
        localStorage.removeItem("isLoggedIn")
        return navigate("/login")
    }

    return (
        <header>
            <Link to="/">nautal</Link>
            <nav>
                <NavLink
                     to="/about"
                     className={({isActive}) => isActive === true ? "active--styles" : ""} 
                >About</NavLink>
                <NavLink
                     to="/boats"
                     className={({isActive}) => isActive === true ? "active--styles" : ""} 
                >Boats</NavLink>
                <NavLink
                     to="/host"
                     className={({isActive}) => isActive === true ? "active--styles" : ""} 
                >Host</NavLink>
                <NavLink
                     to="/login"
                     className={({isActive}) => isActive === true ? "active--styles" : ""} 
                >Login</NavLink>
                <button className="logout--btn" onClick={() => handleLogout()}>Logout</button>
            </nav>
        </header>
    )
}