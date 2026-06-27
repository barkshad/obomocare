import React from 'react';

export const Budget: React.FC = () => {
  const lines = [
    { name: 'Food support packages (1,500 households × 24 months)', pct: '60%', amt: 'USD 1,080,000', width: '60%' },
    { name: 'Personal care and hygiene supply kits', pct: '14%', amt: 'USD 252,000', width: '14%' },
    { name: 'Transport facilitation fund', pct: '6%', amt: 'USD 108,000', width: '6%' },
    { name: 'Volunteer stipends (40 caregivers × 24 months)', pct: '7.5%', amt: 'USD 134,400', width: '7.5%' },
    { name: 'Administration and staffing (below 15% of total)', pct: '8%', amt: 'USD 143,440', width: '8%' },
    { name: 'Digital coordination system + outreach + contingency', pct: '4.5%', amt: 'USD 83,857', width: '4.5%' },
  ];

  return (
    <div className="section" style={{ background: 'var(--surface-primary)', paddingTop: '6rem' }}>
      <div className="container">
        <div className="features-head" style={{ textAlign: 'center' }}>
          <div className="features-head__tag">Budget</div>
          <h1 style={{ fontSize: 'var(--text-5xl)', fontWeight: 700, color: '#fff', marginBottom: 'var(--space-4)' }}>
            USD 1,801,697 over 24 months
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '48ch', marginInline: 'auto', lineHeight: 1.7 }}>
            OBOMOCARE has operated for five years without a single dollar of international funding. We ask to be supported to scale what already works.
          </p>
        </div>

        <div className="budget-total">
          <div className="budget-total__label">Total funding requested</div>
          <div className="budget-total__num">USD 1,801,697</div>
          <div className="budget-total__sub">24-month programme · Kisii and Nyamira Counties · 1,500 households</div>
        </div>

        <div className="budget-lines">
          {lines.map((line, i) => (
            <div key={i} className="budget-line">
              <div>
                <div className="budget-line__name">{line.name}</div>
                <div className="budget-line__bar">
                  <div className="budget-line__bar-fill" style={{ width: line.width }}></div>
                </div>
              </div>
              <div className="budget-line__pct">{line.pct}</div>
              <div className="budget-line__amt">{line.amt}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 'var(--space-12)', padding: 'var(--space-10)', background: 'var(--surface-elevated)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, maxWidth: '40ch', marginInline: 'auto' }}>
            Quarterly financial reports published. Any donor can request a meeting to review. Zero admin deduction from donations — we raise admin costs separately.
          </p>
        </div>
      </div>
    </div>
  );
};
