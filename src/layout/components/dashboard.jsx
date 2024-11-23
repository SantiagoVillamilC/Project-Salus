import React, { useState, useEffect } from "react";
import "../styles/dashboard.css";

const Dashboard = () => {
  // Recuperando el nombre del usuario desde el localStorage
  const userName = localStorage.getItem("userName") || "Usuario";

  // Listado de frases para felicitar al usuario
  const achievements = [
    "¡Hoy cumples 14 días seguidos de yoga! ¡Sigue así!",
    "¡Felicidades! Has completado 5 entrenamientos en esta semana.",
    "¡Increíble! Alcanzaste tu meta de 1000 pasos hoy.",
    "¡Impresionante! Has realizado 3 sesiones de meditación esta semana.",
    "¡Hoy es tu día 30 de ejercicio continuo! Sigue trabajando en tu bienestar."
  ];

  // Elegir una frase aleatoria
  const randomAchievement = achievements[Math.floor(Math.random() * achievements.length)];

  // Tareas (puedes modificar esto según tus necesidades)
  const [tasksCount, setTasksCount] = useState(5); // Aquí puedes traer el número real de tareas.

  return (
    <div className="dashboard">
      {/* Fila 1: Saludo al usuario */}
      <div className="row greeting">
        <div className="col">
          <h1>Hola, {userName} 👋</h1>
          <p>{randomAchievement}</p>
        </div>
      </div>

      {/* Fila 2: Tareas y sección de premium */}
      <div className="row tasks-row">
        <div className="col tasks">
          <h2>Tienes {tasksCount} tareas pendientes</h2>
          <button className="btn" onClick={() => alert("Ver tareas")}>Ver Tareas</button>
        </div>

        <div className="col premium">
          <h3>¿Quieres mejorar tu experiencia?</h3>
          <p>Conviértete en miembro premium y accede a contenido exclusivo, entrenamientos personalizados y más.</p>
          <button className="btn premium-btn">¡Lo quiero!</button>
        </div>
      </div>

      {/* Fila 3: Resumen diario */}
      <div className="row daily-summary">
        <h2>Tu resumen diario</h2>
        <div className="col summary-item large">
          <h3>Logros</h3>
          <p>Ejemplo de logros del día</p>
        </div>
        <div className="col summary-item">
          <h3>Pasos</h3>
          <p>10,000 pasos</p>
        </div>
        <div className="col summary-item">
          <h3>Calorías quemadas</h3>
          <p>500 Cal</p>
        </div>
      </div>

      {/* Fila 4: Selección personalizada */}
      <div className="row personal-selection">
        <h2>Una selección solo para ti</h2>
        <div className="col selection-item large">
          <h3>Entrenamiento: Yoga para principiantes</h3>
        </div>
        <div className="col selection-item">
          <h3>Receta: Ensalada de quinoa</h3>
        </div>
        <div className="col selection-item">
          <h3>Ejercicio: Plancha abdominal</h3>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
