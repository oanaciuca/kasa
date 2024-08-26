import React from 'react';
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import LogementsList from '../components/LogementsList';
import logementsData from '../data/logements.json';


function Home() {
    return (
        <div className="home">
            <Header />
            <main className="home-content">
                <LogementsList logements={logementsData} />
            </main>
            <Footer />
        </div>
    );
}

export default Home;

