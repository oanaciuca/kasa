import React from 'react';
import PropTypes from 'prop-types';
import rateStarActive from '../assets/rate_star_active.png';
import rateStarInactive from '../assets/rate_star_inactive.png';

const Rating = ({ rating }) => {
    const numericRating = Number(rating); 

    return (
        <div className="rating">
            <div className="rating-stars">
                {Array.from({ length: 5 }, (_, index) => (
                    <img
                        key={index}
                        src={index < numericRating ? rateStarActive : rateStarInactive}
                        alt={index < numericRating ? 'Étoile active' : 'Étoile inactive'}
                        className="rating-star"
                    />
                ))}
            </div>
        </div>
    );
};

Rating.propTypes = {
    rating: PropTypes.number.isRequired,
};

export default Rating;
