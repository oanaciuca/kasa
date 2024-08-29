import React from 'react';
import PropTypes from 'prop-types';
import Collapse from './Collapse'; 
import '../sass/description.scss'; 

const Description = ({ description }) => {
    const content = <p>{description}</p>;

    return (
        <div className="description">
            <Collapse title="Description" text={content} />
        </div>
    );
};

Description.propTypes = {
    description: PropTypes.string.isRequired
};

export default Description;
