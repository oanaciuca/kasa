import React from 'react';
import PropTypes from 'prop-types';
import '../sass/host-info.scss'; 

const HostInfo = ({ host }) => {
    return (
        <div className="host-info">
            <div className="host-info__details">
                <p className="host-info__details__name">{host.name}</p>
                <img 
                    className="host-info__details__pic" 
                    src={host.picture} 
                    alt={host.name} 
                />
            </div>
        </div>
    );
};


HostInfo.propTypes = {
    host: PropTypes.shape({
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired
    }).isRequired
};

export default HostInfo;
