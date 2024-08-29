import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import FicheLogement from '../pages/Fiche-logement';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fiche-logement/:id" element={<FicheLogement />} />
        
    </Routes>
  );
}

export default App;
