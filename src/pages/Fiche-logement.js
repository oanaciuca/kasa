import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import logementsData from '../data/logements.json';
import Gallery from '../components/Gallery';
import Rating from '../components/Rating';
import HostInfo from '../components/HostInfo';
import TagsList from '../components/TagsList';
import TitleLocation from '../components/TitleLocation';
import '../sass/main.css';

const FicheLogement = () => {
    const { id } = useParams();
    const [logement, setLogement] = useState({
        pictures: [], 
        title: 'Titre non disponible', 
        location: 'Localisation non disponible', 
        tags: [], 
        host: { name: 'Hôte non disponible', picture: '' }, 
        rating: 0
    });
    const [loading, setLoading] = useState(true);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const logementData = logementsData.find(item => item.id === id);

        if (logementData) {
            setLogement({
                pictures: logementData.pictures || [],
                title: logementData.title || 'Titre non disponible',
                location: logementData.location || 'Localisation non disponible',
                tags: logementData.tags || [],
                host: logementData.host || { name: 'Hôte non disponible', picture: '' },
                rating: parseFloat(logementData.rating) || 0 // Assure-toi que rating est un nombre
            });
        } else {
            setLoading(false); // Arrêter le chargement avant la redirection
            return <Navigate replace to="/404" />;
        }

        setLoading(false);
    }, [id]);

    if (loading) {
        return <div className="loading">Chargement...</div>;
    }

    const { pictures, title, location, tags, host, rating } = logement;

    const handleImageChange = (index) => {
        console.log(`Image courante dans FicheLogement: ${index}`);
        setCurrentImageIndex(index); // Met à jour l'index de l'image courante
    };

    return (
        <div className="fiche-logement">
            <Gallery 
                images={pictures} 
                currentImageIndex={currentImageIndex} 
                onImageChange={handleImageChange} 
            />
            <section className="fiche-logement__info">
                <TitleLocation 
                    title={title} 
                    location={location} 
                />
                <TagsList tags={tags} />
                <HostInfo host={host} />
                <Rating rating={Number(rating)} /> {/* Conversion explicite en nombre */}
            </section>
            <section className="fiche-logement__details">
                <div>Image courante: {currentImageIndex + 1}</div>
            </section>
        </div>
    );
};

export default FicheLogement;
