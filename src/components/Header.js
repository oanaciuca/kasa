import React from 'react';
import logo from '../assets/LOGO.png'; // Importation de l'image
import '../sass/header.scss'; // Importez votre fichier CSS pour appliquer les styles

function Header() {
    return (
        <header className="header">
                <img src={logo} alt="Logo" className="header-logo" />
            <nav className="header-nav">
                <Link to="/" className="nav-link">Accueil</Link>
                <Link to="#a-propos" className="nav-link">À Propos</Link>
            </nav>
        </header>
    );
}

export default Header;
