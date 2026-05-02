import React, { useState } from 'react';

const EvidenceVault = () => {
  const [activeFilter, setActiveFilter] = useState('All evidence');

  const filters = ['All evidence', 'ICAEW', 'ACCA', 'ISACA', 'Ethics'];

  return (
    <div className="screen active" id="screen-vault">
      <div className="section-header">
        <div>
          <div className="section-label">Evidence vault</div>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '3px' }}>
            6 files · 887 KB used of 1 GB
          </div>
        </div>
        <button 
          className="btn btn-primary btn-sm" 
          onClick={() => alert('Generating bulk audit pack ZIP with all evidence files…')}
        >
          Bulk export audit pack
        </button>
      </div>

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

      <div className="vault-grid">
        <div className="vault-item">
          <div className="vault-file-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="3" y="1.5" width="14" height="17" rx="2" stroke="#0F6E56" strokeWidth="1.5" />
              <path d="M6 6.5h8M6 10h8M6 13.5h5" stroke="#0F6E56" strokeWidth="1.2" />
            </svg>
          </div>
          <div className="vault-name">ISACA_ethics_cert.pdf</div>
          <div className="vault-meta">12 Apr 2026 · 245 KB · ISACA</div>
          <div className="vault-verified">✓ Verified</div>
        </div>

        <div className="vault-item">
          <div className="vault-file-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="3" y="1.5" width="14" height="17" rx="2" stroke="#0F6E56" strokeWidth="1.5" />
              <path d="M6 6.5h8M6 10h8M6 13.5h5" stroke="#0F6E56" strokeWidth="1.2" />
            </svg>
          </div>
          <div className="vault-name">Fraud_webinar_cert.pdf</div>
          <div className="vault-meta">14 Apr 2026 · 180 KB · ICAEW, ACCA</div>
          <div className="vault-verified">✓ Verified</div>
        </div>

        <div className="vault-item">
          <div className="vault-file-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="2" y="2" width="16" height="16" rx="2" stroke="#0F6E56" strokeWidth="1.5" />
              <circle cx="7" cy="7.5" r="2" stroke="#0F6E56" strokeWidth="1.2" />
              <path d="M2 14l4-4 3 3 3-3 6 6" stroke="#0F6E56" strokeWidth="1.2" />
            </svg>
          </div>
          <div className="vault-name">ACCA_ethics_completion.jpg</div>
          <div className="vault-meta">18 Apr 2026 · 92 KB · ACCA</div>
          <div className="vault-verified">✓ Verified</div>
        </div>

        <div className="vault-item">
          <div className="vault-file-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="3" y="1.5" width="14" height="17" rx="2" stroke="#0F6E56" strokeWidth="1.5" />
              <path d="M6 6.5h8M6 10h8M6 13.5h5" stroke="#0F6E56" strokeWidth="1.2" />
            </svg>
          </div>
          <div className="vault-name">IIA_leadership_programme.pdf</div>
          <div className="vault-meta">22 Apr 2026 · 312 KB · CIA, ICAEW</div>
          <div className="vault-verified">✓ Verified</div>
        </div>

        <div className="vault-item">
          <div className="vault-file-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="3" y="1.5" width="14" height="17" rx="2" stroke="#0F6E56" strokeWidth="1.5" />
              <path d="M6 6.5h8M6 10h8M6 13.5h5" stroke="#0F6E56" strokeWidth="1.2" />
            </svg>
          </div>
          <div className="vault-name">CISA_selfstudy_log.pdf</div>
          <div className="vault-meta">25 Apr 2026 · 58 KB · ISACA</div>
          <div className="vault-verified">✓ Verified</div>
        </div>

        <div 
          className="vault-item add-new" 
          onClick={() => alert('File picker: upload certificate, PDF, or image evidence')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--teal-400)' }}>
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
            <line x1="12" y1="8" x2="12" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '8px' }}>
            Add evidence
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvidenceVault;