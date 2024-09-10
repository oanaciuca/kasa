import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../sass/main.css';
import leftArrow from '../assets/left_arrow.png';
import rightArrow from '../assets/right_arrow.png';

function Gallery({ images, currentImageIndex, onImageChange }) {

    useEffect(() => {
        console.log(`Image courante dans Gallery: ${currentImageIndex}`); // Débogage
        onImageChange(currentImageIndex); // Notifie le parent du changement d'image
    }, [currentImageIndex, onImageChange]);

    const handleNext = () => {
        const newIndex = (currentImageIndex + 1) % images.length;
        onImageChange(newIndex); // Informe le parent du nouvel index
    };

    const handlePrevious = () => {
        const newIndex = (currentImageIndex - 1 + images.length) % images.length;
        onImageChange(newIndex); // Informe le parent du nouvel index
    };

    if (images.length === 0) return <div>Aucune image disponible</div>;

    return (
        <div className="gallery">
            {images.length > 1 && (
                <button
                    className="gallery__button gallery__button--prev"
                    onClick={handlePrevious}
                >
                    <img src={leftArrow} alt="Précédent" />
                </button>
            )}
            <div className="gallery__image-container">
                <img
                    src={images[currentImageIndex]}
                    alt={`Slide ${currentImageIndex + 1}`}
                    className="gallery__image"
                />
            </div>
            {images.length > 1 && (
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
    currentImageIndex: PropTypes.number.isRequired,
    onImageChange: PropTypes.func.isRequired,
};

export default Gallery;
