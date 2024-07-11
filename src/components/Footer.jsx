import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#features">Características</a></li>
            <li><a href="#contacto">Contacto</a></li>
            <li><a href="#about">Sobre Nosotros</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contacto</h3>
          <p>Email: info@panelessolares.com</p>
          <p>Teléfono: +123 456 789</p>
          <p>Dirección: Calle Falsa 123, Ciudad</p>
        </div>
        <div className="footer-column">
          <h3>Síguenos</h3>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Paneles Solares. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
