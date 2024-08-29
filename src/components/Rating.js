import React, { useState } from 'react';
import PropTypes from 'prop-types'; 
import starActive from '../assets/rate_star_active.svg'; 
import starInactive from '../assets/rate_star_inactive.svg'; 
import '../sass/rating.scss'; 

function Rating({ rating, onRatingChange }) {
 
  const [currentRating, setCurrentRating] = useState(rating);
  const range = [1, 2, 3, 4, 5];

  const handleStarClick = (value) => {
    setCurrentRating(value);
    if (onRatingChange) {
      onRatingChange(value); 
    }
  };

  const handleKeyDown = (e, value) => {
    if (e.key === 'Enter') {
      handleStarClick(value); 
    }
  };

  return (
    <div className="rating-container">
      {range.map((rangeElem) => (
        <button
          className="rating-container__stars"
          key={rangeElem.toString()}
          onClick={() => handleStarClick(rangeElem)}
          onKeyDown={(e) => handleKeyDown(e, rangeElem)}
          tabIndex={0} // Rendre le bouton focusable
          aria-label={`Étoile ${rangeElem} - ${currentRating >= rangeElem ? 'Active' : 'Inactive'}`} // Description pour les lecteurs d'écran
          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }} // Réinitialiser le style par défaut du bouton
        >
          <img
            src={currentRating >= rangeElem ? starActive : starInactive}
            alt={`Étoile ${rangeElem}`}
          />
        </button>
      ))}
    </div>
  );
}

// Définir les types attendus pour les props
Rating.propTypes = {
  rating: PropTypes.number.isRequired, // Utiliser `rating` pour la prop
  onRatingChange: PropTypes.func.isRequired,
};

export default Rating;
