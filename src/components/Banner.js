import React from 'react';
import bannerImage from '../assets/Banner.png'; 

function Banner() {
    return (
        <div className="banner">
            <img src={bannerImage} alt="Banner" className="banner-image" />
        </div>
    );
}

export default Banner;
