import React, { useState } from 'react';
import '../sass/main.css'; 
import arrowUp from '../assets/arrow_up.png';
import arrowDown from '../assets/arrow_down.png';
import PropTypes from 'prop-types';


const Collapse = ({ title, children }) => { 
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${isOpen ? 'open' : ''}`}>
      <button className="collapse-header" onClick={toggleCollapse}>
        <span>{title}</span>
        <img
          className="collapse-arrow"
          src={isOpen ? arrowDown : arrowUp}
          alt="Arrow"
        />
      </button>
      {isOpen && <div className="collapse-content">{children}</div>} 
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};


export default Collapse;
