// src/components/Title.js
import React from 'react';
import PropTypes from 'prop-types';
import '../sass/main.css'; // Assurez-vous d'importer le CSS approprié

const Title = ({ text }) => {
  return <h1 className="fiche-logement__title">{text}</h1>;
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
