import React from 'react';
import './Feactures.css';

const featuresData = [
  {
    title: 'Alta Eficiencia',
    description: 'Nuestros paneles solares ofrecen una alta eficiencia energética para maximizar la generación de energía.',
    icon: '🌞'
  },
  {
    title: 'Durabilidad',
    description: 'Diseñados para soportar condiciones climáticas adversas y tener una larga vida útil.',
    icon: '🛠️'
  },
  {
    title: 'Económicos',
    description: 'Ofrecemos soluciones económicas que se ajustan a diferentes presupuestos.',
    icon: '💰'
  },
  {
    title: 'Fácil Instalación',
    description: 'Nuestros paneles solares son fáciles de instalar y mantener.',
    icon: '🔧'
  }
];

const Features = () => {
  return (
    <section className="features">
      <h2>Nuestras Características</h2>
      <div className="features-container">
        {featuresData.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
