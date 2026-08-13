import React, { useState, useRef, useEffect } from 'react';
import { User, LogOut, Settings, ChevronDown } from 'lucide-react';

export const ProfileDropdown = ({ username, role, email, onLogout, onSettingsClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ref} style={{ position: 'relative', display: 'inline-block' }}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          padding: '0.4rem 0.75rem',
          background: '#ffffff',
          border: '1.5px solid #cbd5e1',
          borderRadius: '0.5rem',
          cursor: 'pointer',
        }}
      >
        <div
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: '#e5f3f7',
            color: '#02658b',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: '0.85rem',
          }}
        >
          {(username || 'U').charAt(0).toUpperCase()}
        </div>
        <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0f172a' }}>{username}</span>
          {role && <span style={{ fontSize: '0.7rem', color: '#64748b' }}>{role}</span>}
        </div>
        <ChevronDown size={14} color="#64748b" />
      </button>

      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 0.5rem)',
            right: 0,
            width: '200px',
            background: '#ffffff',
            border: '1.5px solid #cbd5e1',
            borderRadius: '0.5rem',
            boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
            zIndex: 1000,
            padding: '0.5rem 0',
          }}
        >
          {email && (
            <div style={{ padding: '0.5rem 0.85rem', borderBottom: '1px solid #f1f5f9', fontSize: '0.75rem', color: '#64748b' }}>
              Signed in as <strong style={{ color: '#0f172a' }}>{email}</strong>
            </div>
          )}

          {onSettingsClick && (
            <button
              type="button"
              onClick={() => { setIsOpen(false); onSettingsClick(); }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                width: '100%',
                padding: '0.5rem 0.85rem',
                border: 'none',
                background: 'none',
                color: '#334155',
                fontSize: '0.82rem',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <Settings size={14} />
              <span>Settings</span>
            </button>
          )}

          <button
            type="button"
            onClick={() => { setIsOpen(false); onLogout && onLogout(); }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              width: '100%',
              padding: '0.5rem 0.85rem',
              border: 'none',
              background: 'none',
              color: '#ef4444',
              fontSize: '0.82rem',
              fontWeight: 600,
              cursor: 'pointer',
              textAlign: 'left',
            }}
          >
            <LogOut size={14} />
            <span>Sign Out</span>
          </button>
        </div>
      )}
    </div>
  );
};
