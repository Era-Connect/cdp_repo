import React from 'react';
import { useNavigate, useLocation } from 'react-router';
import { routePaths } from '../config/routePaths';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Helper to determine if the route matches exactly
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-mark">CPD_Repo</div>
        <div className="logo-sub">Compliance dashboard</div>
      </div>

      <div className="nav-section-label">Main</div>
      
      <div 
        onClick={() => navigate(routePaths.index)} 
        className={`nav-item ${isActive(routePaths.index) ? 'active' : ''}`}
        style={{ cursor: 'pointer' }}
      >
        <svg className="nav-icon" viewBox="0 0 16 16" fill="none">
          <rect x="1" y="1" width="6" height="6" rx="1.5" fill="white" opacity="0.85" />
          <rect x="9" y="1" width="6" height="6" rx="1.5" fill="white" opacity="0.85" />
          <rect x="1" y="9" width="6" height="6" rx="1.5" fill="white" opacity="0.85" />
          <rect x="9" y="9" width="6" height="6" rx="1.5" fill="white" opacity="0.4" />
        </svg>
        Dashboard
      </div>

      <div 
        onClick={() => navigate(routePaths.logCPDActivity)} 
        className={`nav-item ${isActive(routePaths.logCPDActivity) ? 'active' : ''}`}
        style={{ cursor: 'pointer' }}
      >
        <svg className="nav-icon" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="6.5" stroke="white" strokeWidth="1.4" opacity="0.85" />
          <line x1="8" y1="5" x2="8" y2="11" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="5" y1="8" x2="11" y2="8" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        Log CPD activity
      </div>

      <div 
        onClick={() => navigate(routePaths.activityLog)}
        className={`nav-item ${isActive(routePaths.activityLog) ? 'active' : ''}`}
        style={{ cursor: 'pointer' }}
      >
        <svg className="nav-icon" viewBox="0 0 16 16" fill="none">
          <rect x="2" y="1.5" width="12" height="13" rx="2" stroke="white" strokeWidth="1.4" opacity="0.85" />
          <line x1="5" y1="5.5" x2="11" y2="5.5" stroke="white" strokeWidth="1.2" />
          <line x1="5" y1="8.5" x2="11" y2="8.5" stroke="white" strokeWidth="1.2" />
          <line x1="5" y1="11.5" x2="8.5" y2="11.5" stroke="white" strokeWidth="1.2" />
        </svg>
        Activity log
      </div>

      <div className="nav-section-label">Compliance</div>

      <div 
        onClick={() => navigate(routePaths.alerts)} 
        className={`nav-item ${isActive(routePaths.alerts) ? 'active' : ''}`}
        style={{ cursor: 'pointer' }}
      >
        <svg className="nav-icon" viewBox="0 0 16 16" fill="none">
          <path d="M8 1.5L14.5 13H1.5L8 1.5Z" stroke="white" strokeWidth="1.4" opacity="0.85" />
          <line x1="8" y1="6" x2="8" y2="9.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="8" cy="11" r="0.8" fill="white" />
        </svg>
        Alerts
        <span className="nav-badge">3</span>
      </div>

      <div
        onClick={() => navigate(routePaths.reports)} 
        className={`nav-item ${isActive(routePaths.reports) ? 'active' : ''}`}
        style={{ cursor: 'pointer' }}
      >
        <svg className="nav-icon" viewBox="0 0 16 16" fill="none">
          <rect x="2.5" y="1" width="11" height="14" rx="2" stroke="white" strokeWidth="1.4" opacity="0.85" />
          <line x1="5.5" y1="5" x2="10.5" y2="5" stroke="white" strokeWidth="1.2" />
          <line x1="5.5" y1="8" x2="10.5" y2="8" stroke="white" strokeWidth="1.2" />
          <line x1="5.5" y1="11" x2="8.5" y2="11" stroke="white" strokeWidth="1.2" />
        </svg>
        Reports
      </div>

      <div 
        onClick={() => navigate(routePaths.evidenceVault)} 
        className={`nav-item ${isActive(routePaths.evidenceVault) ? 'active' : ''}`}
        style={{ cursor: 'pointer' }}
      >
        <svg className="nav-icon" viewBox="0 0 16 16" fill="none">
          <rect x="2" y="4" width="12" height="10" rx="2" stroke="white" strokeWidth="1.4" opacity="0.85" />
          <path d="M5 4V3a3 3 0 0 1 6 0v1" stroke="white" strokeWidth="1.4" />
          <circle cx="8" cy="9" r="2" stroke="white" strokeWidth="1.2" />
        </svg>
        Evidence vault
      </div>

      <div className="nav-section-label">Account</div>

      <div 
        onClick={() => navigate(routePaths.settings)} 
        className={`nav-item ${isActive(routePaths.settings) ? 'active' : ''}`}
        style={{ cursor: 'pointer' }}
      >
        <svg className="nav-icon" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="2.5" stroke="white" strokeWidth="1.3" opacity="0.85" />
          <path d="M8 1v2M8 13v2M1 8h2M13 8h2M2.93 2.93l1.41 1.41M11.66 11.66l1.41 1.41M2.93 13.07l1.41-1.41M11.66 4.34l1.41-1.41" stroke="white" strokeWidth="1.3" strokeLinecap="round" opacity="0.6" />
        </svg>
        Settings
      </div>

      <div className="sidebar-footer">
        <div className="user-name">Alex Morgan</div>
        <div className="plan-pill">Core · £9.99/yr</div>
      </div>
    </nav>
  );
};

export default Sidebar;