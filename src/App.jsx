import React from 'react';
import './App.css';
import { FiCheckCircle } from 'react-icons/fi';

function App() {
  return (
    <div className="demo-container">
      <div className="demo-content">
        <FiCheckCircle className="success-icon" />
        <h1>Merci d'avoir suivi la démonstration</h1>
        <p>Cette application a été déployée avec succès via CloudPilot</p>
        <div className="info-box">
          <p>Application de démonstration</p>
          <small>Déployée sur Amazon ECS</small>
        </div>
      </div>
    </div>
  );
}

export default App; 