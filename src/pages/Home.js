import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner'; 
import Footer from '../components/Footer'; 
import LogementsList from '../components/LogementsList';
import logementsData from '../data/logements.json';

function Home() {
    // Convertir les IDs en nombres
    const logementsWithNumbers = logementsData.map(logement => ({
        ...logement,
        id: Number(logement.id), 
    }));

    return (
        <div className="home">
            <Header />
            <Banner />
            <main className="home-content">
                <LogementsList logements={logementsWithNumbers} />
            </main>
            <Footer />
        </div>
    );
}


export default Home;
