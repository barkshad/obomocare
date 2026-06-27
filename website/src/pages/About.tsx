import React from 'react';
import { useContent } from '../contexts/ContentContext';
import * as ReactRouterDOM from 'react-router-dom';

export const About: React.FC = () => {
  const { content } = useContent();

  return (
    <div className="section" style={{ background: 'var(--surface-primary)', paddingTop: '6rem' }}>
      <div className="container">

        <div className="features-head" style={{ textAlign: 'center' }}>
          <div className="features-head__tag">Who we are</div>
          <h1 style={{ fontSize: 'var(--text-5xl)', fontWeight: 700, color: '#fff' }}>
            About OBOMOCARE
          </h1>
        </div>

        <div className="split-layout" style={{ marginBottom: 'var(--space-16)' }}>
          <div style={{ padding: 'var(--space-10)', background: 'var(--surface-elevated)', borderRadius: 'var(--radius-md)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, color: '#fff', marginBottom: 'var(--space-4)' }}>Our Mission</h2>
            <p style={{ fontSize: 'var(--text-base)', color: 'rgba(255,255,255,0.72)', lineHeight: 1.7 }}>{content.about.mission}</p>
          </div>
          <div style={{ padding: 'var(--space-10)', background: 'var(--surface-elevated)', borderRadius: 'var(--radius-md)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, color: '#fff', marginBottom: 'var(--space-4)' }}>Our Vision</h2>
            <p style={{ fontSize: 'var(--text-base)', color: 'rgba(255,255,255,0.72)', lineHeight: 1.7 }}>{content.about.vision}</p>
          </div>
        </div>

        <div style={{ background: 'var(--surface-elevated)', borderRadius: 'var(--radius-md)', padding: 'var(--space-16)', marginBottom: 'var(--space-16)', overflow: 'hidden' }}>
          <div style={{ maxWidth: '48rem' }}>
            <p style={{ fontSize: 'var(--text-xl)', lineHeight: 1.6, fontStyle: 'italic', color: 'rgba(255,255,255,0.85)', marginBottom: 'var(--space-8)' }}>
              &ldquo;{content.about.founderStory.substring(0, 200)}&rdquo;
            </p>
            <div style={{ fontSize: 'var(--text-sm)', fontWeight: 500, marginBottom: 'var(--space-4)', color: 'var(--color-accent)' }}>
              &mdash; OBOMOCARE Proposal, June 2026
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 'var(--space-6)', marginTop: 'var(--space-6)' }}>
              <div style={{ fontSize: 'var(--text-xs)', opacity: 0.6, marginBottom: 'var(--space-2)' }}>Motto</div>
              <div style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--color-accent)' }}>Care. Unity. Dignity.</div>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: 'var(--space-16)' }}>
          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, color: '#fff', textAlign: 'center', marginBottom: 'var(--space-8)' }}>
            Our Core Values
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--space-3)' }}>
            {content.about.values.map((value, idx) => (
              <span key={idx} style={{ padding: 'var(--space-3) var(--space-6)', borderRadius: '9999px', fontWeight: 600, fontSize: 'var(--text-sm)', border: '1px solid rgba(255,255,255,0.15)', background: 'var(--surface-elevated)', color: 'rgba(255,255,255,0.85)' }}>
                {value}
              </span>
            ))}
          </div>
        </div>

        <div style={{ background: 'var(--surface-light)', borderRadius: 'var(--radius-md)', padding: 'var(--space-16)', textAlign: 'center' }}>
          <h3 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, color: 'var(--ink-900)', marginBottom: 'var(--space-4)' }}>Join our mission</h3>
          <p style={{ color: 'var(--ink-500)', maxWidth: '40ch', margin: '0 auto var(--space-8)', lineHeight: 1.7 }}>
            Whether you volunteer, donate, or spread the word, your support helps us close the gaps that leave vulnerable households behind.
          </p>
          <ReactRouterDOM.Link to="/get-involved" className="btn btn--accent">
            Get involved
          </ReactRouterDOM.Link>
        </div>
      </div>
    </div>
  );
};
