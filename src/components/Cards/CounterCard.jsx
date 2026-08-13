import React from 'react';

export const CounterCard = ({ label, count, badgeColor = '#02658b' }) => {
  return (
    <div
      style={{
        background: '#ffffff',
        border: '1px solid #cbd5e1',
        borderRadius: '0.5rem',
        padding: '0.85rem 1.1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155' }}>{label}</span>
      <span
        style={{
          background: badgeColor,
          color: '#ffffff',
          fontWeight: 700,
          fontSize: '0.85rem',
          padding: '0.2rem 0.65rem',
          borderRadius: '9999px',
        }}
      >
        {count}
      </span>
    </div>
  );
};
