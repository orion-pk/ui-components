import React, { useState, useRef, useEffect } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';

export const SearchBar = ({
  value,
  onChange,
  placeholder = 'Search by Name, Role, Email...',
  roleFilter = 'All',
  onRoleFilterChange,
  rolesList = ['All', 'Super Admin', 'Admin', 'Teacher', 'Student', 'Parent'],
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setIsFilterOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', width: '100%', maxWidth: '420px' }}>
      {/* Search Input Box */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          height: '42px',
          borderRadius: '9px',
          border: '1.5px solid #cbd5e1',
          background: '#FFFFFF',
          padding: '0 0.85rem',
          flex: 1,
        }}
      >
        <Search size={18} color="#64748b" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          style={{
            border: 'none',
            outline: 'none',
            width: '100%',
            fontSize: '0.88rem',
            color: '#0f172a',
            background: 'transparent',
          }}
        />
        {value && (
          <button
            type="button"
            onClick={() => onChange('')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8', padding: 0 }}
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Built-in Filter Trigger Button */}
      {onRoleFilterChange && (
        <div ref={filterRef} style={{ position: 'relative' }}>
          <button
            type="button"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem',
              width: '42px',
              height: '42px',
              borderRadius: '9px',
              border: `1.5px solid ${roleFilter !== 'All' ? '#02658b' : '#cbd5e1'}`,
              background: roleFilter !== 'All' ? '#e5f3f7' : '#FFFFFF',
              color: roleFilter !== 'All' ? '#02658b' : '#334155',
              cursor: 'pointer',
            }}
            title="Filter by Role"
          >
            <SlidersHorizontal size={18} />
          </button>

          {/* Role Filter Dropdown Menu */}
          {isFilterOpen && (
            <div
              style={{
                position: 'absolute',
                top: 'calc(100% + 0.4rem)',
                right: 0,
                background: '#FFFFFF',
                border: '1.5px solid #cbd5e1',
                borderRadius: '8px',
                padding: '0.5rem',
                minWidth: '160px',
                boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                zIndex: 100,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.2rem',
              }}
            >
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', padding: '0.2rem 0.4rem' }}>
                Filter by Role
              </div>
              {rolesList.map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => {
                    onRoleFilterChange(r);
                    setIsFilterOpen(false);
                  }}
                  style={{
                    textAlign: 'left',
                    padding: '0.35rem 0.6rem',
                    fontSize: '0.85rem',
                    background: roleFilter === r ? '#000000' : 'transparent',
                    color: roleFilter === r ? '#FFFFFF' : '#0f172a',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontWeight: roleFilter === r ? 600 : 400,
                  }}
                >
                  {r}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
