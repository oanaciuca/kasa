import React from 'react';
import { Link } from 'react-router-dom';
import '../sass/main.css'; // Assurez-vous que le CSS est correctement importé

const Error = () => {
    return (
        <div className="error-page">
            <div className="error-content">
                <h1 className="error-status">404</h1>
                <p className="error-message">Oups! La page que vous demandez n&apos;existe pas.</p>
                <Link to="/" className="error-home-link">Retourner sur la page d&apos;accueil</Link>
            </div>
        </div>
    );
};

export default Error;
