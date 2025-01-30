import React from 'react';
import './App.css';
import { FiCheckCircle, FiCloud, FiServer, FiBox } from 'react-icons/fi';

function App() {
  return (
    <div className="demo-container">
      <div className="floating-icons">
        <FiCloud className="floating-icon icon-1" />
        <FiServer className="floating-icon icon-2" />
        <FiBox className="floating-icon icon-3" />
      </div>
      <div className="demo-content">
        <div className="success-badge">
          <FiCheckCircle className="success-icon" />
          <span>Déploiement Réussi</span>
        </div>
        <h1>Félicitations !</h1>
        <p className="subtitle">Votre application a été déployée avec succès sur Amazon ECS</p>
        
        <div className="info-card">
          <div className="info-header">
            <FiCloud className="card-icon" />
            <h2>CloudPilot Demo</h2>
          </div>
          <div className="info-content">
            <p>Merci d'avoir suivi cette démonstration de CloudPilot.</p>
            <p>Cette page confirme que votre pipeline de déploiement fonctionne parfaitement.</p>
          </div>
        </div>

        <div className="tech-badge">
          Propulsé par CloudPilot & Amazon ECS
        </div>
      </div>
    </div>
  );
}

export default App; 