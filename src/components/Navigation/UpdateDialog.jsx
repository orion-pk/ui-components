import React from 'react';
import { Download, X, ShieldCheck } from 'lucide-react';

export const UpdateDialog = ({
  isOpen,
  currentVersion,
  latestVersion,
  onClose,
  onUpdateClick,
  downloading,
  downloadProgress,
}) => {
  if (!isOpen) return null;

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
          maxWidth: '420px',
          background: '#ffffff',
          border: '1.5px solid #cbd5e1',
          borderRadius: '0.75rem',
          padding: '1.5rem',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.15)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Download size={22} color="#02658b" />
            <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>Software Update</h3>
          </div>
          <button type="button" onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}>
            <X size={20} />
          </button>
        </div>

        {/* 2 Clean Version Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
          <div style={{ background: '#f8fafc', border: '1.5px solid #cbd5e1', borderRadius: '8px', padding: '0.85rem', textAlign: 'center' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
              Current Version
            </div>
            <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a' }}>
              v{currentVersion}
            </div>
          </div>

          <div style={{ background: '#e5f3f7', border: '1.5px solid #02658b', borderRadius: '8px', padding: '0.85rem', textAlign: 'center' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#02658b', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
              Update Version
            </div>
            <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#02658b' }}>
              v{latestVersion}
            </div>
          </div>
        </div>

        {/* Progress bar if downloading */}
        {downloading && (
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.35rem' }}>
              <span>Downloading update...</span>
              <span>{downloadProgress}%</span>
            </div>
            <div style={{ width: '100%', height: '8px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: `${downloadProgress}%`, height: '100%', background: '#02658b', transition: 'width 0.3s' }} />
            </div>
          </div>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', color: '#065f46', background: '#d1fae5', padding: '0.5rem 0.75rem', borderRadius: '6px', marginBottom: '1.25rem' }}>
          <ShieldCheck size={16} />
          <span>Your database & app data remain safe during update.</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
          <button type="button" onClick={onClose} style={{ padding: '0.45rem 0.85rem', borderRadius: '6px', background: '#ffffff', border: '1.5px solid #cbd5e1', cursor: 'pointer' }}>
            Cancel
          </button>
          <button type="button" onClick={onUpdateClick} disabled={downloading} style={{ padding: '0.45rem 1rem', borderRadius: '6px', background: '#02658b', color: '#ffffff', border: 'none', fontWeight: 600, cursor: 'pointer' }}>
            {downloading ? 'Downloading...' : 'Update Now'}
          </button>
        </div>
      </div>
    </div>
  );
};
