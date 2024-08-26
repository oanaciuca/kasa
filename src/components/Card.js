import React from 'react';
import '../sass/card.scss';
import { Link } from 'react-router-dom'; 

//Component
function Card({ id, title, picture }) {
    return (
        <Link to={`/fiche-logement/${id}`} className="card-link">
            <div className="card">
                <img className="card__img" src={picture} alt={title} />
                <h2 className="card__title">{title}</h2>
            </div>
        </Link>
    );
}

  
export default Card


