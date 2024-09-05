import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../sass/gallery.scss';
import leftArrow from '../assets/left_arrow.png';
import rightArrow from '../assets/right_arrow.png';

function Gallery({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => {
            let newIndex = prevIndex + 1;
            if (newIndex === images.length) {
                newIndex = 0; 
            }
            return newIndex;
        });
    };
    
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => {
            let newIndex = prevIndex - 1;
            if (newIndex < 0) {
                newIndex = images.length - 1; 
            }
            return newIndex;
        });
    };
    
    if (images.length === 0) return <div>Aucune image disponible</div>;

    
    const showPrevButton = images.length > 1;
    const showNextButton = images.length > 1;

    return (
        <div className="gallery">
            {showPrevButton && (
                <button
                    className="gallery__button gallery__button--prev"
                    onClick={handlePrevious}
                >
                    <img src={leftArrow} alt="Précédent" /> 
                    
                </button>
            )}
            <div className="gallery__image-container">
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="gallery__image"
                />
            </div>
            {showNextButton && (
                <button
                    className="gallery__button gallery__button--next"
                    onClick={handleNext}
                >
                    <img src={rightArrow} alt="Suivant" /> 
                    
                </button>
            )}
        </div>
    );
}


Gallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Gallery;
