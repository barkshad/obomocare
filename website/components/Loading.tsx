import React from 'react';
import { BRAND } from '../brand';

export const Loading: React.FC = () => {
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ backgroundColor: BRAND.surface }}
    >
      <div className="relative">
        <div
          className="w-14 h-14 rounded-full border-4"
          style={{ borderColor: BRAND.border }}
        />
        <div
          className="absolute top-0 left-0 w-14 h-14 rounded-full border-4 border-t-transparent animate-spin"
          style={{ borderColor: BRAND.blue, borderTopColor: 'transparent' }}
        />
      </div>
      <p
        className="mt-6 text-sm font-bold tracking-widest uppercase"
        style={{ color: BRAND.blue }}
      >
        OBOMOCARE
      </p>
    </div>
  );
};
