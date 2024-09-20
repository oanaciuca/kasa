import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Gallery from '../components/Gallery';
import TitleLocation from '../components/TitleLocation';
import logementsData from '../data/logements.json';
import TagsList from '../components/TagsList';
import HostInfo from '../components/HostInfo';
import Rating from '../components/Rating';
import Collapse from '../components/Collapse';
import '../sass/main.css';

const FicheLogement = () => {
    const { id } = useParams();
    const [logement, setLogement] = useState(null);
    const navigate = useNavigate();
    
    useEffect(() => {
        const fetchLogement = () => {
            const logementData = logementsData.find((item) => item.id === id);
            if (logementData) {
                setLogement(logementData);
            } else {
                console.error(`Logement avec l'id ${id} non trouvé`);
                navigate('/error'); // Redirection vers la page d'erreur si le logement n'est pas trouvé
            }
        };

        fetchLogement();
    }, [id, navigate]);

    if (!logement) {
        return null;
    }

    const rating = logement.rating ? parseFloat(logement.rating) : null;

    return (
        <div className="fiche-logement">
            <div className="gallery">
                <Gallery images={logement.pictures} />
            </div>
            <div className="logement-info">
                <div className="infos">
                    <div className="leftcolumn">
                        <TitleLocation title={logement.title} location={logement.location} />
                        <TagsList tags={logement.tags} />
                    </div>
                    <div className="rightcolumn">
                        <HostInfo host={logement.host} />
                        {rating !== null ? <Rating rating={rating} /> : <p>Rating non disponible</p>}
                    </div>
                </div>
                <div className="collapse-logement">
                    <div className="description"> 
                        <Collapse title="Description">
                        <p>{logement.description}</p>
                    </Collapse>
                    </div>
                    <div className="equipments">
                        <Collapse title="Equipements">
                        <ul>
                            {logement.equipments.map((equipment, index) => (
                                <li key={index} className="equipments-list__item">
                                    {equipment}
                                </li>
                            ))}
                        </ul>
                        </Collapse>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default FicheLogement;
