import React from 'react';
import { Filter } from 'lucide-react';

export const FilterButton = ({ activeCount = 0, onClick, label = 'Filter' }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.4rem',
        padding: '0.45rem 0.85rem',
        borderRadius: '6px',
        background: activeCount > 0 ? '#e5f3f7' : '#ffffff',
        border: `1.5px solid ${activeCount > 0 ? '#02658b' : '#cbd5e1'}`,
        color: activeCount > 0 ? '#02658b' : '#0f172a',
        fontSize: '0.85rem',
        fontWeight: 600,
        cursor: 'pointer',
      }}
    >
      <Filter size={15} color={activeCount > 0 ? '#02658b' : '#64748b'} />
      <span>{label}</span>
      {activeCount > 0 && (
        <span
          style={{
            background: '#02658b',
            color: '#ffffff',
            fontSize: '0.7rem',
            fontWeight: 700,
            borderRadius: '50%',
            width: '18px',
            height: '18px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: '0.2rem',
          }}
        >
          {activeCount}
        </span>
      )}
    </button>
  );
};
