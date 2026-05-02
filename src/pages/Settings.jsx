import React, { useState } from 'react';

const Settings = () => {

  const [memberships, setMemberships] = useState({
    icaew: true,
    acca: true,
    isaca: true,
    cia: true
  });

  const [notifications, setNotifications] = useState({
    email: true,
    browser: false
  });

  const toggleMembership = (e, key) => {
    e.preventDefault();
    e.stopPropagation();
    setMemberships((prev) => {
      const updated = { ...prev, [key]: !prev[key] };
      return updated;
    });
  };

  const toggleNotification = (e, key) => {
    e.preventDefault();
    e.stopPropagation();
    setNotifications((prev) => {
      const updated = { ...prev, [key]: !prev[key] };
      return updated;
    });
  };

  return (
    <div className="screen active" id="screen-settings">
      <div style={{ maxWidth: '540px' }}>
        
        {/* Memberships */}
        <div className="settings-section">
          <div className="settings-title">Professional body memberships</div>
          
          <div className="membership-row" onClick={(e) => toggleMembership(e, 'icaew')} style={{ cursor: 'pointer' }}>
            <div>
              <div className="mem-body">ICAEW — ACA / FCA</div>
              <div className="mem-cycle">CPD year: Nov–Oct · Category 1 · 40 hrs</div>
            </div>
            <div className={`toggle ${memberships.icaew ? 'active' : ''}`}></div>
          </div>

          <div className="membership-row" onClick={(e) => toggleMembership(e, 'acca')} style={{ cursor: 'pointer' }}>
            <div>
              <div className="mem-body">ACCA</div>
              <div className="mem-cycle">CPD year: Jan–Dec · Unit route · 40 units</div>
            </div>
            <div className={`toggle ${memberships.acca ? 'active' : ''}`}></div>
          </div>

          <div className="membership-row" onClick={(e) => toggleMembership(e, 'isaca')} style={{ cursor: 'pointer' }}>
            <div>
              <div className="mem-body">ISACA — CISA</div>
              <div className="mem-cycle">CPD year: Jan–Dec · 20 annual / 120 rolling 3-yr</div>
            </div>
            <div className={`toggle ${memberships.isaca ? 'active' : ''}`}></div>
          </div>

          <div className="membership-row" onClick={(e) => toggleMembership(e, 'cia')} style={{ cursor: 'pointer' }}>
            <div>
              <div className="mem-body">CIA — IIA</div>
              <div className="mem-cycle">CPD year: Jan–Dec · 40 CPE hrs · 2 ethics</div>
            </div>
            <div className={`toggle ${memberships.cia ? 'active' : ''}`}></div>
          </div>

          <div 
            className="membership-row" 
            style={{ border: '1.5px dashed var(--border)', boxShadow: 'none', cursor: 'pointer' }} 
            onClick={() => alert('Add a new professional body membership')}
          >
            <div style={{ fontSize: '13px', color: 'var(--teal-600)', fontWeight: 500 }}>
              + Add professional body
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="settings-section">
          <div className="settings-title">Notifications</div>
          
          <div className="membership-row" onClick={(e) => toggleNotification(e, 'email')} style={{ cursor: 'pointer' }}>
            <div>
              <div className="mem-body">Email reminders</div>
              <div className="mem-cycle">90, 30, and 7 days before each deadline</div>
            </div>
            <div className={`toggle ${notifications.email ? 'active' : ''}`}></div>
          </div>

          <div className="membership-row" onClick={(e) => toggleNotification(e, 'browser')} style={{ cursor: 'pointer' }}>
            <div>
              <div className="mem-body">Browser push alerts</div>
              <div className="mem-cycle">Compliance alerts and missing ethics warnings</div>
            </div>
            <div className={`toggle ${notifications.browser ? 'active' : ''}`}></div>
          </div>
        </div>

        {/* Evidence Storage */}
        <div className="settings-section">
          <div className="settings-title">Evidence storage</div>
          <div className="storage-bar-wrap">
            <div className="storage-fill" style={{ width: '32%' }}></div>
          </div>
          <div className="storage-meta">320 MB used of 1 GB fair-use allowance</div>
        </div>

        {/* Subscription */}
        <div className="settings-section">
          <div className="settings-title">Subscription</div>
          <div className="membership-row">
            <div>
              <div className="mem-body">CPD_Repo Core</div>
              <div className="mem-cycle">Annual plan · renews 1 Jan 2027</div>
            </div>
            <span className="pill pill-teal" style={{ fontSize: '12px', padding: '4px 12px' }}>
              £9.99/yr
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Settings;