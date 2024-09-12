import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import FicheLogement from '../pages/Fiche-logement';
import Error from '../pages/Error';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/fiche-logement/:id" element={<FicheLogement />} />
        <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;