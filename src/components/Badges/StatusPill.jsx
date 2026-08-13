import React from 'react';

export const StatusPill = ({ status, customLabel }) => {
  const normalized = (status || '').toLowerCase().replace(/[\s_-]+/g, '');
  
  let config = {
    color: '#0f172a',
    bg: '#f1f5f9',
    border: '#cbd5e1',
    label: customLabel || status || 'Unknown',
  };

  if (['pending', 'unregistered'].includes(normalized)) {
    config = {
      color: '#991b1b',
      bg: '#fef2f2',
      border: '#fca5a5',
      label: customLabel || (normalized === 'pending' ? 'Pending' : 'Unregistered'),
    };
  } else if (['completed', 'registered'].includes(normalized)) {
    config = {
      color: '#065f46',
      bg: '#d1fae5',
      border: '#a7f3d0',
      label: customLabel || (normalized === 'completed' ? 'Completed' : 'Registered'),
    };
  } else if (['inconsultation', 'consultation'].includes(normalized)) {
    config = {
      color: '#9a3412',
      bg: '#ffedd5',
      border: '#fed7aa',
      label: customLabel || 'In Consultation',
    };
  }

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.35rem',
        padding: '0.25rem 0.65rem',
        borderRadius: '9999px',
        fontSize: '0.75rem',
        fontWeight: 600,
        color: config.color,
        backgroundColor: config.bg,
        border: `1px solid ${config.border}`,
        whiteSpace: 'nowrap',
      }}
    >
      <span
        style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: config.color,
        }}
      />
      {config.label}
    </span>
  );
};
