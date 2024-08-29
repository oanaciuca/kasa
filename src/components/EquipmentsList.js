import React from 'react';
import PropTypes from 'prop-types';
import Collapse from './Collapse'; 
import '../sass/equipments-list.scss'; 

const EquipmentsList = ({ equipments }) => {
    const content = (
        <ul>
            {equipments.length > 0 ? (
                equipments.map((equipment, index) => (
                    <li key={index} className="equipments-list__item">{equipment}</li>
                ))
            ) : (
                <li>Aucun équipement listé</li>
            )}
        </ul>
    );

    return (
        <div className="equipments-list">
            <Collapse title="Équipements" text={content} />
        </div>
    );
};

EquipmentsList.propTypes = {
    equipments: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default EquipmentsList;
