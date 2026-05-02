import React, { useState } from 'react';

const ActivityLog = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = [
    'All', 'ICAEW', 'ACCA', 'ISACA', 'CIA', 'Ethics only', 'Verifiable'
  ];

  return (
    <div className="screen active" id="screen-log">
      <div className="filter-row">
        {filters.map((filter) => (
          <div
            key={filter}
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </div>
        ))}
      </div>

      <div className="entry-list">
        {/* Entry 1 */}
        <div className="entry-row">
          <div className="entry-icon ei-teal">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="7" stroke="#0F6E56" strokeWidth="1.5" />
              <path d="M6 9.5l2 2L12 7" stroke="#0F6E56" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <div className="entry-title">ISACA ethics and professional conduct module</div>
            <div className="entry-meta">12 Apr 2026 · ISACA Learning · Verifiable</div>
          </div>
          <div className="entry-right">
            <div className="entry-hrs">2 hrs</div>
            <div className="mini-tags">
              <span className="mini-tag mt-teal">Ethics</span>
              <span className="mini-tag mt-purple">Verifiable</span>
            </div>
          </div>
        </div>

        {/* Entry 2 */}
        <div className="entry-row">
          <div className="entry-icon ei-purple">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="2" y="2" width="14" height="14" rx="3" stroke="#534AB7" strokeWidth="1.5" />
              <path d="M5 9h8M5 6.5h8M5 11.5h5" stroke="#534AB7" strokeWidth="1.2" />
            </svg>
          </div>
          <div>
            <div className="entry-title">Fraud risk in the public sector — webinar</div>
            <div className="entry-meta">14 Apr 2026 · Deloitte Academy · ICAEW, ACCA</div>
          </div>
          <div className="entry-right">
            <div className="entry-hrs">3 hrs</div>
            <div className="mini-tags">
              <span className="mini-tag mt-teal">Technical</span>
              <span className="mini-tag mt-purple">Verifiable</span>
            </div>
          </div>
        </div>

        {/* Entry 3 */}
        <div className="entry-row">
          <div className="entry-icon ei-teal">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 2L10.8 6.8H16L11.6 9.6L13.1 14.5L9 11.7L4.9 14.5L6.4 9.6L2 6.8H7.2Z" stroke="#0F6E56" strokeWidth="1.5" fill="none" />
            </svg>
          </div>
          <div>
            <div className="entry-title">ACCA ethics module — annual refresher</div>
            <div className="entry-meta">18 Apr 2026 · ACCA Learning · ACCA</div>
          </div>
          <div className="entry-right">
            <div className="entry-hrs">4 hrs</div>
            <div className="mini-tags">
              <span className="mini-tag mt-teal">Ethics</span>
            </div>
          </div>
        </div>

        {/* Entry 4 */}
        <div className="entry-row">
          <div className="entry-icon ei-green">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="2" y="2.5" width="14" height="13" rx="2.5" stroke="#639922" strokeWidth="1.5" />
              <path d="M5 7h8M5 10h8M5 13h5" stroke="#639922" strokeWidth="1.2" />
            </svg>
          </div>
          <div>
            <div className="entry-title">Internal audit leadership programme</div>
            <div className="entry-meta">22 Apr 2026 · IIA UK · CIA, ICAEW</div>
          </div>
          <div className="entry-right">
            <div className="entry-hrs">8 hrs</div>
            <div className="mini-tags">
              <span className="mini-tag mt-green">Leadership</span>
              <span className="mini-tag mt-purple">Verifiable</span>
            </div>
          </div>
        </div>

        {/* Entry 5 */}
        <div className="entry-row">
          <div className="entry-icon ei-purple">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 5h12M3 9h12M3 13h7" stroke="#534AB7" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <div className="entry-title">Cybersecurity risk management — CISA self-study</div>
            <div className="entry-meta">25 Apr 2026 · Self-directed · ISACA</div>
          </div>
          <div className="entry-right">
            <div className="entry-hrs">5 hrs</div>
            <div className="mini-tags">
              <span className="mini-tag mt-teal">Technical</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityLog;