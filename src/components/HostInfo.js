import React from 'react';
import PropTypes from 'prop-types';

const HostInfo = ({ host }) => {
    console.log('HostInfo props:', host);
    return (
        <div>
            <p>{host.name}</p>
            {/* Autres informations sur l'hôte */}
        </div>
    );
};

HostInfo.propTypes = {
    host: PropTypes.object.isRequired,
};

export default HostInfo;
