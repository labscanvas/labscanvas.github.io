import React from "react";
 
const Navbar = () => {
    return(
        <nav className="navbar">
            <h1 className="logo">Canvas Labs</h1>
 
            <div className="nav-links">
                <a href="#about" className="nav-link">About</a>
                <a href="#projects" className="nav-link">Projects</a>
            </div>
        </nav>
    )
}
 
export default Navbar