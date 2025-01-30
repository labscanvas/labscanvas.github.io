import React from "react";
import Navbar from "../Navbar/Navbar";
 
const Banner = () => {
    return(
        <>
        <Navbar/>
        <section className="front-banner">
            <div className="banner-content">
                <h1 className="banner-title">Welcome to Canvas Labs</h1>
                <p className="banner-subtitle">A Canvas that designs your solution</p>
                <a href="#projects" className="cta-button">Explore Projects</a>
            </div>
        </section>
        </>
    )
}
 
export default Banner
 
 