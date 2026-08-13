import React from 'react';
import { Loader2 } from 'lucide-react';

export const CustomLoader = ({ message = 'Loading...', fullPage = false, size = 28 }) => {
  const content = (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
        padding: '1.5rem',
      }}
    >
      <Loader2 size={size} color="#02658b" className="orion-spin" />
      {message && <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#475569' }}>{message}</span>}
    </div>
  );

  if (fullPage) {
    return (
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(3px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
        }}
      >
        {content}
      </div>
    );
  }

  return content;
};
