// LogementList.js
import React from 'react';
import Card from '../components/Card';
import '../sass/logements-list.scss'; 

function LogementsList({ logements }) {
    return (
        <div className="logement-list">
            {logements.map((logement) => (
                <Card
                    key={logement.id}  // Utilise l'id comme clé unique
                    id={logement.id} // Ajoute l'id comme prop
                    title={logement.title}
                    picture={logement.cover} // Utilise `cover` pour `picture`
                />
            ))}
        </div>
    );
}

export default LogementsList;
