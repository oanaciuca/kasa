import React from 'react';
import PropTypes from 'prop-types';
import '../sass/main.css';

const TagsList = ({ tags }) => {
    console.log('TagsList props:', tags);
    return (
        <div className="tag-list">
            {tags.map((tag, index) => (
                <div className="tag" key={index}>{tag}</div>
            ))}
        </div>
    );
};

TagsList.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TagsList;
