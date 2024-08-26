import React, { useState } from 'react';
import '../sass/gallery.scss';

function Gallery({ images }) {
    console.log('Images passed to Gallery:', images);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevious = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    if (images.length === 0) return <div>No images available</div>; 

    return (
        <div className="gallery">
            {images.length > 1 && (
                <button className="gallery__button gallery__button--prev" onClick={handlePrevious}>
                    &#9664;
                </button>
            )}
            <div className="gallery__image-container">
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="gallery__image"
                />
            </div>
            {images.length > 1 && (
                <button className="gallery__button gallery__button--next" onClick={handleNext}>
                    &#9654;
                </button>
            )}
        </div>
    );
}

export default Gallery;
