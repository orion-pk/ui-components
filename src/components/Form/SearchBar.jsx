import React from 'react';
import { Search, X } from 'lucide-react';

export const SearchBar = ({ value, onChange, placeholder = 'Search...', onClear }) => {
  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', width: '100%', maxWidth: '320px' }}>
      <Search size={16} color="#64748b" style={{ position: 'absolute', left: '0.75rem', pointerEvents: 'none' }} />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: '0.45rem 2rem 0.45rem 2.25rem',
          borderRadius: '6px',
          border: '1.5px solid #cbd5e1',
          fontSize: '0.85rem',
          color: '#0f172a',
          outline: 'none',
        }}
      />
      {value && (
        <button
          type="button"
          onClick={() => { onChange(''); onClear && onClear(); }}
          style={{ position: 'absolute', right: '0.6rem', background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8' }}
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
};
