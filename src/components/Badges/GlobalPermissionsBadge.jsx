import React from 'react';
import { ShieldCheck, ShieldAlert } from 'lucide-react';

export const GlobalPermissionsBadge = ({ permissions = [], isSuperAdmin = false }) => {
  if (isSuperAdmin) {
    return (
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.35rem 0.75rem', background: '#d1fae5', border: '1px solid #a7f3d0', borderRadius: '20px', color: '#065f46', fontSize: '0.78rem', fontWeight: 700 }}>
        <ShieldCheck size={16} />
        <span>Super Admin (Full Access)</span>
      </div>
    );
  }

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.35rem 0.75rem', background: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: '20px', color: '#475569', fontSize: '0.78rem', fontWeight: 600 }}>
      <ShieldAlert size={16} color="#64748b" />
      <span>{permissions.length} Custom Permissions Active</span>
    </div>
  );
};
