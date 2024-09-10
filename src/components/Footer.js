import React from 'react';
import '../sass/main.css'; 
import logo from '../assets/LOGO.png'; 

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <img src={logo} alt="Kasa Logo" />
            </div>
            <div className="footer-text">
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
