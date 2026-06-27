import React from 'react';
import { useContent } from '../contexts/ContentContext';

export const Impact: React.FC = () => {
  const { content } = useContent();

  return (
    <div className="section" style={{ background: 'var(--surface-primary)', paddingTop: '6rem' }}>
      <div className="container">
        <div className="features-head" style={{ textAlign: 'center' }}>
          <div className="features-head__tag">Impact</div>
          <h1 style={{ fontSize: 'var(--text-5xl)', fontWeight: 700, color: '#fff', marginBottom: 'var(--space-4)' }}>
            Our Impact
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '40ch', marginInline: 'auto', lineHeight: 1.7 }}>
            Five years of community-funded operation. Two thousand families served. Zero international funding.
          </p>
        </div>

        <div className="stats" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: 'var(--space-16)' }}>
          {[
            { num: '2,000+', label: 'Families served' },
            { num: '5 yrs', label: 'Community-funded' },
            { num: '40', label: 'Active caregivers' },
            { num: '22', label: 'Programme coordinators' },
          ].map((item, i) => (
            <div key={i} className="stat">
              <div className="stat__number">{item.num}</div>
              <div className="stat__label">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="features-head">
          <div className="features-head__tag">Evidence</div>
          <h2 style={{ fontSize: 'var(--text-4xl)', fontWeight: 700, color: '#fff', marginBottom: 'var(--space-4)' }}>
            What the numbers show
          </h2>
        </div>

        <div className="kpi-grid" style={{ marginBottom: 'var(--space-16)' }}>
          {[
            { num: '1,500', label: 'Vulnerable households enrolled and receiving full programme support' },
            { num: '80%', label: 'Of enrolled households with adequate food access' },
            { num: '85%', label: 'Clinic appointment attendance rate' },
            { num: '90%', label: 'Beneficiaries reporting improved dignity' },
          ].map((kpi, i) => (
            <div key={i} className="kpi">
              <div className="kpi__number">{kpi.num}</div>
              <div className="kpi__label">{kpi.label}</div>
            </div>
          ))}
        </div>

        <div style={{ padding: 'var(--space-12)', background: 'var(--surface-elevated)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
          <p style={{ fontSize: 'var(--text-lg)', color: 'rgba(255,255,255,0.72)', lineHeight: 1.6, maxWidth: '40ch', marginInline: 'auto' }}>
            We have not measured our impact on depression scores yet. We plan to start in 2026.
          </p>
        </div>
      </div>
    </div>
  );
};
