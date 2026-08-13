import React from 'react';

export const LoginForm = ({ title = 'Sign In', subtitle = 'Welcome back! Please enter your credentials.', logo, onSubmit, children, loading }) => {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '400px',
        margin: '0 auto',
        background: '#ffffff',
        border: '1.5px solid #cbd5e1',
        borderRadius: '0.85rem',
        padding: '2rem',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.08)',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        {logo && <div style={{ marginBottom: '0.75rem' }}>{logo}</div>}
        <h2 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>{title}</h2>
        {subtitle && <p style={{ margin: '0.35rem 0 0 0', fontSize: '0.85rem', color: '#64748b' }}>{subtitle}</p>}
      </div>

      <form onSubmit={onSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', marginBottom: '1.5rem' }}>
          {children}
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            width: '100%',
            padding: '0.65rem',
            borderRadius: '6px',
            background: '#02658b',
            color: '#ffffff',
            border: 'none',
            fontSize: '0.9rem',
            fontWeight: 700,
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.6 : 1,
          }}
        >
          {loading ? 'Authenticating...' : 'Sign In'}
        </button>
      </form>
    </div>
  );
};
