import React from 'react';
import PropTypes from 'prop-types';
import Collapse from '../components/Collapse'; 
import '../sass/main.css'; 

const EquipmentsList = ({ equipments }) => {
  return (
    <div className="equipments-list">
      <Collapse title="Équipements">
        <ul>
          {equipments.length > 0 ? (
            equipments.map((equipment, index) => (
              <li key={index} className="equipments-list__item">
                {equipment}
              </li>
            ))
          ) : (
            <li>Aucun équipement listé</li>
          )}
        </ul>
      </Collapse>
    </div>
  );
};

EquipmentsList.propTypes = {
  equipments: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default EquipmentsList;
