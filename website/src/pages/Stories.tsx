import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { useContent } from '../contexts/ContentContext';

export const Stories: React.FC = () => {
  const { content } = useContent();

  return (
    <div className="section" style={{ background: 'var(--surface-primary)', paddingTop: '6rem' }}>
      <div className="container">
        <div className="features-head" style={{ textAlign: 'center' }}>
          <div className="features-head__tag">Stories</div>
          <h1 style={{ fontSize: 'var(--text-5xl)', fontWeight: 700, color: '#fff', marginBottom: 'var(--space-4)' }}>
            Impact Stories
          </h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: 'var(--space-8)' }}>
          {content.stories.map((story) => (
            <ReactRouterDOM.Link
              key={story.id}
              to={`/stories/${story.id}`}
              style={{ textDecoration: 'none', background: 'var(--surface-elevated)', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)', display: 'block', transition: 'border-color 200ms ease' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-accent)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)'; }}
            >
              <img src={story.image} alt={story.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'var(--space-4) var(--space-6)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ fontSize: 'var(--text-xs)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-accent)' }}>{story.category}</span>
                <span style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.4)' }}>{story.date}</span>
              </div>
              <div style={{ padding: 'var(--space-6)' }}>
                <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, color: '#fff', marginBottom: 'var(--space-3)' }}>{story.title}</h2>
                <p style={{ fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>{story.excerpt}</p>
                <span style={{ color: 'var(--color-accent)', fontSize: 'var(--text-sm)', fontWeight: 600 }}>Read full story &rarr;</span>
              </div>
            </ReactRouterDOM.Link>
          ))}
        </div>
      </div>
    </div>
  );
};
