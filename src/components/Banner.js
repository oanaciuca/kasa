import React from 'react';
import bannerImage from '../assets/Banner.png';
import '../sass/main.css'; 

function Banner() {
    return (
        <div className="banner">
            <img src={bannerImage} alt="Banner" className="banner-image" />
            <div className="banner-text">Chez vous, partout et ailleurs</div>
        </div>
    );
}

export default Banner;
