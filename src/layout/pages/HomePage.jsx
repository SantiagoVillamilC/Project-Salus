import React from "react";
import HeaderComponent from "../components/header";
import HeroSection from "../components/herosection";
import ServicesSection from "../components/servicessection";
import AboutSection from "../components/aboutsection";
import PlansSection from "../components/planssection";
import Footer from "../components/footer";
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      {/* Header */}
      <HeaderComponent />

      {/* Hero Section */}
      <HeroSection />

      {/* SVG Separator */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#14D4F4"
          fillOpacity="1"
          d="M0,128L30,133.3C60,139,120,149,180,138.7C240,128,300,96,360,74.7C420,53,480,43,540,74.7C600,107,660,181,720,197.3C780,213,840,171,900,165.3C960,160,1020,192,1080,208C1140,224,1200,224,1260,208C1320,192,1380,160,1410,144L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>

      {/* Services Section */}
      <ServicesSection />

      {/* About Section */}
      <AboutSection />

      {/* Plans Section */}
      <PlansSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
