import React from "react";
import "../styles/ServicesSection.css";
import bienestar from "../../assets/bienestar-fisico.png"
import mental from "../../assets/salud-mental.png"
import tiempo from "../../assets/rutina-diaria.png"
import progreso from "../../assets/avance.png"

const ServicesSection = () => {
  const services = [
    {
      logo: bienestar,
      title: "Bienestar Físico",
      description:
        "Rutinas y ejercicios personalizados para mantenerte activo desde cualquier lugar.",
    },
    {
      logo: mental,
      title: "Salud Mental",
      description:
        "Técnicas de relajación y meditaciones guiadas para un equilibrio emocional.",
    },
    {
      logo: tiempo,
      title: "Gestión de Tiempo",
      description:
        "Herramientas para optimizar tus días y alcanzar tus metas con eficiencia.",
    },
    {
      logo: progreso,
      title: "Análisis de Progreso",
      description:
        "Monitorea tu desarrollo con reportes personalizados y motivadores.",
    },
  ];

  return (
    <section className="services-section">
      <h2 className="services-title">Servicios</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-header">
              <img src={service.logo} alt={service.title} className="service-logo" />
              <h3 className="service-title">{service.title}</h3>
            </div>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
