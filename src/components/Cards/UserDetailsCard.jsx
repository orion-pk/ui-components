import React from 'react';
import { User, Mail, Phone, Shield } from 'lucide-react';

export const UserDetailsCard = ({ name, email, phone, role, status, avatarUrl, actions }) => {
  return (
    <div
      style={{
        background: '#ffffff',
        border: '1.5px solid #cbd5e1',
        borderRadius: '0.75rem',
        padding: '1.25rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={name}
            style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }}
          />
        ) : (
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: '#e5f3f7',
              color: '#02658b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '1.1rem',
            }}
          >
            {(name || 'U').charAt(0).toUpperCase()}
          </div>
        )}

        <div>
          <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>{name}</h4>
          {role && (
            <span style={{ fontSize: '0.75rem', color: '#02658b', fontWeight: 600 }}>{role}</span>
          )}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.82rem', color: '#475569' }}>
        {email && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Mail size={14} color="#64748b" />
            <span>{email}</span>
          </div>
        )}
        {phone && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Phone size={14} color="#64748b" />
            <span>{phone}</span>
          </div>
        )}
      </div>

      {actions && (
        <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid #f1f5f9', display: 'flex', gap: '0.5rem' }}>
          {actions}
        </div>
      )}
    </div>
  );
};
