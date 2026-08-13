import React from 'react';

export const VersionBadge = ({ version, hasUpdate, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.4rem',
        padding: '0.35rem 0.75rem',
        background: '#f8fafc',
        color: '#0f172a',
        border: '1.5px solid #cbd5e1',
        borderRadius: '20px',
        fontSize: '0.78rem',
        fontWeight: 700,
        cursor: onClick ? 'pointer' : 'default',
      }}
      title={hasUpdate ? 'Update available!' : 'System up to date'}
    >
      <span style={{ color: '#64748b', fontSize: '0.7rem', textTransform: 'uppercase' }}>v</span>
      <span style={{ color: '#02658b' }}>{version}</span>
      {hasUpdate && (
        <span
          style={{
            width: '8px',
            height: '8px',
            backgroundColor: '#ef4444',
            borderRadius: '50%',
            boxShadow: '0 0 6px #ef4444',
          }}
        />
      )}
    </button>
  );
};
