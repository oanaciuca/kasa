import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ rating }) => {
    
    console.log('Rating props:', rating);

   
    const numericRating = Number(rating);

    return (
        <div className="rating">
            <p>{numericRating}</p>
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
