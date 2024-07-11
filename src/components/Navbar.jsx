import React, { useState } from "react";
import "./NavBar.css"; // Importar archivo CSS

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
    
      return (
        <header className="navbar">
          <div className="navbar-container">
            <div className="logo">Paneles Solares</div>
            <div className="menu-icon" onClick={toggleMenu}>
              &#9776;
            </div>
            <nav className={`menu ${isMenuOpen ? 'active' : ''}`}>
              <ul>
                <li><a href="#productos">Productos</a></li>
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#contacto">Contacto</a></li>
              </ul>
            </nav>
          </div>
        </header>
  );
};

export default Navbar;
