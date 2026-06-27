import React from 'react';
import { useContent } from '../contexts/ContentContext';
import * as ReactRouterDOM from 'react-router-dom';

export const Programs: React.FC = () => {
  const { content } = useContent();

  return (
    <div className="section" style={{ background: 'var(--surface-primary)', paddingTop: '6rem' }}>
      <div className="container">
        <div className="features-head" style={{ textAlign: 'center' }}>
          <div className="features-head__tag">Our work</div>
          <h1 style={{ fontSize: 'var(--text-5xl)', fontWeight: 700, color: '#fff', marginBottom: 'var(--space-4)' }}>
            Four pillars. One integrated model.
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '40ch', marginInline: 'auto', lineHeight: 1.7 }}>
            We do not choose between food or healthcare or dignity. The needs do not arrive separately — and neither do our interventions.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
          {content.programs.map((program) => (
            <ReactRouterDOM.Link
              key={program.id}
              to={`/programs/${program.id}`}
              style={{ display: 'block', padding: 'var(--space-8)', background: 'var(--surface-elevated)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.08)', transition: 'border-color 200ms ease', textDecoration: 'none' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-accent)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'; }}
            >
              <img src={program.image} alt={program.title} style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: 'var(--radius-md) var(--radius-md) 0 0' }} />
              <div style={{ padding: 'var(--space-6)', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--space-6)' }}>
                <div>
                  <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, color: '#fff', marginBottom: 'var(--space-3)' }}>{program.title}</h2>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: '48ch' }}>{program.description}</p>
                </div>
                <span style={{ flexShrink: 0, padding: 'var(--space-2) var(--space-4)', background: 'var(--color-accent)', color: '#fff', fontSize: 'var(--text-xs)', fontWeight: 600, borderRadius: 'var(--radius-pill)', whiteSpace: 'nowrap' }}>
                  {program.stats}
                </span>
              </div>
            </ReactRouterDOM.Link>
          ))}
        </div>
      </div>
    </div>
  );
};
