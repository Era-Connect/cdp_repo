import React, { useState } from 'react';

const CPDLog = () => {
  // ── State for UI Toggles ──
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedTags, setSelectedTags] = useState(['Verifiable']);
  const [selectedBodies, setSelectedBodies] = useState(['ICAEW', 'ACCA']);

  // ── Options Lists ──
  const availableTags = ['Ethics', 'Technical', 'Leadership', 'Regulatory', 'Verifiable'];
  const availableBodies = ['ICAEW', 'ACCA', 'ISACA', 'CIA', 'CIPFA'];

  // ── Handler Functions ──
  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const toggleBody = (body) => {
    setSelectedBodies((prev) =>
      prev.includes(body) ? prev.filter((b) => b !== body) : [...prev, body]
    );
  };

  const handleSave = () => {
    setShowSuccess(true);
    // Hide banner after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="screen active" id="screen-add">
      <div className="card" style={{ maxWidth: '580px' }}>
        
        {showSuccess && (
          <div id="success-banner" className="success-banner" style={{ display: 'block' }}>
            ✓ CPD activity logged and mapped to your selected bodies. Evidence added to vault.
          </div>
        )}

        <div className="card-title">New CPD activity</div>
        <div className="form-grid">
          <div className="form-group form-full">
            <label className="form-label">Activity title</label>
            <input className="form-input" id="f-title" type="text" placeholder="e.g. Fraud risk webinar — Deloitte Academy" />
          </div>
          <div className="form-group">
            <label className="form-label">Provider / organiser</label>
            <input className="form-input" id="f-provider" type="text" placeholder="Provider name" />
          </div>
          <div className="form-group">
            <label className="form-label">Date</label>
            <input className="form-input" id="f-date" type="date" defaultValue="2026-04-30" />
          </div>
          <div className="form-group">
            <label className="form-label">Duration (hours)</label>
            <input className="form-input" id="f-hours" type="number" placeholder="e.g. 2" min="0.5" step="0.5" />
          </div>
          <div className="form-group">
            <label className="form-label">Activity type</label>
            <select className="form-select" id="f-type">
              <option>Training / course</option>
              <option>Webinar</option>
              <option>Conference</option>
              <option>Self-directed reading</option>
              <option>Mentoring / coaching</option>
              <option>On-the-job learning</option>
            </select>
          </div>
        </div>

        <div className="form-label mb-16" style={{ marginBottom: '8px' }}>Tags</div>
        <div className="tag-row">
          {availableTags.map((tag) => (
            <div
              key={tag}
              className={`tag ${selectedTags.includes(tag) ? 'sel' : ''}`}
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </div>
          ))}
        </div>

        <div className="form-label" style={{ marginBottom: '8px' }}>Apply to professional bodies</div>
        <div className="body-checks">
          {availableBodies.map((body) => {
            const isSelected = selectedBodies.includes(body);
            return (
              <div
                key={body}
                className={`body-check ${isSelected ? 'sel' : ''}`}
                onClick={() => toggleBody(body)}
              >
                {isSelected ? `☑ ${body}` : `☐ ${body}`}
              </div>
            );
          })}
        </div>

        <div 
          className="upload-zone" 
          onClick={() => alert('File picker: upload PDF certificate or image evidence')}
        >
          <svg className="upload-icon" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M11 3v12M7 7l4-4 4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="3" y="16" width="16" height="3" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
          </svg>
          Upload certificate or evidence (PDF, JPG, PNG)
        </div>

        <button 
          className="btn btn-primary" 
          style={{ width: '100%', justifyContent: 'center' }} 
          onClick={handleSave}
        >
          Save CPD activity
        </button>
      </div>
    </div>
  );
};

export default CPDLog;