import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/LOGO.png';
import '../sass/main.css'; 

function Header() {
    return (
        <header className="header">
                <img src={logo} alt="Logo" className="header-logo" />
                <nav className="header-nav">
                    <Link to="/" className="nav-link">Accueil</Link>
                    <Link to="/a-propos" className="nav-link">À Propos</Link>
                </nav>
        </header>
    );
}

export default Header;
