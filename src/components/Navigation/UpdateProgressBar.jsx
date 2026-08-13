import React from 'react';

export const UpdateProgressBar = ({ progress = 0, statusText }) => {
  return (
    <div style={{ background: '#f8fafc', border: '1px solid #cbd5e1', padding: '0.85rem', borderRadius: '8px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem', fontSize: '0.82rem', fontWeight: 600, color: '#0f172a' }}>
        <span>{statusText || (progress >= 100 ? 'Download Complete!' : 'Downloading Update...')}</span>
        <span>{progress}%</span>
      </div>
      <div style={{ width: '100%', height: '10px', background: '#e2e8f0', borderRadius: '5px', overflow: 'hidden' }}>
        <div
          style={{
            width: `${Math.min(100, Math.max(0, progress))}%`,
            height: '100%',
            background: progress >= 100 ? '#10b981' : '#02658b',
            transition: 'width 0.3s ease',
          }}
        />
      </div>
    </div>
  );
};
