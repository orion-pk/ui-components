import React from 'react';

export const PhoneInput = ({
  value = '',
  onChange,
  maxLength = 11,
  placeholder = '03001234567',
  disabled = false,
  error = '',
  label = 'Phone Number',
}) => {
  const handleChange = (e) => {
    // Strip non-digits
    const raw = e.target.value.replace(/\D/g, '');
    const truncated = raw.slice(0, maxLength);
    onChange(truncated);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', width: '100%' }}>
      {label && <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>{label}</label>}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <input
          type="tel"
          value={value}
          onChange={handleChange}
          maxLength={maxLength}
          placeholder={placeholder}
          disabled={disabled}
          style={{
            width: '100%',
            padding: '0.45rem 3rem 0.45rem 0.75rem',
            borderRadius: '6px',
            border: `1.5px solid ${error ? '#ef4444' : '#cbd5e1'}`,
            fontSize: '0.85rem',
            color: '#0f172a',
            outline: 'none',
          }}
        />
        <span
          style={{
            position: 'absolute',
            right: '0.75rem',
            fontSize: '0.72rem',
            fontWeight: 600,
            color: value.length >= maxLength ? '#02658b' : '#94a3b8',
          }}
        >
          {value.length}/{maxLength}
        </span>
      </div>
      {error && <span style={{ fontSize: '0.75rem', color: '#ef4444' }}>{error}</span>}
    </div>
  );
};
