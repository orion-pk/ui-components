import React from 'react';
import { Loader2 } from 'lucide-react';

export const Button = ({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'danger' | 'outline'
  size = 'md', // 'sm' | 'md' | 'lg'
  loading = false,
  disabled = false,
  icon: Icon,
  onClick,
  type = 'button',
  fullWidth = false,
  style = {},
}) => {
  const variantStyles = {
    primary: { bg: '#02658b', color: '#ffffff', border: 'none' },
    secondary: { bg: '#f1f5f9', color: '#0f172a', border: '1px solid #cbd5e1' },
    danger: { bg: '#ef4444', color: '#ffffff', border: 'none' },
    outline: { bg: '#ffffff', color: '#02658b', border: '1.5px solid #02658b' },
  }[variant] || { bg: '#02658b', color: '#ffffff', border: 'none' };

  const sizePadding = {
    sm: '0.3rem 0.6rem',
    md: '0.45rem 0.95rem',
    lg: '0.65rem 1.3rem',
  }[size] || '0.45rem 0.95rem';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.4rem',
        padding: sizePadding,
        borderRadius: '6px',
        background: variantStyles.bg,
        color: variantStyles.color,
        border: variantStyles.border,
        fontSize: size === 'sm' ? '0.78rem' : size === 'lg' ? '1rem' : '0.85rem',
        fontWeight: 600,
        cursor: (disabled || loading) ? 'not-allowed' : 'pointer',
        opacity: (disabled || loading) ? 0.6 : 1,
        width: fullWidth ? '100%' : 'auto',
        transition: 'all 0.15s ease',
        ...style,
      }}
    >
      {loading ? <Loader2 size={16} className="orion-spin" /> : Icon ? <Icon size={16} /> : null}
      <span>{children}</span>
    </button>
  );
};
