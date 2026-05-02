import React from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../components/sidebar';

const DashLayout = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <div className="topbar">
          <div>
            <div className="page-title" id="page-title">Dashboard</div>
            <div className="page-sub" id="page-sub">CPD year 2025–2026 · 4 bodies tracked</div>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button 
              className="btn btn-secondary btn-sm" 
              onClick={() => console.log('Navigate to reports')}
            >
              Generate report
            </button>
            <button 
              className="btn btn-primary btn-sm" 
              onClick={() => console.log('Navigate to add')}
            >
              + Log activity
            </button>
          </div>
        </div>

        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashLayout;