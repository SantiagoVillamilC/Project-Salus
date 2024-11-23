import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importar react-router-dom
import HomePage from './layout/pages/HomePage'; // Página principal
import UserInfoPage from './layout/pages/UserInfoPage'; // Página de recolección de datos
import DashboardPage from './layout/pages/DashboardPage'; // Página después de login
import NotFoundPage from './layout/pages/NotFoundPage'; // Página 404
import HeaderComponent from './layout/components/header'; // Componente de header

function App() {
  return (
    <Router>
      {/* <HeaderComponent /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user-info" element={<UserInfoPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
