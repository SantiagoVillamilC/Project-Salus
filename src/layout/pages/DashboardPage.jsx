import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
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