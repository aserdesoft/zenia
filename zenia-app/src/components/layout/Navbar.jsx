import React, { useState, useCallback } from "react";
import { NavLink } from "react-router-dom";
import logoZenia from "../../assets/logoZenia.png";
import "./styles/Navbar.css";

const Navbar = React.memo(function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header className="navbar-header">
      <nav className="navbar">
        <div className="nav-container">
          {/* Logo */}
          <NavLink to="/" className="nav-logo">
            <img 
              src={logoZenia} 
              alt="Zenia Logo" 
              className="nav-logo-img"
              width="120"
              height="40"
              loading="eager"
            />
          </NavLink>

          {/* Botón para celulares */}
          <button
            className="nav-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>

          {/* Menú de navegación */}
          <ul className={`nav-menu ${isMenuOpen ? "nav-menu-open" : ""}`}>
            <li>
              <NavLink 
                to="/farmacias" 
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                onClick={closeMenu}
              >
                Farmacias
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/comida" 
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                onClick={closeMenu}
              >
                Comida
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/funerales" 
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                onClick={closeMenu}
              >
                Servicios fúnebres
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/documentacion" 
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                onClick={closeMenu}
              >
                Documentación
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/esparcimiento" 
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                onClick={closeMenu}
              >
                Esparcimiento
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/sobre-nosotros" 
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                onClick={closeMenu}
              >
                Sobre Nosotros
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
});

export default Navbar;
