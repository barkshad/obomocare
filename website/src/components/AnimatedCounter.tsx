import React from 'react';
import { BRAND } from '../config/brand';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, suffix = "", label }) => {
  return (
    <div
      className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm"
      style={{ borderColor: BRAND.border, borderWidth: 1 }}
    >
      <span
        className="text-4xl md:text-5xl font-bold font-serif mb-2"
        style={{ color: BRAND.blue }}
      >
        {value.toLocaleString()}{suffix}
      </span>
      <span className="text-sm md:text-base text-slate-500 uppercase tracking-wide font-medium text-center">
        {label}
      </span>
    </div>
  );
};
