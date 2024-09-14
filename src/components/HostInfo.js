import React from 'react';
import PropTypes from 'prop-types';
import '../sass/main.css'; 

const HostInfo = ({ host }) => {
    return (
        <div className="host-info">
            <span className="host-name">{host.name}</span>
            <img className="host-picture" src={host.picture} alt={host.name} /> 
        </div>
    );
};

HostInfo.propTypes = {
    host: PropTypes.object.isRequired,
};

export default HostInfo;
