import React from 'react';

export const StatCard = ({ title, value, icon: Icon, trend, trendLabel, accentColor = '#02658b' }) => {
  return (
    <div
      style={{
        background: '#ffffff',
        border: '1.5px solid #cbd5e1',
        borderRadius: '0.75rem',
        padding: '1.25rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '0.75rem',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#64748b' }}>{title}</span>
        {Icon && (
          <div
            style={{
              padding: '0.5rem',
              borderRadius: '0.5rem',
              backgroundColor: `${accentColor}15`,
              color: accentColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Icon size={20} />
          </div>
        )}
      </div>

      <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.1 }}>
        {value}
      </div>

      {trend && (
        <div style={{ fontSize: '0.75rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <span style={{ color: trend.startsWith('+') ? '#10b981' : '#ef4444' }}>{trend}</span>
          {trendLabel && <span style={{ color: '#64748b' }}>{trendLabel}</span>}
        </div>
      )}
    </div>
  );
};
