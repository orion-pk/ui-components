import React from 'react';

export const SeverityPill = ({ severity }) => {
  const normalized = (severity || '').toLowerCase();
  
  let config = {
    color: '#065f46',
    bg: '#d1fae5',
    border: '#a7f3d0',
    label: 'Minor',
  };

  if (normalized === 'moderate') {
    config = {
      color: '#014d6b',
      bg: '#e5f3f7',
      border: '#bae6fd',
      label: 'Moderate',
    };
  } else if (normalized === 'major' || normalized === 'critical') {
    config = {
      color: '#991b1b',
      bg: '#fef2f2',
      border: '#fca5a5',
      label: normalized === 'critical' ? 'Critical' : 'Major',
    };
  }

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '0.2rem 0.6rem',
        borderRadius: '4px',
        fontSize: '0.72rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.04em',
        color: config.color,
        backgroundColor: config.bg,
        border: `1px solid ${config.border}`,
      }}
    >
      {config.label}
    </span>
  );
};
