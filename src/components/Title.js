import React from 'react';
import PropTypes from 'prop-types';

const TitleLocation = ({ title, location }) => {
    return (
        <div className="title-location">
            <h2 className="title">{title}</h2>
            <p className="location">{location}</p>
        </div>
    );
};

TitleLocation.propTypes = {
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
};

export default TitleLocation;
