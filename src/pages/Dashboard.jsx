import React from 'react';

const Dashboard = () => {
  return (
    <div className="screen active" id="screen-dashboard">
      <div className="metric-grid">
        <div className="metric-card good">
          <div className="metric-label">Total hours logged</div>
          <div className="metric-value">52</div>
          <div className="metric-sub">across all bodies</div>
        </div>
        <div className="metric-card">
          <div className="metric-label">Bodies tracked</div>
          <div className="metric-value">4</div>
          <div className="metric-sub">ICAEW · ACCA · ISACA · CIA</div>
        </div>
        <div className="metric-card good">
          <div className="metric-label">Ethics hours</div>
          <div className="metric-value">6</div>
          <div className="metric-sub">all mandatory requirements</div>
        </div>
        <div className="metric-card warn">
          <div className="metric-label">Days to next deadline</div>
          <div className="metric-value">28</div>
          <div className="metric-sub">ICAEW · 31 Oct deadline</div>
        </div>
      </div>

      <div className="section-header">
        <span className="section-label">Professional body progress</span>
        <button 
          className="btn btn-secondary btn-sm" 
          onClick={() => console.log('Navigate to activity log')}
        >
          View all activity
        </button>
      </div>

      <div className="body-grid">
        {/* ICAEW Card */}
        <div className="body-card">
          <div className="body-header">
            <div>
              <div className="body-name">ICAEW — ACA</div>
              <div className="body-cycle">Nov–Oct cycle · Category 1</div>
            </div>
            <span className="pill pill-warn">28 days left</span>
          </div>

          <div className="prog-row">
            <span className="prog-label">Total hrs</span>
            <div className="prog-track">
              <div className="prog-fill fill-teal" style={{ width: '72%' }}></div>
            </div>
            <span className="prog-pct warn">29/40</span>
          </div>

          <div className="prog-row">
            <span className="prog-label">Verifiable</span>
            <div className="prog-track">
              <div className="prog-fill fill-purple" style={{ width: '80%' }}></div>
            </div>
            <span className="prog-pct warn">24/30</span>
          </div>

          <div className="prog-row">
            <span className="prog-label">Ethics</span>
            <div className="prog-track">
              <div className="prog-fill fill-green" style={{ width: '100%' }}></div>
            </div>
            <span className="prog-pct good">✓ Met</span>
          </div>
        </div>

        {/* ACCA Card */}
        <div className="body-card">
          <div className="body-header">
            <div>
              <div className="body-name">ACCA</div>
              <div className="body-cycle">Jan–Dec cycle · Unit route</div>
            </div>
            <span className="pill pill-ok">On track</span>
          </div>

          <div className="prog-row">
            <span className="prog-label">Total units</span>
            <div className="prog-track">
              <div className="prog-fill fill-green" style={{ width: '100%' }}></div>
            </div>
            <span className="prog-pct good">40/40</span>
          </div>

          <div className="prog-row">
            <span className="prog-label">Verifiable</span>
            <div className="prog-track">
              <div className="prog-fill fill-green" style={{ width: '100%' }}></div>
            </div>
            <span className="prog-pct good">21/21</span>
          </div>

          <div className="prog-row">
            <span className="prog-label">Ethics</span>
            <div className="prog-track">
              <div className="prog-fill fill-green" style={{ width: '100%' }}></div>
            </div>
            <span className="prog-pct good">✓ Met</span>
          </div>
        </div>

        {/* ISACA Card */}
        <div className="body-card">
          <div className="body-header">
            <div>
              <div className="body-name">ISACA — CISA</div>
              <div className="body-cycle">Jan–Dec · rolling 3-year</div>
            </div>
            <span className="pill pill-danger">⚠ 6 hrs missing</span>
          </div>

          <div className="prog-row">
            <span className="prog-label">Annual</span>
            <div className="prog-track">
              <div className="prog-fill fill-red" style={{ width: '70%' }}></div>
            </div>
            <span className="prog-pct danger">14/20</span>
          </div>

          <div className="prog-row">
            <span className="prog-label">3-yr total</span>
            <div className="prog-track">
              <div className="prog-fill fill-purple" style={{ width: '83%' }}></div>
            </div>
            <span className="prog-pct">100/120</span>
          </div>

          <div className="prog-row">
            <span className="prog-label">Ethics</span>
            <div className="prog-track">
              <div className="prog-fill fill-amber" style={{ width: '50%' }}></div>
            </div>
            <span className="prog-pct warn">1/2</span>
          </div>
        </div>

        {/* CIA Card */}
        <div className="body-card">
          <div className="body-header">
            <div>
              <div className="body-name">CIA — IIA</div>
              <div className="body-cycle">Jan–Dec cycle · 40 CPE hrs</div>
            </div>
            <span className="pill pill-ok">On track</span>
          </div>

          <div className="prog-row">
            <span className="prog-label">CPE hours</span>
            <div className="prog-track">
              <div className="prog-fill fill-teal" style={{ width: '88%' }}></div>
            </div>
            <span className="prog-pct">35/40</span>
          </div>

          <div className="prog-row">
            <span className="prog-label">Ethics</span>
            <div className="prog-track">
              <div className="prog-fill fill-green" style={{ width: '100%' }}></div>
            </div>
            <span className="prog-pct good">2/2 ✓</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;