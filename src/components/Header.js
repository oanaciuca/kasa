import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/LOGO.png';
import '../sass/main.css'; 

function Header() {
    const location = useLocation();
    return (
        <header className="header">
                <img src={logo} alt="Logo" className="header-logo" />
                <nav className="header-nav">
                    <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Accueil</Link>
                    <Link to="/a-propos" className={`nav-link ${location.pathname === '/a-propos' ? 'active' : ''}`}>À Propos</Link>
                </nav>
        </header>
    );
}

export default Header;
