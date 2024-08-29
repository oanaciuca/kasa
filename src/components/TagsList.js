import React from 'react';
import PropTypes from 'prop-types';
import '../sass/tags-list.scss'; 

const TagsList = ({ tags }) => {
    return (
        <div className="tags-list">
            {tags.length > 0 ? tags.map((tag, index) => (
                <span key={index} className="tags-list__tag">{tag}</span>
            )) : <span>Aucun tag disponible</span>}
        </div>
    );
};

TagsList.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default TagsList;
