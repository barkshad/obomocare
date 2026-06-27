import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { useContent } from '../contexts/ContentContext';

export const Home: React.FC = () => {
  const { content } = useContent();

  const stats = content.homePage?.stats || [
    { id: '1', value: 2000, suffix: '+', label: 'Families served since 2020' },
    { id: '2', value: 5, suffix: ' yrs', label: 'Community-funded operation' },
    { id: '3', value: 40, suffix: '', label: 'Volunteer caregivers' },
  ];

  const quickLinks = [
    { to: '/about', label: 'Who we are', desc: 'How OBOMOCARE started and why the Gusii region needs this work.' },
    { to: '/programs', label: 'What we do', desc: 'Four programme pillars — food, transport, personal care, companionship.' },
    { to: '/impact', label: 'Our impact', desc: 'Numbers, outcomes, and the difference we are seeing.' },
    { to: '/get-involved', label: 'Get involved', desc: 'Donate, volunteer, or partner. Pick what fits.' },
  ];

  if (!content || !content.hero) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-brand)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <div style={{ width: 48, height: 48, border: '3px solid var(--color-accent)', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }}></div>
          <p style={{ fontWeight: 700, color: 'var(--color-accent)' }}>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="hero">
        <div className="hero__content">
          <div className="hero__eyebrow">Gusii Region, Kenya &middot; Est. 2020</div>
          <h1>{content.hero.headline}</h1>
          <p>{content.hero.subheadline}</p>
          <ReactRouterDOM.Link to="/get-involved" className="btn btn--accent">
            Support our work
          </ReactRouterDOM.Link>
        </div>
        <div className="hero__visual">
          <div className="hero__pattern"></div>
        </div>
      </section>

      <section className="full-bleed" style={{ background: 'var(--color-brand-dark)' }}>
        <div className="stats">
          {stats.map((stat) => (
            <div key={stat.id} className="stat">
              <div className="stat__number">{Number(stat.value).toLocaleString()}{stat.suffix}</div>
              <div className="stat__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ background: 'var(--surface-light)' }}>
        <div className="container">
          <div className="features-head" style={{ textAlign: 'center' }}>
            <div className="features-head__tag">How to navigate</div>
            <h2>What matters most, in one place</h2>
          </div>
          <div className="grid-auto">
            {quickLinks.map((link) => (
              <ReactRouterDOM.Link key={link.to} to={link.to} className="card card--link">
                <div className="card__body">
                  <h3 className="card__title">{link.label}</h3>
                  <p className="card__text">{link.desc}</p>
                </div>
              </ReactRouterDOM.Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>The people we serve are our neighbours.</h2>
          <p>Each one has a name, a story, and a right to care. We invite you to make it possible at scale. Full financial transparency, quarterly reporting, and open donor access guaranteed.</p>
          <div className="cta-actions">
            <ReactRouterDOM.Link to="/get-involved" className="btn btn--light">
              Partner with us
            </ReactRouterDOM.Link>
            <ReactRouterDOM.Link to="/programs" className="btn btn--outline">
              Read the full proposal
            </ReactRouterDOM.Link>
          </div>
        </div>
      </section>
    </>
  );
};
