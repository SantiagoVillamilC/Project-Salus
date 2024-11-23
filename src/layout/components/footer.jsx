import React from "react";
import "../styles/Footer.css";
import { FaInstagram, FaFacebook, FaWhatsapp, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h2 className="footer-title">ProjectSalus</h2>
        <div className="social-media">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} />
          </a>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={30} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
        </div>
      </div>
      <div className="footer-right">
        <ul className="footer-links">
          <li><a href="#home">Inicio</a></li>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#about">Nosotros</a></li>
          <li><a href="#plans">Planes & Precios</a></li>
        </ul>
      </div>
      <hr className="footer-separator" />
      <div className="footer-bottom">
        <p className="footer-copyright">© 2024, Project Salus</p>
        <a href="#terms" className="footer-terms">Términos de servicio</a>
      </div>
    </footer>
  );
};

export default Footer;
