import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import logementsData from '../data/logements.json';
import Gallery from '../components/Gallery';
// import Description from '../components/Description';
// import EquipmentsList from '../components/EquipmentsList';
import Rating from '../components/Rating';
import HostInfo from '../components/HostInfo';
import TagsList from '../components/TagsList';
import '../sass/fiche-logement.scss';

const FicheLogement = () => {
    const { id } = useParams();
    const [logement, setLogement] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) {
            setError('ID invalide');
            setLoading(false);
            return;
        }

        

        const logementData = logementsData.find(item => item.id === id);

        if (logementData) {
            setLogement(logementData);
        } else {
            setError('Logement non trouvé');
        }

        setLoading(false);
    }, [id]);

    if (loading) {
        return <div className="loading">Chargement...</div>;
    }

    if (error) {
        return <Navigate replace to="/404" />;
    }

    if (!logement) {
        return null; 
    }

    const { pictures, title, location, tags, host, rating } = logement;
    // const { description, equipments } = logement;

    return (
        <div className="fiche-logement">
            <Gallery images={pictures} />
            <section className="fiche-logement__info">
                <h1>{title}</h1>
                <p>{location}</p>
                <TagsList tags={tags} />
                <HostInfo host={host} />
                <Rating rating={rating} />
            </section>
            <section className="fiche-logement__details">
                {/*</div>Description description={description} /> */}
                {/*</*EquipmentsList equipments={equipments} /> */}
            </section>
        </div>
    );
};

export default FicheLogement;
