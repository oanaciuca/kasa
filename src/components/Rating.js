import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ rating }) => {
    // Affichage des props pour débogage
    console.log('Rating props:', rating);

    // S'assurer que rating est bien un nombre
    const numericRating = Number(rating);

    return (
        <div className="rating">
            <p>{numericRating}</p>
            {/* Affichage de l'évaluation avec un style simple pour les étoiles */}
            <div className="rating-stars">
                {Array.from({ length: 5 }, (_, index) => (
                    <span key={index} className={index < numericRating ? 'filled' : 'empty'}>★</span>
                ))}
            </div>
        </div>
    );
};

Rating.propTypes = {
    rating: PropTypes.number.isRequired,
};

export default Rating;
