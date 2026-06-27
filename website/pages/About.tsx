import React from 'react';
import { useContent } from '../contexts/ContentContext';
import * as ReactRouterDOM from 'react-router-dom';
import { Users, Shield, Settings, BarChart3, Banknote, Gavel } from 'lucide-react';

const governanceCards = [
  { id: 'ga', icon: Users, title: 'General Assembly', desc: 'Supreme decision-making organ. All registered members in good standing. Adopts constitution, elects trustees, approves annual accounts.', badge: 'Supreme organ' },
  { id: 'bt', icon: Shield, title: 'Board of Trustees', desc: 'Five to nine members elected for 3-year terms. Responsible for strategic direction, financial oversight, legal compliance.', badge: 'Meets quarterly' },
  { id: 'ec', icon: Settings, title: 'Executive Committee', desc: 'Nine elected officers including Chairperson, Secretary, Treasurer, Programmes Officer, Volunteer Coordinator, Community Liaison Officer.', badge: 'Meets monthly' },
  { id: 'pc', icon: BarChart3, title: 'Programmes Committee', desc: 'Oversight and strategic guidance on all four programme pillars. Submits quarterly programme reports to the Board of Trustees.', badge: 'Oversight body' },
  { id: 'fa', icon: Banknote, title: 'Finance and Audit Committee', desc: 'Reviews all financial statements before Board presentation. Annual external audit by independent qualified auditor.', badge: 'Annual audit' },
  { id: 'dc', icon: Gavel, title: 'Disciplinary Committee', desc: 'Independent body handling all disciplinary matters. No Executive Committee member may sit on it.', badge: 'Independent' },
];

export const About: React.FC = () => {
  const { content } = useContent();

  return (
    <div className="section" style={{ background: 'var(--surface-elevated)', paddingTop: '6rem' }}>
      <div className="container">
        {/* Header */}
        <div className="features-head" style={{ textAlign: 'center' }}>
          <div className="features-head__tag">Who we are</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-5xl)', fontWeight: 700, color: 'var(--ink-900)' }}>
            About OBOMOCARE
          </h1>
        </div>

        {/* Mission & Vision */}
        <div className="split-layout" style={{ marginBottom: 'var(--space-16)' }}>
          <div className="card" style={{ padding: 'var(--space-10)', background: 'var(--color-brand-light)', borderColor: 'transparent' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--color-brand)', marginBottom: 'var(--space-4)' }}>Our Mission</h2>
            <p style={{ fontSize: 'var(--text-base)', color: 'var(--ink-700)', lineHeight: 1.7 }}>{content.about.mission}</p>
          </div>
          <div className="card" style={{ padding: 'var(--space-10)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--color-brand)', marginBottom: 'var(--space-4)' }}>Our Vision</h2>
            <p style={{ fontSize: 'var(--text-base)', color: 'var(--ink-700)', lineHeight: 1.7 }}>{content.about.vision}</p>
          </div>
        </div>

        {/* Quote Block */}
        <div style={{ background: 'var(--color-brand)', borderRadius: 'var(--radius-md)', padding: 'var(--space-16)', color: '#fff', marginBottom: 'var(--space-16)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '48rem' }}>
            <p style={{ fontSize: 'var(--text-xl)', lineHeight: 1.6, fontStyle: 'italic', opacity: 0.9, marginBottom: 'var(--space-8)' }}>
              &ldquo;{content.about.founderStory.substring(0, 200)}&rdquo;
            </p>
            <div style={{ fontSize: 'var(--text-sm)', fontWeight: 500, marginBottom: 'var(--space-4)', color: 'var(--color-accent)' }}>
              &mdash; OBOMOCARE Proposal, June 2026
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: 'var(--space-6)', marginTop: 'var(--space-6)' }}>
              <div style={{ fontSize: 'var(--text-xs)', opacity: 0.7, marginBottom: 'var(--space-2)' }}>Motto</div>
              <div style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--color-accent)' }}>Care. Unity. Dignity.</div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div style={{ marginBottom: 'var(--space-16)' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', fontWeight: 700, color: 'var(--ink-900)', textAlign: 'center', marginBottom: 'var(--space-8)' }}>
            Our Core Values
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--space-3)' }}>
            {content.about.values.map((value, idx) => (
              <span key={idx} style={{ padding: 'var(--space-3) var(--space-6)', borderRadius: '9999px', fontWeight: 600, fontSize: 'var(--text-sm)', border: '1px solid var(--ink-100)', background: 'var(--surface-elevated)', color: 'var(--color-brand)' }}>
                {value}
              </span>
            ))}
          </div>
        </div>

        {/* Governance */}
        <div style={{ marginBottom: 'var(--space-16)' }}>
          <div className="features-head" style={{ textAlign: 'center' }}>
            <div className="features-head__tag">Governance and accountability</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--ink-900)', lineHeight: 1.05, letterSpacing: '-0.03em' }}>
              Structured from the start
            </h2>
            <p style={{ color: 'var(--ink-500)', maxWidth: '40ch', margin: 'var(--space-4) auto 0', lineHeight: 1.7 }}>
              OBOMOCARE is governed by a constitution adopted at its inaugural General Assembly. Authority is distributed across six independent organs with clear mandates and checks.
            </p>
          </div>

          <div className="grid-auto">
            {governanceCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.id} className="card" style={{ textAlign: 'center', padding: 'var(--space-6)' }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--color-brand-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-4)' }}>
                    <Icon size={22} style={{ color: 'var(--color-brand)' }} />
                  </div>
                  <h4 style={{ fontWeight: 600, color: 'var(--ink-900)', marginBottom: 'var(--space-2)' }}>{card.title}</h4>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-500)', lineHeight: 1.6, marginBottom: 'var(--space-3)' }}>{card.desc}</p>
                  <span style={{ display: 'inline-block', padding: 'var(--space-1) var(--space-3)', background: 'var(--color-accent-light)', color: 'var(--color-accent)', fontSize: 'var(--text-xs)', fontWeight: 600, borderRadius: '9999px' }}>
                    {card.badge}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: 'var(--color-brand-light)', borderRadius: 'var(--radius-md)', padding: 'var(--space-16)', textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', fontWeight: 700, color: 'var(--ink-900)', marginBottom: 'var(--space-4)' }}>Join our mission</h3>
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
