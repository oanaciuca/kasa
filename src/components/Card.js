import React from 'react';
import '../sass/card.scss';
import { Link } from 'react-router-dom'; 
import PropTypes from 'prop-types';

// Composant Card
function Card({ id, title, picture }) {
    return (
        <Link to={`/fiche-logement/${id}`} className="card-link">
            <div className="card">
                <img className="card__img" src={picture} alt={title} />
                <h2 className="card__title">{title}</h2>
            </div>
        </Link>
    );
}

// Validation des props avec PropTypes
Card.propTypes = {
    id: PropTypes.string.isRequired,       
    title: PropTypes.string.isRequired,    
    picture: PropTypes.string.isRequired,  
};
  
export default Card;
