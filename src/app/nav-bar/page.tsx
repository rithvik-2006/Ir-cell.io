import React from 'react';
// Import the CSS file where your styles are defined


export default function Navbar() {
    return (
        <div className="nav-container">
            <img className="logo" src="/img1.jpeg"alt="Logo" />
            <img className="logo logo2" src="https://iith.ac.in/assets/images/horzlogolong.png"alt="Logo" />
            <nav className="nav-bar">
                <ul>
                    <li><a href ="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Life @ IITH</a></li>
                    <li><a href="#">Photo gallery</a></li> {/* Corrected spelling of "Sponsors" */}
                    
                </ul>
            </nav>
        </div>
    );
}
