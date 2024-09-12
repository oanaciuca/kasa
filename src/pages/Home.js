import React from 'react';
import Banner from '../components/Banner'; 
import logementsData from '../data/logements.json';
import Card from '../components/Card';
import '../sass/main.css';
import bannerImage from '../assets/Banner.png';

function Home() {

    return (
        <div className="home">
            <Banner title="Chez vous, partout et ailleurs" img={bannerImage} />
            <main className="home-content">
                {logementsData.map((logement) => (
                    <Card logement={logement} key={logement.id} />
                ))}
            </main>
        </div>
    );
}


export default Home;