import React from 'react';
import PropTypes from 'prop-types';
import Collapse from '../components/Collapse'; 
import '../sass/main.css'; 

const EquipmentsList = ({ equipments }) => (
  <div className="equipments-list">
    <Collapse title="Équipements">
      <ul>
        {equipments.map((equipment, index) => (
          <li key={index} className="equipments-list__item">
            {equipment}
          </li>
        ))}
      </ul>
    </Collapse>
  </div>
);

EquipmentsList.propTypes = {
  equipments: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default EquipmentsList;
