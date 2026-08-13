import React from 'react';

export const FormSelect = ({
  label,
  value,
  onChange,
  options = [], // [{ label: 'Option 1', value: '1' }]
  disabled = false,
  error = '',
  placeholder = 'Select option...',
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', width: '100%' }}>
      {label && <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>{label}</label>}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        style={{
          width: '100%',
          padding: '0.48rem 0.75rem',
          borderRadius: '6px',
          border: `1.5px solid ${error ? '#ef4444' : '#cbd5e1'}`,
          fontSize: '0.85rem',
          color: '#0f172a',
          backgroundColor: '#ffffff',
          outline: 'none',
        }}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt, idx) => (
          <option key={idx} value={typeof opt === 'object' ? opt.value : opt}>
            {typeof opt === 'object' ? opt.label : opt}
          </option>
        ))}
      </select>
      {error && <span style={{ fontSize: '0.75rem', color: '#ef4444' }}>{error}</span>}
    </div>
  );
};
