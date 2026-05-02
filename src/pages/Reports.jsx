import React, { useState } from 'react';

const Reports = () => {
  const [selectedReport, setSelectedReport] = useState('r-icaew');

  const reportOptions = [
    {
      id: 'r-icaew',
      label: 'ICAEW — annual CPD summary (Category 1)',
      desc: 'Structured declaration for ICAEW monitoring. Includes verifiable hours breakdown, ethics compliance, and evidence index.',
      title: 'Report preview — ICAEW 2025–26',
      stats: [
        { key: 'Member category', val: 'Category 1' },
        { key: 'Total CPD hours', val: '29 / 40' },
        { key: 'Verifiable hours', val: '24 / 30' },
        { key: 'Ethics requirement', val: '✓ Met', statusClass: 'preview-ok' },
        { key: 'Evidence files attached', val: '6 files' },
        { key: 'Audit readiness', val: '⚠ Incomplete — 11 hrs remaining', statusClass: 'preview-warn' }
      ]
    },
    {
      id: 'r-acca',
      label: 'ACCA — CPD unit declaration',
      desc: 'Unit-route breakdown with verifiable vs non-verifiable split and ethics sign-off. Ready for annual membership renewal.',
      title: 'Report preview — ACCA 2026',
      stats: [
        { key: 'Route', val: 'Unit route' },
        { key: 'Total CPD units', val: '40 / 40' },
        { key: 'Verifiable units', val: '21 / 21' },
        { key: 'Ethics requirement', val: '✓ Met', statusClass: 'preview-ok' },
        { key: 'Evidence files attached', val: '3 files' },
        { key: 'Audit readiness', val: '✓ Fully complete', statusClass: 'preview-ok' }
      ]
    },
    {
      id: 'r-isaca',
      label: 'ISACA — CPE audit pack (CISA)',
      desc: 'Annual + 3-year rolling CPE statement with full evidence bundle. Formatted for ISACA compliance verification.',
      title: 'Report preview — ISACA CISA 2026',
      stats: [
        { key: 'Certification', val: 'CISA' },
        { key: 'Annual CPE hours', val: '14 / 20' },
        { key: '3-year total hours', val: '100 / 120' },
        { key: 'Ethics requirement', val: '1 / 2 hours logged', statusClass: 'preview-warn' },
        { key: 'Evidence files attached', val: '2 files' },
        { key: 'Audit readiness', val: '⚠ At risk — 6 hrs remaining', statusClass: 'preview-danger' }
      ]
    },
    {
      id: 'r-cia',
      label: 'CIA — IIA CPE compliance report',
      desc: 'Full 40-hour CPE breakdown with 2-hour ethics verification. Structured for IIA member portal submission.',
      title: 'Report preview — CIA IIA 2026',
      stats: [
        { key: 'Certification', val: 'CIA' },
        { key: 'CPE hours', val: '35 / 40' },
        { key: 'Ethics requirement', val: '2 / 2 ✓ Met', statusClass: 'preview-ok' },
        { key: 'Evidence files attached', val: '2 files' },
        { key: 'Audit readiness', val: 'On track — 5 hrs remaining', statusClass: 'preview-ok' }
      ]
    },
    {
      id: 'r-all',
      label: 'Full multi-body audit pack (all bodies)',
      desc: 'Combined export across all your registered bodies. Includes all evidence, all declarations, single ZIP download.',
      title: 'Report preview — All bodies 2026',
      stats: [
        { key: 'Total CPD hours', val: '52 logged' },
        { key: 'Bodies tracked', val: '4 bodies' },
        { key: 'Ethics status', val: 'Met across all', statusClass: 'preview-ok' },
        { key: 'Evidence files attached', val: '6 files' },
        { key: 'Overall readiness', val: 'Mixed status — check individual profiles', statusClass: 'preview-warn' }
      ]
    }
  ];

  const activeReport = reportOptions.find((opt) => opt.id === selectedReport) || reportOptions;

  return (
    <div className="screen active" id="screen-reports">
      <div className="section-label mb-16">Select report type</div>
      
      {reportOptions.map((opt) => (
        <div 
          key={opt.id}
          id={opt.id} 
          className={`report-option ${selectedReport === opt.id ? 'sel' : ''}`} 
          onClick={() => setSelectedReport(opt.id)}
        >
          <div className="radio">
            {selectedReport === opt.id && <div className="radio-dot"></div>}
          </div>
          <div>
            <div className="report-label">{opt.label}</div>
            <div className="report-desc">{opt.desc}</div>
          </div>
        </div>
      ))}

      <div className="preview-box">
        <div className="preview-label" id="preview-title">{activeReport.title}</div>
        {activeReport.stats.map((stat, idx) => (
          <div className="preview-row" key={idx}>
            <span className="preview-key">{stat.key}</span>
            <span className={`preview-val ${stat.statusClass || ''}`}>
              {stat.val}
            </span>
          </div>
        ))}
      </div>

      <div className="export-btns">
        <button 
          className="btn btn-primary" 
          onClick={() => alert('Generating PDF report…\n\nIn production this downloads a formatted, body-specific PDF audit declaration.')}
        >
          Download PDF
        </button>
        <button 
          className="btn btn-secondary" 
          onClick={() => alert('Generating Excel export…\n\nIncludes activity log, hours breakdown, and evidence index in .xlsx format.')}
        >
          Export Excel
        </button>
        <button 
          className="btn btn-secondary" 
          onClick={() => alert('Generating full audit pack ZIP…\n\nBundles all evidence certificates + PDF report into a single download.')}
        >
          Export audit ZIP
        </button>
      </div>
    </div>
  );
};

export default Reports;