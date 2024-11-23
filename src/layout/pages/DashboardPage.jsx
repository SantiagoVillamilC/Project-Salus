import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/sideBar';
import Dashboard from '../components/dashboard';
import "../styles/dashboardPage.css";

const DashboardPage  = () => {
  
  return (
    <div>
      <Sidebar/>
      <Dashboard/>
    </div>
  );
};

export default DashboardPage ;