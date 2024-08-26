import React from 'react';
import starActive from '../assets/rate_star_active.svg'; // Assurez-vous que le chemin est correct
import starInactive from '../assets/rate_star_inactive.svg'; // Assurez-vous que le chemin est correct
import '../sass/rating.scss'; 

function Rating({ rating }) {
  const range = [1, 2, 3, 4, 5];
  
  return (
    <div className="rating-container">
      {range.map((rangeElem) => (
        <img
          className="rating-container__stars"
          src={rating >= rangeElem ? starActive : starInactive}
          alt={`Étoile ${rangeElem}`}
          key={rangeElem.toString()}
         
        />
      ))}
    </div>
  );
}

export default Rating;
