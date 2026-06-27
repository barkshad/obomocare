import React from 'react';

export const Loading: React.FC = () => {
  return (
    <div
      style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'var(--color-brand)' }}
    >
      <div style={{ position: 'relative' }}>
        <div style={{ width: 56, height: 56, borderRadius: '50%', border: '3px solid rgba(255,255,255,0.1)' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, width: 56, height: 56, borderRadius: '50%', border: '3px solid transparent', borderTopColor: 'var(--color-accent)', animation: 'spin 0.8s linear infinite' }} />
      </div>
      <p style={{ marginTop: 'var(--space-6)', fontSize: 'var(--text-sm)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
        OBOMOCARE
      </p>
    </div>
  );
};
