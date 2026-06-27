import React from 'react';
import { BRAND } from '../brand';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = "", hoverEffect = false }) => {
  return (
    <div
      className={`bg-white border rounded-2xl overflow-hidden ${hoverEffect ? 'hover:-translate-y-1 hover:shadow-lg transition-all duration-200' : ''} ${className}`}
      style={{
        borderColor: BRAND.border,
        boxShadow: '0 1px 3px 0 rgba(0,0,0,0.06)'
      }}
    >
      <div className="h-full">
        {children}
      </div>
    </div>
  );
};
