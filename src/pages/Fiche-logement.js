import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Gallery from '../components/Gallery';
import TitleLocation from '../components/TitleLocation';
import logementsData from '../data/logements.json';
import TagsList from '../components/TagsList';
import Description from '../components/Description';
import HostInfo from '../components/HostInfo';
import Rating from '../components/Rating';
import EquipmentsList from '../components/EquipmentsList';

const FicheLogement = () => {
    const { id } = useParams();
    const [logement, setLogement] = useState(null);

    useEffect(() => {
        const fetchLogement = () => {
            const logementData = logementsData.find((item) => item.id === id);
            if (logementData) {
                setLogement(logementData);
            }
        };

        fetchLogement();
    }, [id]);

    if (!logement) {
        return <p>Logement non trouvé</p>;
    }

    return (
        <div className="fiche-logement">
            <div className="gallery">
                <Gallery images={logement.pictures} />
            </div>
            <div className="infos">
                <div className="leftcolumn">
                    <TitleLocation 
                        title={logement.title} 
                        location={logement.location} 
                    />
                    <TagsList tags={logement.tags} />
                    <Description description={logement.description} />
                </div>
                <div className="rightcolumn">
                    <HostInfo host={logement.host} />
                    <Rating rating={logement.rating} />
                    <EquipmentsList equipments={logement.equipments} />
                </div>
            </div>    
        </div>
    );
};

export default FicheLogement;
