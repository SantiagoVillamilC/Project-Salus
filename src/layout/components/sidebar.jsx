import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/sidebar.css";
import userImage from "../../assets/hombre.png"

const Sidebar = () => {
  // Recuperamos el nombre del usuario desde el localStorage
  const userName = localStorage.getItem("userName") || "Usuario";

  const navigate = useNavigate();

  return (
    <div className="sidebar">
      {/* Imagen del usuario */}
      <img src={userImage} alt="Imagen de usuario" />

      {/* Nombre del usuario */}
      <div className="username">{userName}</div>

      {/* Menú con enlaces */}
      <div className="menu">
        <h3>Menú Principal</h3>
        <ul>
          <li>
            <a href="#home" className="active" onClick={() => navigate("/")}>Inicio</a>
          </li>
          <li>
            <a href="#deportes" onClick={() => navigate("/deportes")}>Deportes</a>
            {/* Submenú de deportes */}
            <ul className="submenu">
              <li><a href="#entrenamientos" onClick={() => navigate("/entrenamientos")}>Entrenamientos</a></li>
              <li><a href="#equipos" onClick={() => navigate("/equipos")}>Equipos</a></li>
              <li><a href="#eventos" onClick={() => navigate("/eventos")}>Eventos</a></li>
            </ul>
          </li>
          <li>
            <a href="#saludMental" onClick={() => navigate("/salud-mental")}>Salud</a>
            {/* Submenú de salud */}
            <ul className="submenu">
              <li><a href="#meditacion" onClick={() => navigate("/meditacion")}>Meditación</a></li>
              <li><a href="#mindfulness" onClick={() => navigate("/mindfulness")}>Mindfulness</a></li>
            </ul>
          </li>
          <li>
            <a href="#productividad" onClick={() => navigate("/productividad")}>Productividad</a>
            {/* Submenú de productividad */}
            <ul className="submenu">
              <li><a href="#rutinas" onClick={() => navigate("/rutinas")}>Rutinas</a></li>
              <li><a href="#metas" onClick={() => navigate("/metas")}>Metas</a></li>
            </ul>
          </li>
          <li>
            <a href="#bienestar" onClick={() => navigate("/bienestar")}>Bienestar</a>
            {/* Submenú de bienestar */}
            <ul className="submenu">
              <li><a href="#relajacion" onClick={() => navigate("/relajacion")}>Relajación</a></li>
              <li><a href="#alimentacion" onClick={() => navigate("/alimentacion")}>Alim. Saludable</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
