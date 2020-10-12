import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/pages/landing.css';
import logoImg from '../images/logo.svg'; 

const Landing: React.FC = () => {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy" />
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>
        <div className="location">
          <strong>Itapuranga</strong>
          <span>Goiás</span>
        </div>
        <Link to="app" className="enter-app">

        </Link>
      </div>
    </div>
  );
}

export default Landing;