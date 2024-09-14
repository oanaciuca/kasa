import React from 'react';
import PropTypes from 'prop-types';
import '../sass/main.css';

const TagsList = ({ tags }) => {
    return (
        <ul className="tag-list">
                {tags.map((tag, index) => (
                    <li className="tag" key={index}>{tag}</li>
                ))}
         </ul>    
    );
};

TagsList.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TagsList;
