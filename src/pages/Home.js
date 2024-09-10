import React from 'react';
import Banner from '../components/Banner'; 
import logementsData from '../data/logements.json';
import Card from '../components/Card';
import '../sass/main.css'; 

function Home() {

    return (
        <div className="home">
            <Banner className="banner"/>
            <main className="home-content">
                {logementsData.map((logement) => (
                    <Card logement={logement} key={logement.id} />
                ))}
            </main>
        </div>
    );
}


export default Home;