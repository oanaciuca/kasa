import React from 'react';
import '../sass/main.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; 

// Composant Card
function Card({ logement }) {

    const { id, cover, title } = logement;


    return (
        <Link to={`/fiche-logement/${id}`} className="card-link">
            <div className="card">
                <img className="card__img" src={cover} alt={title} />
                <h2 className="card__title">{title}</h2>
            </div>
        </Link>
    );
}

Card.propTypes = {
    logement: PropTypes.shape({
        id: PropTypes.string.isRequired,    // ID du logement est une chaîne de caractères et requise
        cover: PropTypes.string.isRequired, // URL de l'image est une chaîne de caractères et requise
        title: PropTypes.string.isRequired  // Titre du logement est une chaîne de caractères et requise
    }).isRequired
};
  
export default Card;