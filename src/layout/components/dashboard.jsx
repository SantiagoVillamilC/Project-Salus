import React, { useState } from "react";
import "../styles/dashboard.css";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

import clap from "../../assets/cinco-altos.png";
import equipo from "../../assets/equipo-de-deporte.png";
import sorpresa from "../../assets/sorprendido.png";
import yoga from "../../assets/postura-de-yoga.png"

// Registra los componentes necesarios de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Dashboard = () => {
  const userName = localStorage.getItem("userName") || "Usuario";

  const greetings = [
    "¡Bienvenid@ a un nuevo día lleno de oportunidades!",
    "¡Hola! ¿List@ para alcanzar tus metas hoy?",
    "¡Qué alegría verte por aquí! Vamos a hacerlo increíble.",
    "¡Es un buen día para un gran comienzo!",
    "¡Hola! Recuerda que cada pequeño esfuerzo cuenta.",
  ];

  const achievements = [
    "¡Hoy cumples 14 días seguidos de yoga! ¡Sigue así!",
    "¡Felicidades! Has completado 5 entrenamientos en esta semana.",
    "¡Increíble! Alcanzaste tu meta de 1000 pasos hoy.",
    "¡Impresionante! Has realizado 3 sesiones de meditación esta semana.",
    "¡Hoy es tu día 30 de ejercicio continuo! Sigue trabajando en tu bienestar.",
  ];

  const randomGreeting =
    greetings[Math.floor(Math.random() * greetings.length)];
  const randomAchievement =
    achievements[Math.floor(Math.random() * achievements.length)];
  const [tasksCount] = useState(5);

  // Datos para las gráficas
  const stepsData = {
    labels: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
    datasets: [
      {
        label: "Pasos diarios",
        data: [7000, 8000, 7500, 10000, 8500, 9000, 9500],
        backgroundColor: "#42A5F5",
      },
    ],
  };

  const caloriesData = {
    labels: ["Proteínas", "Carbohidratos", "Grasas"],
    datasets: [
      {
        data: [40, 35, 25],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const tasksData = {
    labels: ["Completadas", "Pendientes"],
    datasets: [
      {
        data: [3, 5],
        backgroundColor: ["#66BB6A", "#FF7043"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Oculta la leyenda
      },
      tooltip: {
        enabled: true, // Activa el tooltip al hover
      },
    },
    scales: {
      x: {
        display: false, // Oculta el eje X
      },
      y: {
        display: false, // Oculta el eje Y
      },
    },
  };


  return (
    <div className="dashboard">
      {/* Saludo */}
      <div className="greeting">
        <div className="greeting-text">
          <h1>{randomGreeting}</h1>
          <p>{randomAchievement}</p>
        </div>
        <div className="greeting-image">
          <img
            src={equipo}
            alt="Dame cinco"
            className="placeholder"
          />
        </div>
      </div>

      {/* Tareas */}
      <div className="tasks">
        <Pie data={tasksData} options={options} />
        <div>
          <h2>Tienes {tasksCount} tareas pendientes</h2>

          <button className="btn">Ver Tareas</button>
        </div>

      </div>

      {/* Premium */}
      <div className="premium">
        <h3>¿Quieres mejorar tu experiencia?</h3>
        <p>
          Conviértete en miembro premium y accede a contenido exclusivo,
          entrenamientos personalizados y más.
        </p>
        <img
          src={sorpresa}
          alt="Sorprendido"
          className="placeholder"
        />
        <button className="btn premium-btn">¡Lo quiero!</button>
      </div>

      {/* Resumen Diario */}
      <h2 className="daily-summary-title">Tu resumen diario</h2>
      <div className="summary-item large">
        <h3>Logros</h3>
        <p>Dale una revisada a tus logros</p>
        {/* <img
          src="https://via.placeholder.com/100"
          alt="Logros Placeholder"
          className="placeholder"
        /> */}
      </div>
      <div className="summary-item pasos">
        <h3>Pasos semanales</h3>
        <Bar data={stepsData} options={options} />
      </div>
      <div className="summary-item calorias">
        <h3>Calorías quemadas</h3>
        <Pie data={caloriesData} options={options} />
      </div>

      {/* Selección Personalizada */}
      <h2 className="personal-selection-title">Una selección solo para ti</h2>
      <div className="selection-item large">
        <div>
        <h3>Entrenamiento: Yoga para principiantes</h3>
          <p>Descubre cómo empezar tu camino hacia el bienestar físico y mental con este sencillo entrenamiento de yoga, ideal para aquellos que se inician en esta práctica.</p>
          <ul>
            <li>Mejora tu flexibilidad</li>
            <li>Reduce el estrés</li>
            <li>Aumenta tu concentración</li>
            <li>Ejercicios fáciles de seguir</li>
          </ul>
        </div>
        <img
          src={yoga}
          alt="Entrenamiento yoga"
          className="placeholder"
        />
      </div>

      <div className="selection-item receta">
        <h3>Receta: Ensalada de quinoa</h3>
      </div>
      <div className="selection-item ejercicio">
        <h3>Ejercicio: Plancha abdominal</h3>
      </div>

    </div>
  );
};

export default Dashboard;
