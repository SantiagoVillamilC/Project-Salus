import React from "react";
import "../styles/header.css"

const HeaderComponent = () => {
  return (
    <header className="header">
      <div className="logo">ProjectSalus.</div>
      <nav className="nav-links">
        <a href="#services">Servicios</a>
        <a href="#about">Nosotros</a>
        <a href="#plans">Planes</a>
      </nav>
      <div className="icon">
        <span role="img" aria-label="happy-face">😊</span>
      </div>
    </header>
  );
};

export default HeaderComponent;
