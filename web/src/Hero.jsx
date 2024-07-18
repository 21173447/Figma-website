import React from "react";
import './hero.css'; 

const Hero = () => {
    return (
        <header className="header-container" style={{ backgroundImage: 'url(./Images/hero1.png)' }}>
            <div className="top-section">
                <img className="logo" src="./Images/DZ.png" alt="" />
                <nav>
                    <ul className="nav-list">
                         <li><a href="#">ABOUT</a></li>
                         <li><a href="#">ARTICLES</a></li>
                    </ul>
                </nav>
                <button className="subscribe-button">Subscribe</button>
            </div>
            <div className="title-container">
                <h1>DRONOTICZ</h1>
                <p>The Era of Drones</p>
                <p className="underscore-line"></p>
            </div>
        </header>
    );
};

export default Hero;