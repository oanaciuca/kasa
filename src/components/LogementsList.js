import React from 'react';
import Card from '../components/Card';
import '../sass/logements-list.scss';
import PropTypes from 'prop-types'; 

function LogementsList({ logements }) {
    return (
        <div className="logements-list">
            {logements.map((logement) => {
                
                const logementId = String(logement.id);

                
                if (!logementId) {
                    console.error('ID du logement manquant:', logement);
                    return null;
                }

                if (!logement.title) {
                    console.error('Titre du logement manquant pour l\'ID:', logementId);
                    return null;
                }

                if (!logement.cover) {
                    console.error('Image de couverture manquante pour l\'ID:', logementId);
                    return null;
                }

                return (
                    <Card
                        key={logementId} 
                        id={logementId}
                        title={logement.title}
                        picture={logement.cover} 
                    />
                );
            })}
        </div>
    );
}


LogementsList.propTypes = {
    logements: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            cover: PropTypes.string.isRequired, 
        })
    ).isRequired,
};

export default LogementsList;
