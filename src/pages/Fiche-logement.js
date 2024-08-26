// src/pages/Fiche-logement.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Importer useParams pour récupérer les paramètres de l'URL
import Header from '../components/Header';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Rating from '../components/Rating'; // Importer le composant Rating
import '../sass/fiche-logement.scss'; // Importer le CSS spécifique à la page

// Importer le fichier JSON
import logementsData from '../data/logements.json';

const FicheLogement = () => {
    const { id } = useParams(); // Récupérer l'ID du logement à partir des paramètres de l'URL
    const [logement, setLogement] = useState(null);
    const [error, setError] = useState(null); // Ajouter un état pour les erreurs

    useEffect(() => {
        const fetchLogement = () => {
            try {
                console.log('Données du fichier JSON:', logementsData);
                const logementData = logementsData.find(item => item.id === id);
                if (!logementData) {
                    throw new Error('Logement not found');
                }
                setLogement(logementData);
            } catch (error) {
                console.error('Erreur lors de la récupération des données du logement:', error);
                setError(error.message); // Enregistrer le message d'erreur
            }
        };

        fetchLogement();
    }, [id]); // Dépendre de l'ID pour recharger les données si l'ID change

    if (error) {
        return <div>Error: {error}</div>; // Afficher l'erreur s'il y en a
    }

    if (!logement) {
        return <div>Loading...</div>; // Afficher un message de chargement si les données ne sont pas encore disponibles
    }

    const { pictures = [], title = '', description = '', location = '', tags = [], amenities = [], owner = '', rating = 0 } = logement;
    
    console.log('Images:', pictures);

    return (
        <div className="fiche-logement">
            <Header />
            <main className="fiche-logement-content">
                <h1 className="fiche-logement__title">{title}</h1>
                <Gallery images={pictures} />
                <div className="fiche-logement__details">
                    <Rating rating={rating} /> {/* Utilisez le composant Rating */}
                    <p className="fiche-logement__description">{description}</p>
                    <div className="fiche-logement__location">{location}</div>
                    <div className="fiche-logement__tags">
                        {tags.length > 0 ? tags.map(tag => (
                            <span key={tag} className="fiche-logement__tag">{tag}</span>
                        )) : <span className="fiche-logement__tag">No tags available</span>}
                    </div>
                    <div className="fiche-logement__amenities">
                        <h2>Équipements</h2>
                        <ul>
                            {amenities.length > 0 ? amenities.map(amenity => (
                                <li key={amenity}>{amenity}</li>
                            )) : <li>No amenities listed</li>}
                        </ul>
                    </div>
                    <div className="fiche-logement__owner">
                        <h2>Propriétaire</h2>
                        <p>{owner || 'Owner information not available'}</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default FicheLogement;
