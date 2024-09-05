import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner'; 
import Footer from '../components/Footer'; 
import logementsData from '../data/logements.json';
import Card from '../components/Card';

function Home() {

    return (
        <div className="home">
            <Header />
            <Banner />
            <main className="home-content">
                {logementsData.map((logement) => (
                    <Card logement={logement} key={logement.id} />
                ))}
            </main>
            <Footer />
        </div>
    );
}


export default Home;