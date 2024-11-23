import React from "react";
import "../styles/AboutSection.css";
import image from "../../assets/undraw_relaxation_re_ohkx.svg"

const AboutSection = () => {
    return (
        <section className="about-section">
            <div className="about-container">
                <div className="about-content">
                    <h2 className="about-title">Nosotros</h2>
                    <p className="about-paragraph">
                        En Project Salus, creemos que el bienestar es el equilibrio entre cuerpo, mente y metas personales. Nuestra plataforma está diseñada para ayudarte a alcanzar ese equilibrio a través de herramientas innovadoras que combinan actividad física, salud mental y productividad, ya sea que busques mejorar tu condición física, encontrar momentos de relajación o maximizar tu tiempo, estamos aquí para acompañarte en cada paso del camino.
                    </p>
                </div>
                <div className="about-image-container">
                    <img
                        src={image}
                        alt="Sobre nosotros "
                        className="about-image"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
