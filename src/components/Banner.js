import React from 'react';
import PropTypes from 'prop-types'; 
import '../sass/main.css'; 

function Banner({title, img}) {
    return (
        <div className="banner">
            <img src={img} alt="Banner" className="banner-image" />
            <div className="banner-text">{title}</div>
        </div>
    );
}

Banner.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
};

export default Banner;