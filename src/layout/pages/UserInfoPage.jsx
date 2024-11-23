import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/userInfoPage.css";
import image from "../../assets/undraw_check_boxes_re_v40f.svg"

const UserInfoPage = () => {
  const [interests, setInterests] = useState({
    deporte: false,
    saludMental: false,
    productividad: false,
    bienestar: false,
  });

  // Recuperamos el nombre del usuario desde el localStorage
  const userName = localStorage.getItem("userName") || "Usuario"; // Por defecto 'Usuario' si no se encuentra

  const navigate = useNavigate();

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setInterests((prevInterests) => ({
      ...prevInterests,
      [name]: checked,
    }));
  };

  const isButtonDisabled = !Object.values(interests).includes(true);

  return (
    <div className="user-info-page">
      {/* Botón Regresar */}
      <button className="back-button" onClick={() => navigate(-1)}>
        Regresar
      </button>

      {/* Imagen central */}
      <div className="image-container">
        <img src={image} alt="Escoge tus intereses" />
      </div>

      {/* Texto de bienvenida con el nombre del usuario */}
      <h2 className="subtitulo">Bienvenid@, {userName}. ¿Qué te interesa descubrir?</h2>

      {/* Fila de casillas */}
      <div className="interests-container">
        <input
          type="checkbox"
          id="deporte"
          name="deporte"
          checked={interests.deporte}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="deporte">Deporte</label>

        <input
          type="checkbox"
          id="saludMental"
          name="saludMental"
          checked={interests.saludMental}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="saludMental">Salud Mental</label>

        <input
          type="checkbox"
          id="productividad"
          name="productividad"
          checked={interests.productividad}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="productividad">Productividad</label>

        <input
          type="checkbox"
          id="bienestar"
          name="bienestar"
          checked={interests.bienestar}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="bienestar">Bienestar</label>
      </div>

      {/* Botón Enviar */}
      <button
        className="submit-button"
        disabled={isButtonDisabled}
        onClick={() => navigate('/dashboard')} // Redirige al dashboard
      >
        Enviar
      </button>
    </div>
  );
};

export default UserInfoPage;
