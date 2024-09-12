import React from 'react';
import PropTypes from 'prop-types';
import Collapse from '../components/Collapse'; 
import '../sass/main.css'; 

const Description = ({ description }) => (
  <div className="description">
    <Collapse title="Description">
      <p>{description}</p>
    </Collapse>
  </div>
);

Description.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Description;
