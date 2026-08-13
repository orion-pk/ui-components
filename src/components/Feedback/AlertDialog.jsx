import React from 'react';
import { AlertTriangle, Info, CheckCircle2, X } from 'lucide-react';

export const AlertDialog = ({
  isOpen,
  title,
  message,
  type = 'warning', // 'warning' | 'danger' | 'info' | 'success'
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  onConfirm,
  onCancel,
  loading = false,
}) => {
  if (!isOpen) return null;

  const typeConfig = {
    warning: { icon: AlertTriangle, color: '#f97316', btnBg: '#f97316' },
    danger: { icon: AlertTriangle, color: '#ef4444', btnBg: '#ef4444' },
    info: { icon: Info, color: '#02658b', btnBg: '#02658b' },
    success: { icon: CheckCircle2, color: '#10b981', btnBg: '#10b981' },
  }[type] || { icon: Info, color: '#02658b', btnBg: '#02658b' };

  const IconComponent = typeConfig.icon;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.45)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10000,
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '400px',
          background: '#ffffff',
          border: '1.5px solid #cbd5e1',
          borderRadius: '0.75rem',
          padding: '1.5rem',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.15)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem' }}>
          <div style={{ padding: '0.5rem', borderRadius: '50%', backgroundColor: `${typeConfig.color}15` }}>
            <IconComponent size={22} color={typeConfig.color} />
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700, color: '#0f172a' }}>{title}</h3>
            {message && <p style={{ margin: '0.35rem 0 0 0', fontSize: '0.85rem', color: '#64748b' }}>{message}</p>}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1.25rem' }}>
          {cancelText && (
            <button
              type="button"
              onClick={onCancel}
              disabled={loading}
              style={{
                padding: '0.45rem 0.9rem',
                borderRadius: '6px',
                background: '#ffffff',
                border: '1.5px solid #cbd5e1',
                color: '#0f172a',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              {cancelText}
            </button>
          )}
          <button
            type="button"
            onClick={onConfirm}
            disabled={loading}
            style={{
              padding: '0.45rem 1rem',
              borderRadius: '6px',
              background: typeConfig.btnBg,
              border: 'none',
              color: '#ffffff',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            {loading ? 'Processing...' : confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};
