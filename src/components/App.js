// src/components/App.js
import React from 'react';
import Home from '../pages/Home';
import FicheLogement from '../pages/Fiche-logement';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fiche-logement/:id" element={<FicheLogement />} />
        {/* Autres routes */}
      </Routes>
  );
}

export default App;
