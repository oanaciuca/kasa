import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Rating from '../components/Rating';
import HostInfo from '../components/HostInfo';
import EquipmentsList from '../components/EquipmentsList';
import Description from '../components/Description';
import TagsList from '../components/TagsList';
import '../sass/fiche-logement.scss';
import logementsData from '../data/logements.json';

const FicheLogement = () => {
    const { id } = useParams();
    const [logement, setLogement] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('ID extrait :', id);

        const fetchLogement = () => {
            try {
                if (typeof id !== 'string') {
                    throw new Error('ID invalide');
                }

                if (!logementsData || logementsData.length === 0) {
                    throw new Error('Les données des logements sont vides');
                }

                const logementData = logementsData.find(item => item.id === id);
                if (!logementData) {
                    throw new Error('Logement non trouvé');
                }
                setLogement(logementData);
            } catch (error) {
                console.error('Erreur lors de la récupération des données du logement:', error);
                setError('Erreur lors de la récupération des données du logement : ' + error.message);
            }
        };

        fetchLogement();
    }, [id]);

    if (error) {
        return <div className="error">Erreur : {error}</div>;
    }

    if (!logement) {
        return <div className="loading">Chargement...</div>;
    }

    const {
        pictures = [],
        title = '',
        description = '',
        location = '',
        tags = [],
        equipments = [],
        host = { name: '', picture: '' },
        rating = 0
    } = logement;

    const handleRatingChange = (newRating) => {
        console.log('Nouvelle note:', newRating);
    };

    return (
        <div className="fiche-logement">
            <Header />
            <main className="fiche-logement-content">
                <Gallery images={pictures} />
                <div className="fiche-logement__info">
                    <h1 className="fiche-logement__title">{title}</h1>
                    <p className="fiche-logement__location">{location}</p>
                </div>
                <div className="fiche-logement__details">
                    <Description description={description} />
                    <Rating rating={Number(rating)} onRatingChange={handleRatingChange} />
                    <TagsList tags={tags} />
                    <EquipmentsList equipments={equipments} />
                </div>
                <HostInfo host={host} />
            </main>
            <Footer />
        </div>
    );
};

export default FicheLogement;
