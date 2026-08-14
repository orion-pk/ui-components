import React from 'react';
import {
  ShieldCheck,
  Users,
  X,
} from 'lucide-react';

export const Sidebar = ({ isMobileOpen, closeMobile, user, isSuperAdmin, activePath = '/admin/users', LinkComponent }) => {
  const BrandConfig = {
    brandName: 'Academia Platform',
    primaryColor: '#02658b',
    sidebarBg: '#ffffff',
  };

  const renderItem = (to, icon, label) => {
    const isActive = activePath === to;
    const itemStyle = {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      padding: '0.65rem 0.85rem',
      borderRadius: '8px',
      fontSize: '0.88rem',
      fontWeight: 600,
      textDecoration: 'none',
      color: isActive ? '#02658b' : '#475569',
      backgroundColor: isActive ? '#e5f3f7' : 'transparent',
      borderLeft: isActive ? '3.5px solid #02658b' : '3.5px solid transparent',
    };

    if (LinkComponent) {
      return (
        <LinkComponent to={to} onClick={closeMobile} style={itemStyle}>
          {icon}
          <span>{label}</span>
        </LinkComponent>
      );
    }

    return (
      <a href={to} onClick={(e) => { e.preventDefault(); closeMobile && closeMobile(); }} style={itemStyle}>
        {icon}
        <span>{label}</span>
      </a>
    );
  };

  return (
    <>
      {isMobileOpen && (
        <div
          className="sidebar-overlay"
          onClick={closeMobile}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.4)',
            zIndex: 99,
          }}
        />
      )}

      <aside
        className={`app-sidebar ${isMobileOpen ? 'mobile-open' : ''}`}
        style={{
          width: '260px',
          background: BrandConfig.sidebarBg,
          borderRight: '1px solid #cbd5e1',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '1.25rem 1rem',
          height: '100vh',
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}
      >
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', padding: '0 0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: BrandConfig.primaryColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                }}
              >
                A
              </div>
              <span style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a' }}>{BrandConfig.brandName}</span>
            </div>

            {isMobileOpen && (
              <button onClick={closeMobile} style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer' }}>
                <X size={20} />
              </button>
            )}
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {renderItem('/admin/users', <Users size={18} />, 'User & Role Manager')}
            {renderItem('/admin/governance', <ShieldCheck size={18} />, 'Admin Governance')}
          </nav>
        </div>
      </aside>
    </>
  );
};
