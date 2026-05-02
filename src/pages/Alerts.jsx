import React from 'react';

const Alerts = () => {
  return (
    <div className="screen active" id="screen-alerts">
      <div className="section-label mb-16">3 issues need your attention</div>
      
      <div className="alert-list">
        <div className="alert-item alert-danger">
          <div className="alert-dot dot-red"></div>
          <div className="alert-body">
            <div className="alert-title">ISACA — CISA: annual CPE requirement at risk</div>
            <div className="alert-msg">You have logged 14 of 20 required CPE hours. 6 hours remaining before the 31 December deadline. At your current pace you will fall short by approximately 4 hours.</div>
          </div>
        </div>

        <div className="alert-item alert-danger">
          <div className="alert-dot dot-red"></div>
          <div className="alert-body">
            <div className="alert-title">ISACA — ethics CPE incomplete</div>
            <div className="alert-msg">Only 1 of 2 mandatory ethics CPE hours logged for ISACA. Log at least 1 more ethics-tagged activity to meet the annual ethics requirement.</div>
          </div>
        </div>

        <div className="alert-item alert-warn">
          <div className="alert-dot dot-amber"></div>
          <div className="alert-body">
            <div className="alert-title">ICAEW — 28 days until CPD year closes (31 Oct)</div>
            <div className="alert-msg">Your ICAEW CPD year ends in 28 days. You need 11 more hours (6 verifiable) to reach the Category 1 minimum of 40 hours with 30 verifiable.</div>
          </div>
        </div>

        <div className="alert-item alert-info">
          <div className="alert-dot dot-purple"></div>
          <div className="alert-body">
            <div className="alert-title">CIA — annual CPE declaration due 31 Dec</div>
            <div className="alert-msg">You have logged 35 of 40 required CPE hours. 5 hours remaining. On current pace you are expected to complete comfortably before the deadline.</div>
          </div>
        </div>
      </div>

      <div className="alert-cta">
        <button 
          className="btn btn-primary" 
          onClick={() => console.log('Navigate to log activity')}
        >
          Log CPD activity
        </button>
        <button 
          className="btn btn-secondary" 
          onClick={() => console.log('Navigate to generate report')}
        >
          Generate audit pack
        </button>
      </div>
    </div>
  );
};

export default Alerts;