import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header.js';
import Footer from './components/Footer.js'; 
import './sass/main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter> 
      <Header className="header" />
      <App />
      <Footer className="footer" />
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();