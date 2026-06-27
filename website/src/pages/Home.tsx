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
        <div className="hero__visual" style={{ position: 'relative', overflow: 'hidden' }}>
          <img src={content.hero.heroImage} alt="OBOMOCARE community care" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
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

      <section className="section" style={{ background: 'var(--surface-primary)' }}>
        <div className="container">
          <div className="features-head" style={{ textAlign: 'center' }}>
            <div className="features-head__tag">Our pillars</div>
            <h2 style={{ color: '#fff' }}>How we deliver care</h2>
          </div>
          <div className="grid-auto">
            {content.programs.map((program) => (
              <ReactRouterDOM.Link
                key={program.id}
                to={`/programs/${program.id}`}
                style={{ display: 'block', padding: 'var(--space-6)', background: 'var(--surface-elevated)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.08)', textDecoration: 'none', transition: 'border-color 200ms ease' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-accent)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'; }}
              >
                <img src={program.image} alt={program.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div className="card__body" style={{ padding: 'var(--space-6)' }}>
                  <span style={{ display: 'inline-block', padding: 'var(--space-1) var(--space-3)', background: 'var(--color-accent)', color: '#fff', fontSize: 'var(--text-xs)', fontWeight: 600, borderRadius: 'var(--radius-pill)', marginBottom: 'var(--space-3)' }}>
                    {program.stats}
                  </span>
                  <h3 className="card__title" style={{ color: '#fff' }}>{program.title}</h3>
                  <p className="card__text" style={{ color: 'rgba(255,255,255,0.6)' }}>{program.description}</p>
                  <span style={{ color: 'var(--color-accent)', fontSize: 'var(--text-sm)', fontWeight: 600, marginTop: 'var(--space-3)', display: 'inline-block' }}>
                    Learn more &rarr;
                  </span>
                </div>
              </ReactRouterDOM.Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--surface-light)' }}>
        <div className="container">
          <div className="features-head" style={{ textAlign: 'center' }}>
            <div className="features-head__tag">Stories</div>
            <h2>Impact stories from our community</h2>
          </div>
          <div className="grid-auto">
            {content.stories.slice(0, 3).map((story) => (
              <ReactRouterDOM.Link
                key={story.id}
                to={`/stories/${story.id}`}
                className="card"
                style={{ textDecoration: 'none' }}
              >
                <img src={story.image} alt={story.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div className="card__body">
                  <div className="card__tag">{story.category}</div>
                  <h3 className="card__title">{story.title}</h3>
                  <p className="card__text">{story.excerpt}</p>
                  <span style={{ color: 'var(--color-accent)', fontSize: 'var(--text-sm)', fontWeight: 600, marginTop: 'var(--space-3)', display: 'inline-block' }}>
                    Read story &rarr;
                  </span>
                </div>
              </ReactRouterDOM.Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
            <ReactRouterDOM.Link to="/stories" className="btn btn--accent">
              View all stories
            </ReactRouterDOM.Link>
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
