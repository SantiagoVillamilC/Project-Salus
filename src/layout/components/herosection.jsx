import React, { useState, useEffect } from "react";
import "../styles/herosection.css";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  // Estado para manejar el valor del nombre
  const [name, setName] = useState("");

  // Efecto para almacenar el nombre en el localStorage cuando cambia
  useEffect(() => {
    if (name) {
      localStorage.setItem("userName", name); // Guardar el nombre en el localStorage
    }
  }, [name]); // Solo se ejecuta cuando 'name' cambia

  // Función para manejar el cambio en el campo de texto
  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <section className="hero-section">
      <p className="small-text">Tu aliado #1 en bienestar y productividad</p>
      <h1 className="main-heading">Relájate y transforma tu vida</h1>
      <p className="normal-text">Con herramientas diseñadas para tu cuerpo, mente y metas.</p>
      <div className="input-container">
        <input
          type="text"
          placeholder="Dinos tu nombre y empieza ya"
          className="name-input"
          value={name}  // Vincular el valor del input con el estado
          onChange={handleChange}  // Actualizar el estado cuando cambia el valor
        />
        <Link to="/user-info">
          <button
            className={`ready-button ${!name ? 'disabled' : ''}`}  // Aplicar clase 'disabled' si el campo está vacío
            disabled={!name}  // Deshabilitar el botón si el campo está vacío
          >
            Listo
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
