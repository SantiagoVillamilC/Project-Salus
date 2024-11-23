import React from "react";
import "../styles/PlansSection.css";
import check from "../../assets/cheque.png"

const PlansSection = () => {
  return (
    <section className="plans-section">
      <h1 className="plans-title">Escoge tu plan</h1>
      <p className="plans-subtitle">Desbloquea infinitas posibilidades</p>
      <div className="plans-container">
        <div className="plan-card">
          <h3 className="plan-name">Gratis</h3>
          <p className="plan-description">Ideal para iniciarte y explorar nuestras herramientas básicas.</p>
          <p className="plan-price">COP 0</p>
          <ul className="plan-benefits">
            <li><img src={check} alt="check" className="check-icon" /> Acceso a rutinas básicas</li>
            <li><img src={check} alt="check" className="check-icon" /> Seguimiento diario</li>
            <li><img src={check} alt="check" className="check-icon" /> Soporte limitado</li>
            <li><img src={check} alt="check" className="check-icon" /> Planificación semanal</li>
            <li><img src={check} alt="check" className="check-icon" /> Comunidad de usuarios</li>
          </ul>
        </div>
        <div className="plan-card popular">
          <div className="popular-label">Popular</div>
          <h3 className="plan-name">Premium</h3>
          <p className="plan-description">Perfecto para usuarios que buscan maximizar resultados.</p>
          <p className="plan-price">COP 49,900</p>
          <ul className="plan-benefits">
            <li><img src={check} alt="check" className="check-icon" /> Rutinas personalizadas</li>
            <li><img src={check} alt="check" className="check-icon" /> Acceso a todas las herramientas</li>
            <li><img src={check} alt="check" className="check-icon" /> Asistencia 24/7</li>
            <li><img src={check} alt="check" className="check-icon" /> Análisis detallado de progreso</li>
            <li><img src={check} alt="check" className="check-icon" /> Contenido exclusivo</li>
          </ul>
        </div>
        <div className="plan-card">
          <h3 className="plan-name">Familiar</h3>
          <p className="plan-description">Comparte la experiencia con toda tu familia.</p>
          <p className="plan-price">COP 79,900</p>
          <ul className="plan-benefits">
            <li><img src={check} alt="check" className="check-icon" /> Cuentas para hasta 5 miembros</li>
            <li><img src={check} alt="check" className="check-icon" /> Estadísticas grupales</li>
            <li><img src={check} alt="check" className="check-icon" /> Soporte prioritario</li>
            <li><img src={check} alt="check" className="check-icon" /> Actividades colaborativas</li>
            <li><img src={check} alt="check" className="check-icon" /> Planes compartidos</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
